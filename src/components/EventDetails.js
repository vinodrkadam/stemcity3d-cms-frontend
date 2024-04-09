import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditEvent from './EditEvent';
import AddEvent from './AddEvent';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { BASE_URL } from './constants';

// Function to fetch event details from API
const fetchEventDetails = async () => {
  try {
    // Make API request to fetch event details
    const token = Cookies.get('token'); // Get the token from the cookie
    const response = await fetch(`${BASE_URL}/api/v1/events/`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch event details');
    }
    const eventData = await response.json();
    console.log("e",eventData.state)
    return eventData.results;
  } catch (error) {
    console.error('Error fetching event details:', error);
    return [];
  }
};

const EventDetails = () => {
  const [eventData, setEventData] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    // Fetch event details when component mounts
    fetchEventDetails().then((data) => {
      setEventData(data);
    });
  }, []);

  const handleEdit = (event) => {
    // Handle edit action
    setSelectedEvent(event);
    setShowEdit(true);
  };

  const handleDelete = async (eventName, eventId) => {
    // Handle delete action
    if (window.confirm("Are you sure you want to delete the event? This action cannot be reversed.")) {
      try {
        // const response = await fetch(`http://127.0.0.1:8000/api/v1/events/${eventId}/`, {
        //   method: 'DELETE',
        // });
        const token = Cookies.get('token'); // Get the token from the cookie
        const response = await fetch(`${BASE_URL}/api/v1/events/${eventId}/`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        });
        if (!response.ok) {
          throw new Error('Failed to delete event');
        }

        // Remove the deleted event from the state
        setEventData(prevEventData => prevEventData.filter(event => event.id !== eventId));
        
        // Show success toast
        setShowSnackbar(true);
      } catch (error) {
        // Show error toast
        toast.error('Error deleting event');
        console.error('Error deleting event:', error);
      }
    }
  };

  const handleAddEvent = () => {
    // Handle add event action
    setShowAdd(true);
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const stateMap = {
    draft: 'Draft',
    in_review: 'In-Review',
    published: 'Published'
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Event Details
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2, float: 'right' }} onClick={handleAddEvent}>
        Add an Event
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Event Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Room</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Start Time</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>End Time</TableCell>
              <TableCell>Event State</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventData.map((event) => (
              <TableRow key={event.name}>
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.stripped_description}</TableCell>
                <TableCell>{event.room_name}</TableCell>
                <TableCell>{event.event_start_date}</TableCell>
                <TableCell>{event.event_start_time.slice(0, 5)}</TableCell>
                <TableCell>{event.event_end_date}</TableCell>
                <TableCell>{event.event_end_time.slice(0, 5)}</TableCell>
                <TableCell>{stateMap[event.state]}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    onClick={() => handleEdit(event)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(event.name, event.id)}
                    sx={{ ml: 1 }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showEdit && <EditEvent event={selectedEvent} onClose={() => setShowEdit(false)} />}
      {showAdd && <AddEvent onClose={() => setShowAdd(false)} />}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="success"
        >
          Event deleted successfully
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default EventDetails;
