// import React from 'react';
// import Typography from '@mui/material/Typography';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import Toolbar from '@mui/material/Toolbar';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

// const ReviewRooms = ({ onClose }) => {
//   // Example room data, replace with your actual room data
//   const rooms = [
//     { name: 'Room 1', city: 'city-1', owner: 'owner 1' },
//     { name: 'Room 2', city: 'city-1', owner: 'owner 2' },
//     // Add more room entries as needed
//   ];

//   const navigate = useNavigate(); // useNavigate hook for navigation

//   const handleGoBack = () => {
//     onClose(); // Call onClose function passed as prop
//     navigate(-1); // Go back one step in the history stack
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
//           Review Rooms
//         </Typography>
//         <Button onClick={handleGoBack} startIcon={<ArrowBackIcon />} style={{ backgroundColor: 'yellow', color: '#000000' }}>Go Back</Button>
//       </Toolbar>
//       <TableContainer component={Paper}>
//         <Table aria-label="review rooms table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Room Name</TableCell>
//               <TableCell>City</TableCell>
//               <TableCell>Room Owner</TableCell>
//               <TableCell>Actions</TableCell> {/* Added Actions column */}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rooms.map((room, index) => (
//               <TableRow key={index}>
//                 <TableCell>{room.name}</TableCell>
//                 <TableCell>{room.city}</TableCell>
//                 <TableCell>{room.owner}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="primary" style={{ marginRight: 8 }}>
//                     View Room
//                   </Button>
//                   <Button variant="contained" color="primary">
//                     Change State
//                   </Button>
//                 </TableCell> {/* Added Actions button */}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default ReviewRooms;

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

// const ReviewRooms = ({ onClose }) => {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
//         const response = await fetch('http://127.0.0.1:8000/api/v1/rooms-list/', {
//           headers: {
//             'Authorization': `Token ${token}`
//           }
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch rooms');
//         }
//         const roomData = await response.json();
//         setRooms(roomData.results);
//       } catch (error) {
//         console.error('Error fetching rooms:', error);
//       }
//     };

//     fetchData();
//   }, []);


//   const handleGoBack = () => {
//     onClose();
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Review Rooms
//         </Typography>
//         <Button onClick={handleGoBack} startIcon={<ArrowBackIcon />} style={{ backgroundColor: 'yellow' }}>
//           Go Back
//         </Button>
//       </Toolbar>
//       <Typography variant="body1" gutterBottom>
//         Here are the Rooms:
//       </Typography>
//       <TableContainer component={Paper}>
//         <Table aria-label="review events table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Room Name</TableCell>
//               <TableCell>City Name</TableCell>
//               <TableCell>Room Owner</TableCell>
//               <TableCell>Room State</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//           {rooms.map((room) => (
//               <TableRow key={room.id}>
//                 <TableCell>{room.name}</TableCell>
//                 <TableCell>{room.city_name || 'No description'}</TableCell>
//                 <TableCell>{room.added_by_email}</TableCell>
//                 <TableCell>{room.state}</TableCell> 
//                 <TableCell>
//                   <Button variant="contained" color="primary" style={{ marginRight: 8 }}>
//                     Room Details
//                   </Button>
//                   <Button variant="contained" color="primary">
//                     Change State
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default ReviewRooms;

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

// const ReviewRooms = ({ onClose }) => {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
//         const response = await fetch('http://127.0.0.1:8000/api/v1/rooms-list/', {
//           headers: {
//             'Authorization': `Token ${token}`
//           }
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch rooms');
//         }
//         const roomData = await response.json();
//         setRooms(roomData.results);
//       } catch (error) {
//         console.error('Error fetching rooms:', error);
//       }
//     };

//     fetchData();
//   }, []);


//   const handleGoBack = () => {
//     onClose();
//   };

//   const handleStateChange = async (roomId) => {
//     try {
//       const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
//       const roomToUpdate = rooms.find(room => room.id === roomId);
//       if (roomToUpdate.state === 'published') {
//         window.alert('Room already published');
//         return;
//       }
//       const formData = new FormData();
//       formData.append('state', 'published');
//       const response = await fetch(`http://127.0.0.1:8000/api/v1/rooms-list/${roomId}/`, {
//         method: 'PATCH',
//         headers: {
//           'Authorization': `Token ${token}`
//         },
//         body: formData
//       });
//       if (!response.ok) {
//         throw new Error('Failed to update room state');
//       }
//       // Refresh rooms after successful state change
//       const updatedRooms = [...rooms];
//       const roomIndex = updatedRooms.findIndex(room => room.id === roomId);
//       if (roomIndex !== -1) {
//         updatedRooms[roomIndex].state = 'published';
//         setRooms(updatedRooms);
//       }
//       window.alert('Room published successfully');
//     } catch (error) {
//       console.error('Error updating room state:', error);
//       window.alert('Failed to publish room');
//     }
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Review Rooms
//         </Typography>
//         <Button onClick={handleGoBack} startIcon={<ArrowBackIcon />} style={{ backgroundColor: 'yellow' }}>
//           Go Back
//         </Button>
//       </Toolbar>
//       <Typography variant="body1" gutterBottom>
//         Here are the Rooms:
//       </Typography>
//       <TableContainer component={Paper}>
//         <Table aria-label="review rooms table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Room Name</TableCell>
//               <TableCell>City Name</TableCell>
//               <TableCell>Room Owner</TableCell>
//               <TableCell>Room State</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rooms.map((room) => (
//               <TableRow key={room.id}>
//                 <TableCell>{room.name}</TableCell>
//                 <TableCell>{room.city_name || 'No description'}</TableCell>
//                 <TableCell>{room.added_by_email}</TableCell>
//                 <TableCell>{room.state}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="primary" style={{ marginRight: 8 }}>
//                     Room Details
//                   </Button>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleStateChange(room.id)} // Call handleStateChange with room ID
//                   >
//                     Publish Room
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default ReviewRooms;

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
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { BASE_URL } from './constants';
const ReviewRooms = ({ onClose }) => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [roomDetails, setRoomDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
        const response = await fetch(`${BASE_URL}api/v1/rooms-list/`, {
          headers: {
            'Authorization': `Token ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch rooms');
        }
        const roomData = await response.json();
        setRooms(roomData.results);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchData();
  }, []);

  const handleGoBack = () => {
    onClose();
  };

  // const handleRoomDetails = (room) => {
  //   setSelectedRoom(room);
  //   setModalOpen(true);
  // };

  const handleRoomDetails = async (room) => {
    setSelectedRoom(room);
    setModalOpen(true);
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
      const response = await fetch(`${BASE_URL}/api/v1/rooms-list/${room.id}/`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch event details');
      }
      const RoomData = await response.json();
      console.log("rd",RoomData);
      setRoomDetails(RoomData);
    } catch (error) {
      console.error('Error fetching event details:', error);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedRoom(null);
  };

  const handlePublishRoom = async (roomId) => {
    try {
            const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
            const roomToUpdate = rooms.find(room => room.id === roomId);
            if (roomToUpdate.state === 'published') {
              window.alert('Room already published');
              return;
            }
            const formData = new FormData();
            formData.append('state', 'published');
            const response = await fetch(`${BASE_URL}/api/v1/rooms-list/${roomId}/`, {
              method: 'PATCH',
              headers: {
                'Authorization': `Token ${token}`
              },
              body: formData
            });
            if (!response.ok) {
              throw new Error('Failed to update room state');
            }
            // Refresh rooms after successful state change
            const updatedRooms = [...rooms];
            const roomIndex = updatedRooms.findIndex(room => room.id === roomId);
            if (roomIndex !== -1) {
              updatedRooms[roomIndex].state = 'published';
              setRooms(updatedRooms);
            }
            window.alert('Room published successfully');
          } catch (error) {
            console.error('Error updating room state:', error);
            window.alert('Failed to publish room');
          }
    };


  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Review Rooms
        </Typography>
        {/* <Button onClick={handleGoBack} startIcon={<ArrowBackIcon />} style={{ backgroundColor: 'yellow' }}>
          Go Back
        </Button> */}
        <Button onClick={onClose} startIcon={<ArrowBackIcon />} sx={{ bgcolor: 'yellow', color: '#000000' }}>
          Go Back
        </Button>
      </Toolbar>
      <Typography variant="body1" gutterBottom>
        Here are the Rooms:
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="review rooms table">
          <TableHead>
            <TableRow>
              <TableCell>Room Name</TableCell>
              <TableCell>City Name</TableCell>
              <TableCell>Room Owner</TableCell>
              <TableCell>Room State</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell>{room.name}</TableCell>
                <TableCell>{room.city_name || 'No description'}</TableCell>
                <TableCell>{room.added_by_email}</TableCell>
                <TableCell>{room.state}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" style={{ marginRight: 8 }} onClick={() => handleRoomDetails(room)}>
                    Room Details
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => handlePublishRoom(room.id)}>
                    Publish Room
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={modalOpen} onClose={handleCloseModal} fullWidth maxWidth="sm">
        <DialogTitle>
          <Typography variant="h6">Room Details</Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Room Name</Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={roomDetails?.name || ''}
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
                value={roomDetails?.stripped_description || ''}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>City Name</Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={roomDetails?.city_name || ''}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Added By</Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={roomDetails?.added_by_email || ''}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            {/* <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Start Date</Typography>
              <TextField
                fullWidth
                variant="outlined"
                // value={eventDetails?.event_start_date || ''}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>Start Time</Typography>
              <TextField
                fullWidth
                variant="outlined"
                // value={eventDetails?.event_start_time || ''}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>End Date</Typography>
              <TextField
                fullWidth
                variant="outlined"
                // value={eventDetails?.event_end_date || ''}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ marginBottom: '8px', color: '#424242', fontWeight: 'bold' }}>End Time</Typography>
              <TextField
                fullWidth
                variant="outlined"
                // value={eventDetails?.event_end_time || ''}
                InputProps={{ readOnly: true }}
              />
            </Grid> */}
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

export default ReviewRooms;
