// // // import React, { useState, useEffect } from 'react';
// // // import Typography from '@mui/material/Typography';
// // // import Button from '@mui/material/Button';
// // // import Toolbar from '@mui/material/Toolbar';
// // // import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// // // import TableContainer from '@mui/material/TableContainer';
// // // import Paper from '@mui/material/Paper';
// // // import Table from '@mui/material/Table';
// // // import TableHead from '@mui/material/TableHead';
// // // import TableBody from '@mui/material/TableBody';
// // // import TableRow from '@mui/material/TableRow';
// // // import TableCell from '@mui/material/TableCell';

// // // const ReviewEvents = ({ onClose }) => {
// // //   const [events, setEvents] = useState([]);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
// // //         const response = await fetch('http://127.0.0.1:8000/api/v1/events-list/', {
// // //           headers: {
// // //             'Authorization': `Token ${token}`
// // //           }
// // //         });
// // //         if (!response.ok) {
// // //           throw new Error('Failed to fetch events');
// // //         }
// // //         const eventData = await response.json();
// // //         console.log("data",eventData.results);
// // //         setEvents(eventData.results);
// // //       } catch (error) {
// // //         console.error('Error fetching events:', error);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, []);


// // //   return (
// // //     <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
// // //       <Toolbar>
// // //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// // //           Review Events
// // //         </Typography>
// // //         <Button onClick={onClose} startIcon={<ArrowBackIcon />} style={{ backgroundColor: 'yellow' }}>
// // //           Go Back
// // //         </Button>
// // //       </Toolbar>
// // //       <Typography variant="body1" gutterBottom>
// // //         Here are the events:
// // //       </Typography>
// // //       <TableContainer component={Paper}>
// // //         <Table aria-label="review events table">
// // //           <TableHead>
// // //             <TableRow>
// // //               <TableCell>Event Name</TableCell>
// // //               <TableCell>Event Room</TableCell>
// // //               <TableCell>Event Owner</TableCell>
// // //               <TableCell>Event State</TableCell>
// // //               <TableCell>Actions</TableCell>
// // //             </TableRow>
// // //           </TableHead>
// // //           <TableBody>
// // //             {events.map((event, index) => (
// // //               <TableRow key={index}>
// // //                 <TableCell>{event.name}</TableCell>
// // //                 <TableCell>{event.room_name}</TableCell>
// // //                 <TableCell>{event.added_by_email}</TableCell>
// // //                 <TableCell>{event.state}</TableCell>
// // //                 <TableCell>
// // //                   <Button variant="contained" color="primary" style={{ marginRight: 8 }}>
// // //                     Event Details
// // //                   </Button>
// // //                   <Button variant="contained" color="primary">
// // //                     Change State
// // //                   </Button>
// // //                 </TableCell>
// // //               </TableRow>
// // //             ))}
// // //           </TableBody>
// // //         </Table>
// // //       </TableContainer>
// // //     </div>
// // //   );
// // // };

// // // export default ReviewEvents;


// // import React, { useState, useEffect } from 'react';
// // import Typography from '@mui/material/Typography';
// // import Button from '@mui/material/Button';
// // import Toolbar from '@mui/material/Toolbar';
// // import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// // import TableContainer from '@mui/material/TableContainer';
// // import Paper from '@mui/material/Paper';
// // import Table from '@mui/material/Table';
// // import TableHead from '@mui/material/TableHead';
// // import TableBody from '@mui/material/TableBody';
// // import TableRow from '@mui/material/TableRow';
// // import TableCell from '@mui/material/TableCell';

// // const ReviewEvents = ({ onClose }) => {
// //   const [events, setEvents] = useState([]);
// //   const [selectedEvent, setSelectedEvent] = useState(null);
  
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
// //         const response = await fetch('http://127.0.0.1:8000/api/v1/events-list/', {
// //           headers: {
// //             'Authorization': `Token ${token}`
// //           }
// //         });
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch events');
// //         }
// //         const eventData = await response.json();
// //         setEvents(eventData.results);
// //       } catch (error) {
// //         console.error('Error fetching events:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const handleStateChange = async (eventId) => {
// //     try {
// //       const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
// //       const eventToUpdate = events.find(event => event.id === eventId);
// //       if (eventToUpdate.state === 'published') {
// //         window.alert('Event already published');
// //         return;
// //       }
// //       const response = await fetch(`http://127.0.0.1:8000/api/v1/events-list/${eventId}/`, {
// //         method: 'PATCH',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Authorization': `Token ${token}`
// //         },
// //         body: JSON.stringify({ state: 'published' })
// //       });
// //       if (!response.ok) {
// //         throw new Error('Failed to update event state');
// //       }
// //       // Refresh events after successful state change
// //       const updatedEvents = [...events];
// //       const eventIndex = updatedEvents.findIndex(event => event.id === eventId);
// //       if (eventIndex !== -1) {
// //         updatedEvents[eventIndex].state = 'published';
// //         setEvents(updatedEvents);
// //       }
// //       window.alert('Event published successfully');
// //     } catch (error) {
// //       console.error('Error updating event state:', error);
// //       window.alert('Failed to publish event');
// //     }
// //   };
  
// //   const handleEventDetails = (event) => {
// //     setSelectedEvent(event); // Set selected event when "Event Details" is clicked
// //   };

// //   return (
// //     <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
// //       <Toolbar>
// //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// //           Review Events
// //         </Typography>
// //         <Button onClick={onClose} startIcon={<ArrowBackIcon />} style={{ backgroundColor: 'yellow' }}>
// //           Go Back
// //         </Button>
// //       </Toolbar>
// //       <Typography variant="body1" gutterBottom>
// //         Here are the events:
// //       </Typography>
// //       <TableContainer component={Paper}>
// //         <Table aria-label="review events table">
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>Event Name</TableCell>
// //               <TableCell>Event Room</TableCell>
// //               <TableCell>Event Owner</TableCell>
// //               <TableCell>Event State</TableCell>
// //               <TableCell>Actions</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {events.map((event, index) => (
// //               <TableRow key={index}>
// //                 <TableCell>{event.name}</TableCell>
// //                 <TableCell>{event.room_name}</TableCell>
// //                 <TableCell>{event.added_by_email}</TableCell>
// //                 <TableCell>{event.state}</TableCell>
// //                 <TableCell>
// //                   <Button variant="contained" color="primary" style={{ marginRight: 8 }} onClick={() => handleEventDetails(event)}>
// //                     Event Details
// //                   </Button>
// //                   <Button 
// //                     variant="contained" 
// //                     color="primary" 
// //                     onClick={() => handleStateChange(event.id)} // Call handleStateChange with event ID
// //                   >
// //                     Publish Event
// //                   </Button>
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //     </div>
// //   );
// // };

// // export default ReviewEvents;

// import React, { useState, useEffect } from 'react';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Toolbar from '@mui/material/Toolbar';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import TableContainer from '@mui/material/TableContainer';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableHead from '@mui/material/TableHead';
// import TableBody from '@mui/material/TableBody';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';

// const ReviewEvents = ({ onClose }) => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [eventDetails, setEventDetails] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
//         const response = await fetch('http://127.0.0.1:8000/api/v1/events-list/', {
//           headers: {
//             'Authorization': `Token ${token}`
//           }
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch events');
//         }
//         const eventData = await response.json();
//         setEvents(eventData.results);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleEventDetails = async (event) => {
//     setSelectedEvent(event);
//     setModalOpen(true);
//     try {
//       const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
//       const response = await fetch(`http://127.0.0.1:8000/api/v1/events-list/${event.id}/`, {
//         headers: {
//           'Authorization': `Token ${token}`
//         }
//       });
//       if (!response.ok) {
//         throw new Error('Failed to fetch event details');
//       }
//       const eventData = await response.json();
//       setEventDetails(eventData);
//     } catch (error) {
//       console.error('Error fetching event details:', error);
//     }
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setEventDetails(null);
//   };

//   const handlePublishEvent = async (eventId) => {
//     try {
//       const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
//       const eventToUpdate = events.find(event => event.id === eventId);
//       if (eventToUpdate.state === 'published') {
//         window.alert('Event already published');
//         return;
//       }
//       const response = await fetch(`http://127.0.0.1:8000/api/v1/events-list/${eventId}/`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Token ${token}`
//         },
//         body: JSON.stringify({ state: 'published' })
//       });
//       if (!response.ok) {
//         throw new Error('Failed to update event state');
//       }
//       // Refresh events after successful state change
//       const updatedEvents = [...events];
//       const eventIndex = updatedEvents.findIndex(event => event.id === eventId);
//       if (eventIndex !== -1) {
//         updatedEvents[eventIndex].state = 'published';
//         setEvents(updatedEvents);
//       }
//       window.alert('Event published successfully');
//     } catch (error) {
//       console.error('Error updating event state:', error);
//       window.alert('Failed to publish event');
//     }
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Review Events
//         </Typography>
//         <Button onClick={onClose} startIcon={<ArrowBackIcon />} style={{ backgroundColor: 'yellow' }}>
//           Go Back
//         </Button>
//       </Toolbar>
//       <Typography variant="body1" gutterBottom>
//         Here are the events:
//       </Typography>
//       <TableContainer component={Paper}>
//         <Table aria-label="review events table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Event Name</TableCell>
//               <TableCell>Event Room</TableCell>
//               <TableCell>Event Owner</TableCell>
//               <TableCell>Event State</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {events.map((event, index) => (
//               <TableRow key={index}>
//                 <TableCell>{event.name}</TableCell>
//                 <TableCell>{event.room_name}</TableCell>
//                 <TableCell>{event.added_by_email}</TableCell>
//                 <TableCell>{event.state}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="primary" style={{ marginRight: 8 }} onClick={() => handleEventDetails(event)}>
//                     Event Details
//                   </Button>
//                   <Button variant="contained" color="primary" onClick={() => handlePublishEvent(event.id)}>
//                     Publish Event
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
      
//       <Dialog open={modalOpen} onClose={handleCloseModal} fullWidth maxWidth="sm">
//         <DialogTitle>
//           <Typography variant="h6">Event Details</Typography>
//         </DialogTitle>
//         <DialogContent>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Event Name</Typography>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 value={eventDetails?.name || ''}
//                 InputProps={{ readOnly: true }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Description</Typography>
//               <TextField
//                 fullWidth
//                 multiline
//                 rows={4}
//                 variant="outlined"
//                 value={eventDetails?.description || ''}
//                 InputProps={{ readOnly: true }}
//               />
//             </Grid>
//             {/* Add more fields as needed */}
//           </Grid>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default ReviewEvents;
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { BASE_URL } from './constants';

const ReviewEvents = ({ onClose }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
        const response = await fetch(`${BASE_URL}/api/v1/events-list/`, {
          headers: {
            'Authorization': `Token ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const eventData = await response.json();
        setEvents(eventData.results);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData();
  }, []);

  const handleEventDetails = async (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
      const response = await fetch(`${BASE_URL}/api/v1/events-list/${event.id}/`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch event details');
      }
      const eventData = await response.json();
      setEventDetails(eventData);
    } catch (error) {
      console.error('Error fetching event details:', error);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEventDetails(null);
  };

  const handlePublishEvent = async (eventId) => {
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
      const eventToUpdate = events.find(event => event.id === eventId);
      if (eventToUpdate.state === 'published') {
        window.alert('Event already published');
        return;
      }
      const response = await fetch(`${BASE_URL}/api/v1/events-list/${eventId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        body: JSON.stringify({ state: 'published' })
      });
      if (!response.ok) {
        throw new Error('Failed to update event state');
      }
      // Refresh events after successful state change
      const updatedEvents = [...events];
      const eventIndex = updatedEvents.findIndex(event => event.id === eventId);
      if (eventIndex !== -1) {
        updatedEvents[eventIndex].state = 'published';
        setEvents(updatedEvents);
      }
      window.alert('Event published successfully');
    } catch (error) {
      console.error('Error updating event state:', error);
      window.alert('Failed to publish event');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Review Events
        </Typography>
        {/* <Button onClick={onClose} startIcon={<ArrowBackIcon />} style={{ backgroundColor: 'yellow' }}>
          Go Back
        </Button> */}
        <Button onClick={onClose} startIcon={<ArrowBackIcon />} sx={{ bgcolor: 'yellow', color: '#000000' }}>
          Go Back
        </Button>
      </Toolbar>
      <Typography variant="body1" gutterBottom>
        Here are the events:
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="review events table">
          <TableHead>
            <TableRow>
              <TableCell>Event Name</TableCell>
              <TableCell>Event Room</TableCell>
              <TableCell>Event Owner</TableCell>
              <TableCell>Event State</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event, index) => (
              <TableRow key={index}>
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.room_name}</TableCell>
                <TableCell>{event.added_by_email}</TableCell>
                <TableCell>{event.state}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" style={{ marginRight: 8 }} onClick={() => handleEventDetails(event)}>
                    Event Details
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => handlePublishEvent(event.id)}>
                    Publish Event
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Dialog open={modalOpen} onClose={handleCloseModal} fullWidth maxWidth="sm">
        <DialogTitle>
          <Typography variant="h6">Event Details</Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Event Name</Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={eventDetails?.name || ''}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Description</Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                value={eventDetails?.stripped_description || ''}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Room Name</Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={eventDetails?.room_name || ''}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Added By</Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={eventDetails?.added_by_email || ''}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Start Date</Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={eventDetails?.event_start_date || ''}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Start Time</Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={eventDetails?.event_start_time || ''}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>End Date</Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={eventDetails?.event_end_date || ''}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>End Time</Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={eventDetails?.event_end_time || ''}
                InputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReviewEvents;
