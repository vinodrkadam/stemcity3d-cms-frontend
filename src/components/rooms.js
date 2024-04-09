// // RoomList.js
// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import RoomIcon from '@mui/icons-material/Room';
// import EditIcon from '@mui/icons-material/Edit';
// import MapIcon from '@mui/icons-material/Map';

// const RoomList = () => {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     // Fetch the user's rooms
//     const fetchRooms = async () => {
//       try {
//         // Make your GET request to fetch the user's rooms
//         const response = await fetch('YOUR_ENDPOINT_HERE');
//         const data = await response.json();
//         setRooms(data.rooms);
//       } catch (error) {
//         console.error('Error fetching rooms:', error);
//       }
//     };

//     fetchRooms();
//   }, []);

//   return (
//     <Box>
//       <Typography variant="h5" gutterBottom>
//         My Rooms
//       </Typography>
//       {rooms.map(room => (
//         <Box key={room.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
//           <RoomIcon />
//           <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
//             <Typography>{room.roomName}</Typography>
//             <Typography>{room.city}</Typography>
//           </Box>
//           <Button startIcon={<EditIcon />}>Edit Room</Button>
//           <Button startIcon={<MapIcon />}>Open Room Mapper</Button>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default RoomList;


// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@mui/styles';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: theme.spacing(2),
//   },
//   divider: {
//     margin: theme.spacing(2, 0),
//     backgroundColor: theme.palette.grey[500],
//     height: 4,
//   },
// }));

// const Rooms = () => {
//   const classes = useStyles();
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/v1/rooms/');
//         const data = await response.json();
//         setRooms(data);
//       } catch (error) {
//         console.error('Error fetching rooms:', error);
//       }
//     };

//     fetchRooms();
//   }, []);

//   return (
//     <div className={classes.root}>
//       <Typography variant="h4" gutterBottom>
//         My Rooms
//       </Typography>
//       <Divider className={classes.divider} />
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Room Thumbnail</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>City</TableCell>
//               <TableCell>State</TableCell>
//               <TableCell>Created At</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rooms.map((room) => (
//               <React.Fragment key={room.id}>
//                 <TableRow>
//                   <TableCell>{/* Render room thumbnail */}</TableCell>
//                   <TableCell>{room.name}</TableCell>
//                   <TableCell>{room.city}</TableCell>
//                   <TableCell>{room.state}</TableCell>
//                   <TableCell>{room.created_at}</TableCell>
//                   <TableCell>
//                     <Button variant="outlined" color="primary">
//                       Edit Room
//                     </Button>
//                     <Button variant="outlined" color="secondary">
//                       Room Mapper
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell colSpan={6}>
//                     <Divider />
//                   </TableCell>
//                 </TableRow>
//               </React.Fragment>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Rooms;

// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@mui/styles';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: theme.spacing(2),
//   },
//   divider: {
//     margin: theme.spacing(2, 0),
//     backgroundColor: theme.palette.grey[500],
//     height: 4,
//   },
//   thickGreyBorder: {
//     borderBottom: '4px solid rgba(0, 0, 0, 0.5)', // Thick grey border bottom
//   },
// }));

// const Rooms = () => {
//   const classes = useStyles();
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/v1/rooms/');
//         const data = await response.json();
//         setRooms(data);
//       } catch (error) {
//         console.error('Error fetching rooms:', error);
//       }
//     };

//     fetchRooms();
//   }, []);

//   return (
//     <div className={classes.root}>
//       <Typography variant="h4" gutterBottom>
//         My Rooms
//       </Typography>
//       <Divider className={classes.divider} />
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Room Thumbnail</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>City</TableCell>
//               <TableCell>State</TableCell>
//               <TableCell>Created At</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rooms.map((room, index) => (
//               <React.Fragment key={room.id}>
//                 <TableRow className={classes.thickGreyBorder}>
//                   <TableCell>{/* Render room thumbnail */}</TableCell>
//                   <TableCell>{room.name}</TableCell>
//                   <TableCell>{room.city}</TableCell>
//                   <TableCell>{room.state}</TableCell>
//                   <TableCell>{room.created_at}</TableCell>
//                   <TableCell>
//                     <Button variant="outlined" color="primary">
//                       Edit Room
//                     </Button>
//                     <Button variant="outlined" color="secondary">
//                       Room Mapper
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               </React.Fragment>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Rooms;

// import React from 'react';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import RoomIcon from '@mui/icons-material/Room';

// const Rooms = () => {
//   // Dummy data for rooms
//   const rooms = [
//     { id: 1, roomName: 'Living Room', thumbnail: 'thumbnail1.jpg', city: 'New York' },
//     { id: 2, roomName: 'Bedroom', thumbnail: 'thumbnail2.jpg', city: 'Los Angeles' },
//     { id: 3, roomName: 'Kitchen', thumbnail: 'thumbnail3.jpg', city: 'Chicago' },
//     { id: 4, roomName: 'Bathroom', thumbnail: 'thumbnail4.jpg', city: 'Houston' },
//     { id: 5, roomName: 'Office', thumbnail: 'thumbnail5.jpg', city: 'Phoenix' },
//   ];

//   console.log("Rooms:", rooms); // Check if rooms data is received

//   return (
//     <Box>
//       <Typography variant="h5" gutterBottom>
//         Your Rooms
//       </Typography>
//       {/* Map over rooms and display */}
//       {rooms.map(room => (
//         <Box key={room.id} sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
//           <RoomIcon sx={{ mr: 2 }} />
//           <img src={room.thumbnail} alt={room.roomName} style={{ width: 100, marginRight: 16 }} />
//           <Box>
//             <Typography variant="h6">{room.roomName}</Typography>
//             <Typography variant="body1">City: {room.city}</Typography>
//             <Button variant="contained" color="primary" sx={{ mr: 2 }}>Edit Room</Button>
//             <Button variant="contained" color="secondary">Open Room Mapper</Button>
//           </Box>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default Rooms;

// import React, { useEffect, useState } from 'react';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import RoomIcon from '@mui/icons-material/Room';

// const Rooms = () => {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/v1/rooms/');
//         if (!response.ok) {
//           throw new Error('Failed to fetch rooms');
//         }
//         const data = await response.json();
//         setRooms(data.results);
//       } catch (error) {
//         console.error('Error fetching rooms:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Box>
//       <Typography variant="h5" gutterBottom>
//         Your Rooms
//       </Typography>
//       {/* Map over rooms and display */}
//       {rooms.map(room => (
//         <Box key={room.id} sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
//           <RoomIcon sx={{ mr: 2 }} />
//           <img src={room.room_thumbnail} alt={room.name} style={{ width: 100, marginRight: 16 }} />
//           <Box>
//             <Typography variant="h6">Room Name: {room.name}</Typography>
//             <Typography variant="body1">Created By: {room.added_by}</Typography>
//             <Typography variant="body1">State: {room.state}</Typography>
//             <Button variant="contained" color="primary" sx={{ mr: 2 }}>Edit Room</Button>
//             <Button variant="contained" color="secondary" href={room.room_link}>Open Room Mapper</Button>
//           </Box>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default Rooms;

// import React, { useEffect, useState } from 'react';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import RoomIcon from '@mui/icons-material/Room';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';

// const Rooms = () => {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/v1/rooms/');
//         if (!response.ok) {
//           throw new Error('Failed to fetch rooms');
//         }
//         const data = await response.json();
//         setRooms(data.results);
//       } catch (error) {
//         console.error('Error fetching rooms:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Box>
//       <Typography variant="h5" gutterBottom>
//         Your Rooms
//       </Typography>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Room Thumbnail</TableCell>
//               <TableCell>Room Name</TableCell>
//               <TableCell>Created At</TableCell>
//               <TableCell>State</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rooms.map(room => (
//               <TableRow key={room.id}>
//                 <TableCell>
//                   <img src={room.room_thumbnail} alt={room.name} style={{ width: 100 }} />
//                 </TableCell>
//                 <TableCell>{room.name}</TableCell>
//                 <TableCell>{new Date(room.created_at).toLocaleString()}</TableCell>
//                 <TableCell>{room.state}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="primary">Edit Room</Button>
//                   <Button variant="contained" color="secondary" href={room.room_link}>Open Room Mapper</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default Rooms;

// import React, { useEffect, useState } from 'react';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import RoomIcon from '@mui/icons-material/Room';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';

// const Rooms = () => {
//   const [rooms, setRooms] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/v1/rooms/');
//         if (!response.ok) {
//           throw new Error('Failed to fetch rooms');
//         }
//         const data = await response.json();
//         setRooms(data.results);
//       } catch (error) {
//         console.error('Error fetching rooms:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
//   };

//   return (
//     <Box>
//       <Typography variant="h5" gutterBottom>
//         Your Rooms
//       </Typography>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Room Thumbnail</TableCell>
//               <TableCell>Room Name</TableCell>
//               <TableCell>Created At</TableCell>
//               <TableCell>State</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rooms.map(room => (
//               <TableRow key={room.id}>
//                 <TableCell>
//                   <img src={room.room_thumbnail} alt={room.name} style={{ width: 100 }} />
//                 </TableCell>
//                 <TableCell>{room.name}</TableCell>
//                 <TableCell>{formatDate(room.created_at)}</TableCell>
//                 <TableCell>{room.state}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="primary" style={{ marginRight: 8 }}>Edit Room</Button>
//                   <Button variant="contained" color="secondary" href={room.room_link} style={{ minWidth: 120 }}>Room Mapper</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default Rooms;

// import React, { useState, useEffect } from 'react';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import RoomIcon from '@mui/icons-material/Room';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import EditRoomForm from './EditRoomForm'; // Import the EditRoomForm component

// const Rooms = () => {
//   const [rooms, setRooms] = useState([]);
//   const [editRoomId, setEditRoomId] = useState(null); // State to manage the room ID being edited

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/v1/rooms/');
//         if (!response.ok) {
//           throw new Error('Failed to fetch rooms');
//         }
//         const data = await response.json();
//         setRooms(data.results);
//       } catch (error) {
//         console.error('Error fetching rooms:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
//   };

//   const handleEditRoom = (roomId) => {
//     setEditRoomId(roomId);
//   };

//   const handleCancelEdit = () => {
//     setEditRoomId(null);
//   };

//   return (
//     <Box>
//       <Typography variant="h5" gutterBottom>
//         Your Rooms
//       </Typography>
//       {editRoomId ? (
//         <EditRoomForm roomId={editRoomId} onClose={handleCancelEdit} /> // Render EditRoomForm if editRoomId is not null
//       ) : (
//         <TableContainer>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Room Thumbnail</TableCell>
//                 <TableCell>Room Name</TableCell>
//                 <TableCell>Created At</TableCell>
//                 <TableCell>State</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rooms.map(room => (
//                 <TableRow key={room.id}>
//                   <TableCell>
//                     <img src={room.room_thumbnail} alt={room.name} style={{ width: 100 }} />
//                   </TableCell>
//                   <TableCell>{room.name}</TableCell>
//                   <TableCell>{formatDate(room.created_at)}</TableCell>
//                   <TableCell>{room.state}</TableCell>
//                   <TableCell>
//                     <Button variant="contained" color="primary" style={{ marginRight: 8 }} onClick={() => handleEditRoom(room.id)}>Edit Room</Button>
//                     <Button variant="contained" color="secondary" href={room.room_link} style={{ minWidth: 120 }}>Room Mapper</Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </Box>
//   );
// };

// export default Rooms;

// import React, { useState, useEffect } from 'react';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import RoomIcon from '@mui/icons-material/Room';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import EditRoomForm from './EditRoomForm'; // Import the EditRoomForm component

// const Rooms = () => {
//   const [rooms, setRooms] = useState([]);
//   const [editRoomId, setEditRoomId] = useState(null); // State to manage the room ID being edited

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/v1/rooms/');
//         if (!response.ok) {
//           throw new Error('Failed to fetch rooms');
//         }
//         const data = await response.json();
//         setRooms(data.results);
//       } catch (error) {
//         console.error('Error fetching rooms:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
//   };

//   const handleEditRoom = (roomId) => {
//     setEditRoomId(roomId);
//   };

  

//   const handleCancelEdit = () => {
//     setEditRoomId(null);
//   };

//   const generateRoomMapperLink = (roomId) => {
//     return `http://127.0.0.1:8000/room/mapper/${roomId}`;
//   };

//   return (
//     <Box>
//       <Typography variant="h5" gutterBottom>
//         Your Rooms
//       </Typography>
//       {editRoomId ? (
//         <EditRoomForm roomId={editRoomId} onClose={handleCancelEdit} /> // Render EditRoomForm if editRoomId is not null
//       ) : (
//         <TableContainer>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Room Thumbnail</TableCell>
//                 <TableCell>Room Name</TableCell>
//                 <TableCell>Created At</TableCell>
//                 <TableCell>State</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rooms.map(room => (
//                 <TableRow key={room.id}>
//                   <TableCell>
//                     <img src={room.room_thumbnail} alt={room.name} style={{ width: 100 }} />
//                   </TableCell>
//                   <TableCell>{room.name}</TableCell>
//                   <TableCell>{formatDate(room.created_at)}</TableCell>
//                   <TableCell>{room.state}</TableCell>
//                   <TableCell>
//                     <Button variant="contained" color="primary" style={{ marginRight: 8 }} onClick={() => handleEditRoom(room.id)}>Edit Room</Button>
//                     <Button variant="contained" color="secondary" href={generateRoomMapperLink(room.id)} target="_blank" style={{ minWidth: 120 }}>Room Mapper</Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </Box>
//   );
// };

// export default Rooms;

// Rooms.js

import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RoomIcon from '@mui/icons-material/Room';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditRoomForm from './EditRoomForm'; // Import the EditRoomForm component
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import Cookies from 'js-cookie';
import { BASE_URL } from './constants';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [editRoomId, setEditRoomId] = useState(null); // State to manage the room ID being edited
  const { roomId } = useParams(); // Get roomId from route params

  useEffect(() => {
    const fetchData = async () => {
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
        const data = await response.json();
        setRooms(data.results);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
  };

  const handleEditRoom = (roomId) => {
    setEditRoomId(roomId);
  };

  const handleCancelEdit = () => {
    setEditRoomId(null);
  };

  const generateRoomMapperLink = (roomId) => {
    return `${BASE_URL}/room/mapper/${roomId}`;
  };

  const stateMap = {
    draft: 'Draft',
    in_review: 'In-Review',
    published: 'Published'
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Your Rooms
      </Typography>
      {editRoomId ? (
        <EditRoomForm roomId={editRoomId} onClose={handleCancelEdit} /> // Render EditRoomForm if editRoomId is not null
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Room Thumbnail</TableCell>
                <TableCell>Room Name</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rooms.map(room => (
                <TableRow key={room.id}>
                  <TableCell>
                    <img src={room.room_thumbnail} alt={room.name} style={{ width: 100 }} />
                  </TableCell>
                  <TableCell>{room.name}</TableCell>
                  <TableCell>{formatDate(room.created_at)}</TableCell>
                  <TableCell>{stateMap[room.state]}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" style={{ marginRight: 8 }} onClick={() => handleEditRoom(room.id)}>Edit Room</Button>
                    <Button variant="contained" color="secondary" href={generateRoomMapperLink(room.id)} target="_blank" style={{ minWidth: 120 }}>Room Mapper</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Rooms;