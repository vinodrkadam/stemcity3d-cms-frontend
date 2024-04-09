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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { BASE_URL } from './constants';

const EditEvent = ({ event, onClose }) => { 
  const [eventData, setEventData] = useState({
    name: event.name,
    description: event.stripped_description,
    room: event.room,
    event_start_date: event.event_start_date,
    event_start_time: event.event_start_time,
    event_end_date: event.event_end_date,
    event_end_time: event.event_end_time,
    event_id: event.id
  }); 
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  const [rooms, setRooms] = useState([]);
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
        setRooms(roomsData.results);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setEventData(prevData => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedName = name === 'roomId' ? 'room' : name; // Change name to "room" if it's "roomId"
    setEventData(prevData => ({
      ...prevData,
      [updatedName]: value,
    }));
  };
  

  const handleSubmit = async () => {
    try {
      const changedFields = {};
      // Check for changed fields
      Object.keys(eventData).forEach(key => {
        if (eventData[key] !== event[key]) {
          changedFields[key] = eventData[key];
        }
      });

      if (Object.keys(changedFields).length === 0) {
        console.error('No changes detected');
        return;
      }
      console.log("cf", changedFields); 
      const token = Cookies.get('token');
      const response = await fetch(`${BASE_URL}/api/v1/events/${eventData.event_id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(changedFields),
      });

      if (!response.ok) {
        throw new Error('Failed to update event');
      }

      // Show success toast
      setShowSuccessSnackbar(true);
      toast.success('Event updated successfully');
      //onClose();
      // Refresh the page
      //window.location.reload();
    } catch (error) {
      // Show error toast
      toast.error('Error updating event');
      console.error('Error updating event:', error);
    }
  };

  const handleCloseSnackbar = () => {
         setShowSuccessSnackbar(false);
  };

  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Edit Event</Typography>
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
            {/* <select
              value={eventData.room_name}
              onChange={handleChange}
              name="roomId"
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            >
              <option value="">Select a room</option>
              {rooms.map(room => (
                <option key={room.id} value={room.id}>{room.name}</option>
              ))}
            </select> */}
            <select
              value={eventData.room} // Use the roomId for the value
              onChange={handleChange} // Handle the change event separately
              name="room"
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
        <Button variant="contained" color="primary" onClick={handleSubmit} style={{ borderRadius: '20px', fontWeight: 'bold', boxShadow: 'none' }}>Save Changes</Button>
      </DialogActions>
      <Snackbar
        open={showSuccessSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="success"
        >
          Event updated successfully.
          Reload the page to see the changes.
        </MuiAlert>
      </Snackbar>
    </Dialog>
  );
};

export default EditEvent;
