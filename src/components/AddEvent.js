import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Cookies from 'js-cookie';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { BASE_URL } from './constants';

const AddEvent = ({ onClose }) => {
  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    roomId: '',
    event_start_date: '',
    event_start_time: '',
    event_end_date: '',
    event_end_time: ''
  });

  const [rooms, setRooms] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const token = Cookies.get('token'); // Get the token from the cookie
        const response = await fetch(`${BASE_URL}/api/v1/rooms/`, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch rooms');
        }
        const roomsData = await response.json();
        setRooms(roomsData.results); // Assuming 'results' contains an array of rooms
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Make sure all required fields are filled
      if (!eventData.name || !eventData.roomId || !eventData.event_start_date || !eventData.event_start_time || !eventData.event_end_date || !eventData.event_end_time) {
        console.error('Please fill in all required fields');
        return;
      }
      
      const role = Cookies.get('role');
      const isAdmin = Cookies.get('isAdmin');

      if (role !== 'admin' && isAdmin !== 'true') {
        setShowSnackbar(true);
        setSnackbarSeverity('error');
        setSnackbarMessage('You must be an admin to create an event.');
        return;
      }
      // Create event data object to send
      const eventDataToSend = {
        name: eventData.name,
        description: eventData.description,
        room: eventData.roomId,
        event_start_date: eventData.event_start_date,
        event_start_time: eventData.event_start_time,
        event_end_date: eventData.event_end_date,
        event_end_time: eventData.event_end_time
      };

      console.log('Data being sent:', eventDataToSend);

      // Make POST request to create event
      const token = Cookies.get('token'); 
      const response = await fetch(`${BASE_URL}/api/v1/events/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(eventDataToSend),
      });

      if (!response.ok) {
        throw new Error('Failed to create event');
      }

      setShowSnackbar(true);
      setSnackbarSeverity('success');
      setSnackbarMessage('Event created successfully.');
      setTimeout(() => setShowSnackbar(false), 6000);
      resetForm();
    } catch (error) {
      console.error('Error creating event:', error);
      setShowSnackbar(true);
      setSnackbarSeverity('error');
      setSnackbarMessage('An error occurred. Please try again.');
    }
  };

  const resetForm = () => {
    setEventData({
      name: '',
      description: '',
      roomId: '',
      event_start_date: '',
      event_start_time: '',
      event_end_date: '',
      event_end_time: ''
    });
  };

  const handleCloseSnackbar = () => {
        setShowSnackbar(false);
      };

  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Add Event</Typography>
          <Button onClick={onClose} startIcon={<ArrowBackIcon />} style={{ backgroundColor: '#fdd835', color: '#424242', fontWeight: 'bold', boxShadow: 'none' }}>Close</Button>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Event Name</Typography>
            <TextField
              name="name"
              value={eventData.name}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Description</Typography>
            <TextField
              name="description"
              value={eventData.description}
              onChange={handleChange}
              multiline
              fullWidth
              rows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Room Name</Typography>
            <select
              value={eventData.roomId}
              onChange={handleChange}
              name="roomId"
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            >
              <option value="">Select a room</option>
              {rooms.map(room => (
                <option key={room.id} value={room.id}>{room.name}</option>
              ))}
            </select>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Start Date</Typography>
            <TextField
              type="date"
              name="event_start_date"
              value={eventData.event_start_date}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Start Time</Typography>
            <TextField
              type="time"
              name="event_start_time"
              value={eventData.event_start_time}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>End Date</Typography>
            <TextField
              type="date"
              name="event_end_date"
              value={eventData.event_end_date}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>End Time</Typography>
            <TextField
              type="time"
              name="event_end_time"
              value={eventData.event_end_time}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleSubmit} style={{ borderRadius: '20px', fontWeight: 'bold', boxShadow: 'none' }}>Submit</Button>
      </DialogActions>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Dialog>
  );
};

export default AddEvent;
