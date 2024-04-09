// import React, { useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Switch from '@mui/material/Switch';
// import Cookies from 'js-cookie';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';

// const EditRoomForm = ({ onClose, roomId }) => {
//   const [roomData, setRoomData] = useState({
//     name: '',
//     description: '',
//     room_thumbnail: '',
//     intro_flyin_graphic: null,
//     loop_graphic: null,
//     support_audio: null,
//     status: '',
//     zoom_link: '',
//     hub: false,
//     create_event: false,
//     state: 'draft'
//   });
//   const [events, setEvents] = useState([]);
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     severity: 'success',
//     message: ''
//   });

//   const [modifiedFields, setModifiedFields] = useState({});

//   useEffect(() => {
//     const fetchRoomData = async () => {
//       try {
//         const token = Cookies.get('token');
//         const response = await fetch(`http://127.0.0.1:8000/api/v1/rooms/${roomId}/`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const data = await response.json();
//         if (!response.ok) {
//           throw new Error('Failed to fetch room data');
//         }
//         setRoomData(data);
//       } catch (error) {
//         console.error('Error fetching room data:', error);
//       }
//     };

//     fetchRoomData();
//   }, [roomId]);

//   const handleUpdateRoom = async () => {
//     try {
//       const token = Cookies.get('token');
//       const formData = new FormData();

//       // Append modified fields to formData
//       for (const key in modifiedFields) {
//         formData.append(key, modifiedFields[key]);
//       }

//       const response = await fetch(`http://127.0.0.1:8000/api/v1/rooms/${roomId}/`, {
//         method: 'PATCH',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update room');
//       }

//       // Show success Snackbar
//       setSnackbar({ open: true, severity: 'success', message: 'Room updated successfully' });
//     } catch (error) {
//       console.error('Error updating room:', error);
//       // Show error Snackbar
//       setSnackbar({ open: true, severity: 'error', message: 'Failed to update room' });
//     }
//   };

//   const handleDeleteRoom = async () => {
//     const confirmed = window.confirm("Are you sure you want to delete this room? This action cannot be reversed.");
//     if (!confirmed) return;

//     try {
//       const token = Cookies.get('token');
//       const response = await fetch(`http://127.0.0.1:8000/api/v1/rooms/${roomId}/`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete room');
//       }

//       // Show success Snackbar
//       setSnackbar({ open: true, severity: 'success', message: 'Room deleted successfully' });
//     } catch (error) {
//       console.error('Error deleting room:', error);
//       // Show error Snackbar
//       setSnackbar({ open: true, severity: 'error', message: 'Failed to delete room' });
//     }
//   };

//   // const handleChange = (e) => {
//   //   const { name, value, files } = e.target;

//   //   if (files && files[0]) {
//   //     const file = files[0];
//   //     const reader = new FileReader();

//   //     reader.onload = (event) => {
//   //       setRoomData((prevRoomData) => ({
//   //         ...prevRoomData,
//   //         [name]: event.target.result,
//   //       }));
//   //     };

//   //     reader.readAsDataURL(file);

//   //     setModifiedFields((prevModifiedFields) => ({
//   //       ...prevModifiedFields,
//   //       [name]: file,
//   //     }));
//   //   } else {
//   //     setRoomData((prevRoomData) => ({
//   //       ...prevRoomData,
//   //       [name]: value,
//   //     }));
//   //     setModifiedFields((prevModifiedFields) => ({
//   //       ...prevModifiedFields,
//   //       [name]: value,
//   //     }));
//   //   }
//   // };
  
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
  
//     if (files && files[0]) {
//       const file = files[0];
//       const reader = new FileReader();
  
//       reader.onload = (event) => {
//         setRoomData((prevRoomData) => ({
//           ...prevRoomData,
//           [name]: event.target.result,
//         }));
//       };
  
//       reader.readAsDataURL(file);
  
//       setModifiedFields((prevModifiedFields) => ({
//         ...prevModifiedFields,
//         [name]: file,
//       }));
//     } else {
//       // Update both description and stripped_description
//       setRoomData((prevRoomData) => ({
//         ...prevRoomData,
//         [name]: value,
//         stripped_description: value.replace(/<[^>]+>/g, ''), // Strip HTML tags
//       }));
//       setModifiedFields((prevModifiedFields) => ({
//         ...prevModifiedFields,
//         [name]: value,
//       }));
//     }
//   };
  
//   const handleToggle = (fieldName) => {
//     setRoomData((prevRoomData) => ({
//       ...prevRoomData,
//       [fieldName]: !prevRoomData[fieldName],
//     }));
//     setModifiedFields((prevModifiedFields) => ({
//       ...prevModifiedFields,
//       [fieldName]: !roomData[fieldName],
//     }));
//   };

//   const handleFileButtonClick = (fieldName) => {
//     document.getElementById(fieldName).click();
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const token = Cookies.get('token');
//         const response = await fetch(`http://127.0.0.1:8000/events/infosign/?room_id=${roomId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const data = await response.json();
//         if (!response.ok) {
//           throw new Error('Failed to fetch events');
//         }
//         setEvents(data);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     fetchEvents();
//   }, [roomId]);

  
//   const stateColors = {
//     in_review: '#FFC107',
//     draft: '#9E9E9E',
//     publish: '#4CAF50'
//   };

//   return (
//     <Box p={4}>
//       <Typography variant="h4" gutterBottom>Edit Room</Typography>
//       {/* <Box bgcolor={stateColors[roomData.state]} color="#fff" borderRadius={16} px={2} py={1} ml={2}>
//           {roomData.state === 'in_review' ? 'In - Review' : roomData.state.charAt(0).toUpperCase() + roomData.state.slice(1)}
//         </Box> */}
//       <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
//         {/* <Button variant="contained" color="warning" onClick={onClose} startIcon={<ArrowBackIcon />}>Go Back</Button> */}
//         <Button variant="contained" onClick={onClose} startIcon={<ArrowBackIcon />} sx={{ bgcolor: 'yellow', color: '#000000' }}>
//           Go Back
//         </Button>
//       </div>
//       <div>
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//           <Typography variant="subtitle1" style={{ width: '150px' }}>Room Name</Typography>
//           <TextField
//             name="name"
//             value={roomData.name}
//             onChange={handleChange}
//             fullWidth
//           />
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//            <Typography variant="subtitle1" style={{ width: '150px' }}>Description</Typography>
//            <TextField
//             name="description"
//             value={roomData.stripped_description}
//             onChange={handleChange}
//             fullWidth
//             multiline
//             rows={4}
//           />
//         </div>
//         {/* Room Thumbnail */}
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//           <Typography variant="subtitle1" style={{ width: '150px' }}>Room Thumbnail</Typography>
//           <Box display="flex" alignItems="center">
//             <img
//               src={roomData.room_thumbnail}
//               alt="Room Thumbnail"
//               id="room_thumbnail_preview"
//               style={{ width: '150px', marginRight: '12px' }}
//             />
//             <Button
//               variant="contained"
//               onClick={() => handleFileButtonClick('room_thumbnail')}
//             >
//               Upload New Room Thumbnail
//             </Button>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleChange}
//               style={{ display: 'none' }}
//               id="room_thumbnail"
//               name="room_thumbnail"
//             />
//           </Box>
//         </div>
//         {/* Intro Flyin Graphic */}
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//           <Typography variant="subtitle1" style={{ width: '150px' }}>Intro Flyin Graphic</Typography>
//           <Box display="flex" alignItems="center">
//             {roomData.intro_flyin_graphic && (
//               <img
//                 src={roomData.intro_flyin_graphic}
//                 alt="Intro Flyin Graphic"
//                 style={{ width: '150px', marginRight: '12px' }}
//               />
//             )}
//             <Button
//               variant="contained"
//               onClick={() => handleFileButtonClick('intro_flyin_graphic')}
//             >
//               Upload Intro Flyin Graphic
//             </Button>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleChange}
//               style={{ display: 'none' }}
//               id="intro_flyin_graphic"
//               name="intro_flyin_graphic"
//             />
//           </Box>
//         </div>
//         {/* Loop Graphic */}
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//           <Typography variant="subtitle1" style={{ width: '150px' }}>Loop Graphic</Typography>
//           <Box display="flex" alignItems="center">
//             {roomData.loop_graphic && (
//               <img
//                 src={roomData.loop_graphic}
//                 alt="Loop Graphic"
//                 style={{ width: '150px', marginRight: '12px' }}
//               />
//             )}
//             <Button
//               variant="contained"
//               onClick={() => handleFileButtonClick('loop_graphic')}
//             >
//               Upload Loop Graphic
//             </Button>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleChange}
//               style={{ display: 'none' }}
//               id="loop_graphic"
//               name="loop_graphic"
//             />
//           </Box>
//         </div>
//         {/* Support Audio */}
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//           <Typography variant="subtitle1" style={{ width: '150px' }}>Support Audio</Typography>
//           <Box display="flex" alignItems="center">
//             <audio controls id="support_audio_preview" style={{ marginRight: '12px' }}>
//               <source src={roomData.support_audio} type="audio/mp3" />
//               Your browser does not support the audio element.
//             </audio>
//             <Button
//               variant="contained"
//               onClick={() => handleFileButtonClick('support_audio')}
//             >
//               Upload Support Audio
//             </Button>
//             <input
//               type="file"
//               accept="audio/*"
//               onChange={handleChange}
//               style={{ display: 'none' }}
//               id="support_audio"
//               name="support_audio"
//             />
//           </Box>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//           <Typography variant="subtitle1" style={{ width: '150px' }}>Hub</Typography>
//           <Switch
//             checked={roomData.hub}
//             onChange={() => handleToggle('hub')}
//           />
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//           <Typography variant="subtitle1" style={{ width: '150px' }}>Create Event</Typography>
//           <Switch
//             checked={roomData.create_event}
//             onChange={() => handleToggle('create_event')}
//           />
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//           <Typography variant="subtitle1" style={{ width: '150px' }}>State</Typography>
//           <TextField
//             name="state"
//             value={roomData.state}
//             InputProps={{
//               readOnly: true,
//             }}
//             fullWidth
//           />
//         </div>
//       </div>
//       <Box bgcolor="#f0f0f0" p={2} mb={2}>
//         <Typography variant="h5" gutterBottom>Events</Typography>
//       </Box>
//       <Box bgcolor="#f0f0f0" p={2} mb={2}>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Start Date</th>
//               <th>Start Time</th>
//               <th>End Date</th>
//               <th>End Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {events.map((event, index) => (
//               <tr key={index}>
//                 <td>{event.name}</td>
//                 <td>{event.description}</td>
//                 <td>{event.event_start_date}</td>
//                 <td>{event.event_start_time}</td>
//                 <td>{event.event_end_date}</td>
//                 <td>{event.event_end_time}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Box>
//       <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
//         <Button variant="contained" color="primary" onClick={handleUpdateRoom}>Update</Button>
//         <Box mx={2}></Box>
//         <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={handleDeleteRoom}>Delete</Button>
//       </div>
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//       >
//         <MuiAlert
//           elevation={6}
//           variant="filled"
//           onClose={handleCloseSnackbar}
//           severity={snackbar.severity}
//         >
//           {snackbar.message}
//         </MuiAlert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default EditRoomForm;

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Switch from '@mui/material/Switch';
import Cookies from 'js-cookie';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BASE_URL } from './constants';

const EditRoomForm = ({ onClose, roomId }) => {
  const [roomData, setRoomData] = useState({
    name: '',
    description: '',
    room_thumbnail: '',
    intro_flyin_graphic: null,
    loop_graphic: null,
    support_audio: null,
    status: '',
    zoom_link: '',
    hub: false,
    create_event: false,
    state: 'draft'
  });
  const [events, setEvents] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: 'success',
    message: ''
  });

  const [modifiedFields, setModifiedFields] = useState({});

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const token = Cookies.get('token');
        const response = await fetch(`${BASE_URL}/api/v1/rooms/${roomId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error('Failed to fetch room data');
        }
        setRoomData(data);
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    fetchRoomData();
  }, [roomId]);

  const handleUpdateRoom = async () => {
    try {
      const token = Cookies.get('token');
      const formData = new FormData();

      // Append modified fields to formData
      for (const key in modifiedFields) {
        formData.append(key, modifiedFields[key]);
      }

      const response = await fetch(`${BASE_URL}/api/v1/rooms/${roomId}/`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to update room');
      }

      // Show success Snackbar
      setSnackbar({ open: true, severity: 'success', message: 'Room updated successfully' });
    } catch (error) {
      console.error('Error updating room:', error);
      // Show error Snackbar
      setSnackbar({ open: true, severity: 'error', message: 'Failed to update room' });
    }
  };

  const handleDeleteRoom = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this room? This action cannot be reversed.");
    if (!confirmed) return;

    try {
      const token = Cookies.get('token');
      const response = await fetch(`${BASE_URL}/api/v1/rooms/${roomId}/`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete room');
      }

      // Show success Snackbar
      setSnackbar({ open: true, severity: 'success', message: 'Room deleted successfully' });
    } catch (error) {
      console.error('Error deleting room:', error);
      // Show error Snackbar
      setSnackbar({ open: true, severity: 'error', message: 'Failed to delete room' });
    }
  };

  const handleChange = (e) => {
        const { name, value, files } = e.target;
      
        if (files && files[0]) {
          const file = files[0];
          const reader = new FileReader();
      
          reader.onload = (event) => {
            setRoomData((prevRoomData) => ({
              ...prevRoomData,
              [name]: event.target.result,
            }));
          };
      
          reader.readAsDataURL(file);
      
          setModifiedFields((prevModifiedFields) => ({
            ...prevModifiedFields,
            [name]: file,
          }));
        } else {
          // Update both description and stripped_description
          setRoomData((prevRoomData) => ({
            ...prevRoomData,
            [name]: value,
            stripped_description: value.replace(/<[^>]+>/g, ''), // Strip HTML tags
          }));
          setModifiedFields((prevModifiedFields) => ({
            ...prevModifiedFields,
            [name]: value,
          }));
        }
      };

  const handleToggle = (fieldName) => {
    setRoomData((prevRoomData) => ({
      ...prevRoomData,
      [fieldName]: !prevRoomData[fieldName],
    }));
    setModifiedFields((prevModifiedFields) => ({
      ...prevModifiedFields,
      [fieldName]: !roomData[fieldName],
    }));
  };

  const handleFileButtonClick = (fieldName) => {
    document.getElementById(fieldName).click();
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = Cookies.get('token');
        const response = await fetch(`${BASE_URL}/events/infosign/?room_id=${roomId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [roomId]);

  const stateColors = {
        in_review: '#FFC107',
        draft: '#9E9E9E',
        published: '#4CAF50'
      };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>Edit Room</Typography>
      <Box textAlign="center">
      <Box
          bgcolor={stateColors[roomData.state]}
          color="#fff"
          borderRadius={16}
          px={2}
          py={1}
          ml={2}
          mb={2}
          display="inline-block"
        >
          Current state of room: {roomData.state === 'in_review' ? 'In - Review' : roomData.state.charAt(0).toUpperCase() + roomData.state.slice(1)}
        </Box>
      </Box>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <Button variant="contained" onClick={onClose} startIcon={<ArrowBackIcon />} sx={{ bgcolor: 'yellow', color: '#000000' }}>
          Go Back
        </Button>
      </div>
      <div>
         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
           <Typography variant="subtitle1" style={{ width: '150px' }}>Room Name</Typography>
           <TextField
            name="name"
            value={roomData.name}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
           <Typography variant="subtitle1" style={{ width: '150px' }}>Description</Typography>
           <TextField
            name="description"
            value={roomData.stripped_description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />
        </div>
        {/* Room Thumbnail */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <Typography variant="subtitle1" style={{ width: '150px' }}>Room Thumbnail</Typography>
          <Box display="flex" alignItems="center">
            <img
              src={roomData.room_thumbnail}
              alt="Room Thumbnail"
              id="room_thumbnail_preview"
              style={{ width: '150px', marginRight: '12px' }}
            />
            <Button
              variant="contained"
              onClick={() => handleFileButtonClick('room_thumbnail')}
            >
              Upload New Room Thumbnail
            </Button>
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              style={{ display: 'none' }}
              id="room_thumbnail"
              name="room_thumbnail"
            />
          </Box>
        </div>
        {/* Intro Flyin Graphic */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <Typography variant="subtitle1" style={{ width: '150px' }}>Intro Flyin Graphic</Typography>
          <Box display="flex" alignItems="center">
            {roomData.intro_flyin_graphic && (
              <img
                src={roomData.intro_flyin_graphic}
                alt="Intro Flyin Graphic"
                style={{ width: '150px', marginRight: '12px' }}
              />
            )}
            <Button
              variant="contained"
              onClick={() => handleFileButtonClick('intro_flyin_graphic')}
            >
              Upload Intro Flyin Graphic
            </Button>
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              style={{ display: 'none' }}
              id="intro_flyin_graphic"
              name="intro_flyin_graphic"
            />
          </Box>
        </div>
        {/* Loop Graphic */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <Typography variant="subtitle1" style={{ width: '150px' }}>Loop Graphic</Typography>
          <Box display="flex" alignItems="center">
            {roomData.loop_graphic && (
              <img
                src={roomData.loop_graphic}
                alt="Loop Graphic"
                style={{ width: '150px', marginRight: '12px' }}
              />
            )}
            <Button
              variant="contained"
              onClick={() => handleFileButtonClick('loop_graphic')}
            >
              Upload Loop Graphic
            </Button>
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              style={{ display: 'none' }}
              id="loop_graphic"
              name="loop_graphic"
            />
          </Box>
        </div>
        {/* Support Audio */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <Typography variant="subtitle1" style={{ width: '150px' }}>Support Audio</Typography>
          <Box display="flex" alignItems="center">
            <audio controls id="support_audio_preview" style={{ marginRight: '12px' }}>
              <source src={roomData.support_audio} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <Button
              variant="contained"
              onClick={() => handleFileButtonClick('support_audio')}
            >
              Upload Support Audio
            </Button>
            <input
              type="file"
              accept="audio/*"
              onChange={handleChange}
              style={{ display: 'none' }}
              id="support_audio"
              name="support_audio"
            />
          </Box>
        </div>
        {/* <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <Typography variant="subtitle1" style={{ width: '150px' }}>Hub</Typography>
          <Switch
            checked={roomData.hub}
            onChange={() => handleToggle('hub')}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <Typography variant="subtitle1" style={{ width: '150px' }}>Create Event</Typography>
          <Switch
            checked={roomData.create_event}
            onChange={() => handleToggle('create_event')}
          />
        </div> */}
        {/* <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <Typography variant="subtitle1" style={{ width: '150px' }}>State</Typography>
          <TextField
            name="state"
            value={roomData.state}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </div> */}
      </div>
      <Box bgcolor="lightblue" p={2} textAlign="center" mt={4} mb={2}>
        Events
      </Box>
      <TableContainer component={Paper} mb={4}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Event Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Start Time</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>End Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event, index) => (
              <TableRow key={index}>
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.description}</TableCell>
                <TableCell>{event.event_start_date}</TableCell>
                <TableCell>{event.event_start_time}</TableCell>
                <TableCell>{event.event_end_date}</TableCell>
                <TableCell>{event.event_end_time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Button variant="contained" color="primary" onClick={handleUpdateRoom}>Update</Button>
        <Box mx={2}></Box>
        <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={handleDeleteRoom}>Delete</Button>
      </div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default EditRoomForm;
