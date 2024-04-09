// // import React from 'react';
// // import Typography from '@mui/material/Typography';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';
// // import Button from '@mui/material/Button';
// // import Toolbar from '@mui/material/Toolbar';
// // import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// // // import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

// // const ReviewUsers = ({ onClose }) => {
// //   // Example user data, replace with your actual user data
// //   const users = [
// //     { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
// //     { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
// //     // Add more user entries as needed
// //   ];

// //   // const navigate = useNavigate(); // useNavigate hook for navigation

// //   const handleGoBack = () => {
// //     onClose(); // Call onClose function passed as prop
// //     // navigate(-1); // Go back one step in the history stack
// //   };

// //   return (
// //     <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
// //       <Toolbar>
// //         <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
// //           Review Users
// //         </Typography>
// //         <Button onClick={handleGoBack} startIcon={<ArrowBackIcon />} style={{ backgroundColor: 'yellow', color: '#000000' }}>Go Back</Button>
// //       </Toolbar>
// //       <TableContainer component={Paper}>
// //         <Table aria-label="review users table">
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>Name</TableCell>
// //               <TableCell>Email</TableCell>
// //               <TableCell>Role</TableCell>
// //               <TableCell>Actions</TableCell> {/* Added Actions column */}
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {users.map((user, index) => (
// //               <TableRow key={index}>
// //                 <TableCell>{user.name}</TableCell>
// //                 <TableCell>{user.email}</TableCell>
// //                 <TableCell>{user.role}</TableCell>
// //                 <TableCell>
// //                   <Button variant="contained" color="primary">
// //                     Change Role
// //                   </Button>
// //                 </TableCell> {/* Added Actions button */}
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //     </div>
// //   );
// // };

// // export default ReviewUsers;


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

// // const ReviewUsers = ({ onClose }) => {
// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const token = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
// //         const response = await fetch('http://127.0.0.1:8000/api/v1/users-list/', {
// //           headers: {
// //             'Authorization': `Token ${token}`
// //           }
// //         });
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch users');
// //         }
// //         const userData = await response.json();
// //         setUsers(userData.results);
// //       } catch (error) {
// //         console.error('Error fetching users:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const handleGoBack = () => {
// //     onClose();
// //   };

// //   return (
// //     <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
// //       <Toolbar>
// //         <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
// //           Review Users
// //         </Typography>
// //         <Button onClick={handleGoBack} startIcon={<ArrowBackIcon />} style={{ backgroundColor: 'yellow', color: '#000000' }}>Go Back</Button>
// //       </Toolbar>
// //       <TableContainer component={Paper}>
// //         <Table aria-label="review users table">
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>Name</TableCell>
// //               <TableCell>Email</TableCell>
// //               <TableCell>Phone Number</TableCell>
// //               <TableCell>User Type</TableCell>
// //               <TableCell>Actions</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {users.map((user) => (
// //               <TableRow key={user.id}>
// //                 <TableCell>{user.name}</TableCell>
// //                 <TableCell>{user.email}</TableCell>
// //                 <TableCell>{user.phone_number || 'N/A'}</TableCell>
// //                 <TableCell>{user.user_type}</TableCell>
// //                 <TableCell>
// //                   <Button variant="contained" color="primary">
// //                     Change Role
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

// // export default ReviewUsers;

// // import React, { useState, useEffect } from 'react';
// // import Typography from '@mui/material/Typography';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';
// // import Button from '@mui/material/Button';
// // import Toolbar from '@mui/material/Toolbar';
// // import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// // import Modal from '@mui/material/Modal';
// // import MenuItem from '@mui/material/MenuItem';
// // import Select from '@mui/material/Select';
// // import Cookies from 'js-cookie';

// // const ReviewUsers = ({ onClose }) => {
// //   const [users, setUsers] = useState([]);
// //   const [modalOpen, setModalOpen] = useState(false);
// //   const [selectedUser, setSelectedUser] = useState(null);
// //   const [selectedUserType, setSelectedUserType] = useState('');

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
        
// //         const token = Cookies.get('token'); // Get the token from the cookie
  
// //         const response = await fetch('http://127.0.0.1:8000/api/v1/users-list/', {
// //           headers: {
// //             Authorization: `Bearer ${token}`, // Include the token in the Authorization header
// //           },
// //         });
  
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch users');
// //         }
  
// //         const data = await response.json();
// //         setUsers(data.results);
// //       } catch (error) {
// //         console.error('Error fetching users:', error);
// //       }
// //     };
  
// //     fetchData();
// //   }, []);
  
  

// //   const handleOpenModal = (user) => {
// //     setSelectedUser(user);
// //     setSelectedUserType(user.user_type);
// //     setModalOpen(true);
// //   };

// //   const handleCloseModal = () => {
// //     setModalOpen(false);
// //   };

// //   const handleSaveUserType = () => {
// //     const token = Cookies.get('token');
// //     const formData = new FormData();
// //     formData.append('user_type', selectedUserType);

// //     fetch(`http://127.0.0.1:8000/api/v1/users-list/${selectedUser.id}/`, {
// //       method: 'PATCH',
// //       headers: {
// //         'Authorization': `Bearer ${token}`,
// //       },
// //       body: formData,
// //     })
// //     .then(response => {
// //       if (response.ok) {
// //         // If the PATCH request is successful, update the user's user_type in the local state
// //         const updatedUsers = users.map(u => {
// //           if (u.id === selectedUser.id) {
// //             return { ...u, user_type: selectedUserType };
// //           }
// //           return u;
// //         });
// //         setUsers(updatedUsers);
// //         handleCloseModal();
// //       }
// //     })
// //     .catch(error => console.error('Error updating user type:', error));
// //   };

// //   return (
// //     <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
// //       <Toolbar>
// //         <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
// //           Review Users
// //         </Typography>
// //         <Button onClick={onClose} startIcon={<ArrowBackIcon />} style={{ backgroundColor: 'yellow', color: '#000000' }}>Go Back</Button>
// //       </Toolbar>
// //       <TableContainer component={Paper}>
// //         <Table aria-label="review users table">
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>Name</TableCell>
// //               <TableCell>Email</TableCell>
// //               <TableCell>User Type</TableCell>
// //               <TableCell>Actions</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {users.map((user) => (
// //               <TableRow key={user.id}>
// //                 <TableCell>{user.name}</TableCell>
// //                 <TableCell>{user.email}</TableCell>
// //                 <TableCell>{user.user_type}</TableCell>
// //                 <TableCell>
// //                   <Button variant="contained" color="primary" onClick={() => handleOpenModal(user)}>
// //                     Change Role
// //                   </Button>
// //                 </TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //       <Modal open={modalOpen} onClose={handleCloseModal}>
// //         <div>
// //           <Typography variant="h6">Change User Type</Typography>
// //           <Select value={selectedUserType} onChange={(e) => setSelectedUserType(e.target.value)}>
// //             <MenuItem value="ccgadmin">CCG Admin</MenuItem>
// //             <MenuItem value="user">User</MenuItem>
// //             <MenuItem value="ccgcontentcreator">CCG Content Creator</MenuItem>
// //           </Select>
// //           <Button onClick={handleSaveUserType}>Save</Button>
// //         </div>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default ReviewUsers;

// import React, { useState, useEffect } from 'react';
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
// import Modal from '@mui/material/Modal';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
// import Cookies from 'js-cookie';

// const Alert = (props) => {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// };

// const ReviewUsers = ({ onClose }) => {
//   const [users, setUsers] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [selectedUserType, setSelectedUserType] = useState('');
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarSeverity, setSnackbarSeverity] = useState('');
//   const [snackbarMessage, setSnackbarMessage] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = Cookies.get('token');
//         const response = await fetch('http://127.0.0.1:8000/api/v1/users-list/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }

//         const data = await response.json();
//         setUsers(data.results);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleOpenModal = (user) => {
//     setSelectedUser(user);
//     setSelectedUserType(user.user_type); // Set the initial user type
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleSaveUserType = () => {
//     const token = Cookies.get('token');
//     const formData = new FormData();
//     formData.append('user_type', selectedUserType); // Add the selected user type to the formData

//     fetch(`http://127.0.0.1:8000/api/v1/users-list/${selectedUser.id}/`, {
//       method: 'PATCH',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData,
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to update user role');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const updatedUsers = users.map((u) => {
//           if (u.id === selectedUser.id) {
//             return { ...u, user_type: selectedUserType };
//           }
//           return u;
//         });
//         setUsers(updatedUsers);
//         handleCloseModal();
//         setSnackbarOpen(true);
//         setSnackbarSeverity('success');
//         setSnackbarMessage('User role updated successfully!');
//       })
//       .catch((error) => {
//         console.error('Error updating user type:', error);
//         setSnackbarOpen(true);
//         setSnackbarSeverity('error');
//         setSnackbarMessage('Failed to update user role');
//       });
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
//           Review Users
//         </Typography>
//         <Button onClick={onClose} startIcon={<ArrowBackIcon />} style={{ backgroundColor: 'yellow', color: '#000000' }}>
//           Go Back
//         </Button>
//       </Toolbar>
//       <TableContainer component={Paper}>
//         <Table aria-label="review users table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>User Type</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user) => (
//               <TableRow key={user.id}>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell>{user.email}</TableCell>
//                 <TableCell>{user.user_type}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="primary" onClick={() => handleOpenModal(user)}>
//                     Change Role
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Modal
//         open={modalOpen}
//         onClose={handleCloseModal}
//         style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//       >
//         <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
//           <Typography variant="h6">Change User Type</Typography>
//           <Select
//             value={selectedUserType}
//             onChange={(e) => setSelectedUserType(e.target.value)}
//             style={{ marginTop: '10px', width: '100%' }}
//           >
//             <MenuItem value="ccgadmin">CCG Admin</MenuItem>
//             <MenuItem value="user">User</MenuItem>
//             <MenuItem value="ccgcontentcreator">CCG Content Creator</MenuItem>
//           </Select>
//           <Button onClick={handleSaveUserType} style={{ marginTop: '10px' }}>
//             Save
//           </Button>
//         </div>
//       </Modal>
//       <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
//         <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// export default ReviewUsers;

// import React, { useState, useEffect } from 'react';
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
// import Modal from '@mui/material/Modal';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
// import Cookies from 'js-cookie';

// const Alert = (props) => {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// };

// const ReviewUsers = ({ onClose }) => {
//   const [users, setUsers] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [selectedUserType, setSelectedUserType] = useState('');
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarSeverity, setSnackbarSeverity] = useState('');
//   const [snackbarMessage, setSnackbarMessage] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = Cookies.get('token');
//         const response = await fetch('http://127.0.0.1:8000/api/v1/users-list/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }

//         const data = await response.json();
//         setUsers(data.results);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleOpenModal = (user) => {
//     setSelectedUser(user);
//     setSelectedUserType(user.user_type); // Set the initial user type
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleSaveUserType = () => {
//     const token = Cookies.get('token');
//     const formData = new FormData();
//     console.log("check",selectedUserType);
//     formData.append('user_type', selectedUserType); // Add the selected user type to the formData

//     fetch(`http://127.0.0.1:8000/api/v1/users-list/${selectedUser.id}/`, {
//       method: 'PATCH',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData,
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to update user role');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const updatedUsers = users.map((u) => {
//           if (u.id === selectedUser.id) {
//             return { ...u, user_type: selectedUserType };
//           }
//           return u;
//         });
//         setUsers(updatedUsers);
//         handleCloseModal();
//         setSnackbarOpen(true);
//         setSnackbarSeverity('success');
//         setSnackbarMessage('User role updated successfully!');
//       })
//       .catch((error) => {
//         console.error('Error updating user type:', error);
//         setSnackbarOpen(true);
//         setSnackbarSeverity('error');
//         setSnackbarMessage('Failed to update user role');
//       });
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
//       <Toolbar>
//         <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
//           Review Users
//         </Typography>
//         <Button onClick={onClose} startIcon={<ArrowBackIcon />} style={{ backgroundColor: 'yellow', color: '#000000' }}>
//           Go Back
//         </Button>
//       </Toolbar>
//       <TableContainer component={Paper}>
//         <Table aria-label="review users table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>User Type</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user) => (
//               <TableRow key={user.id}>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell>{user.email}</TableCell>
//                 <TableCell>{user.user_type}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="primary" onClick={() => handleOpenModal(user)}>
//                     Change Role
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Modal
//         open={modalOpen}
//         onClose={handleCloseModal}
//         style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//       >
//         <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
//           <Typography variant="h6">Change User Type</Typography>
//           <Select
//             value={selectedUserType}
//             onChange={(e) => setSelectedUserType(e.target.value)}
//             style={{ marginTop: '10px', width: '100%' }}
//           >
//             <MenuItem value="ccgadmin">CCG Admin</MenuItem>
//             <MenuItem value="user">User</MenuItem>
//             <MenuItem value="content_creator">CCG Content Creator</MenuItem>
//           </Select>
//           <Button onClick={handleSaveUserType} style={{ marginTop: '10px' }}>
//             Save
//           </Button>
//         </div>
//       </Modal>
//       {snackbarOpen && (
//         <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
//           <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
//             {snackbarMessage}
//           </Alert>
//         </Snackbar>
//       )}
//     </div>
//   );
// };

// export default ReviewUsers;

// import React, { useState, useEffect } from 'react';
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
// import Modal from '@mui/material/Modal';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
// import Box from '@mui/material/Box';
// import Cookies from 'js-cookie';

// const Alert = (props) => {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// };

// const ReviewUsers = ({ onClose }) => {
//   const [users, setUsers] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [selectedUserType, setSelectedUserType] = useState('');
//   const [snackbarState, setSnackbarState] = useState({
//     open: false,
//     severity: '',
//     message: '',
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = Cookies.get('token');
//         const response = await fetch('http://127.0.0.1:8000/api/v1/users-list/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }

//         const data = await response.json();
//         setUsers(data.results);
//       } catch (error) {
//         console.error('Error fetching users:', error.message);
//         handleSnackbarOpen('error', 'Failed to fetch users');
//       }
//     };

//     fetchData();
//   }, []);

//   const handleOpenModal = (user) => {
//     setSelectedUser(user);
//     setSelectedUserType(user.user_type);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleSaveUserType = () => {
//     const token = Cookies.get('token');
//     const formData = new FormData();
//     formData.append('user_type', selectedUserType);

//     fetch(`http://127.0.0.1:8000/api/v1/users-list/${selectedUser.id}/`, {
//       method: 'PATCH',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData,
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to update user role');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const updatedUsers = users.map((u) => {
//           if (u.id === selectedUser.id) {
//             return { ...u, user_type: selectedUserType };
//           }
//           return u;
//         });
//         setUsers(updatedUsers);
//         handleCloseModal();
//         handleSnackbarOpen('success', 'User role updated successfully!');
//       })
//       .catch((error) => {
//         console.error('Error updating user type:', error.message);
//         handleSnackbarOpen('error', 'Failed to update user role');
//       });
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarState({ ...snackbarState, open: false });
//   };

//   const handleSnackbarOpen = (severity, message) => {
//     setSnackbarState({ open: true, severity, message });
//   };

//   return (
//     <Box p={2} maxWidth={1000} m="auto">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Review Users
//         </Typography>
//         <Button onClick={onClose} startIcon={<ArrowBackIcon />} sx={{ bgcolor: 'yellow', color: '#000000' }}>
//           Go Back
//         </Button>
//       </Toolbar>
//       <TableContainer component={Paper} sx={{ mt: 2 }}>
//         <Table aria-label="review users table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>User Type</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user) => (
//               <TableRow key={user.id}>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell>{user.email}</TableCell>
//                 <TableCell>{user.user_type}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" onClick={() => handleOpenModal(user)}>
//                     Change Role
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Modal
//         open={modalOpen}
//         onClose={handleCloseModal}
//         sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//       >
//         <Box bgcolor="#ffffff" p={2} borderRadius={8}>
//           <Typography variant="h6">Change User Type</Typography>
//           <Select
//             value={selectedUserType}
//             onChange={(e) => setSelectedUserType(e.target.value)}
//             sx={{ mt: 1, width: '100%' }}
//           >
//             <MenuItem value="ccgadmin">CCG Admin</MenuItem>
//             <MenuItem value="user">User</MenuItem>
//             <MenuItem value="content_creator">CCG Content Creator</MenuItem>
//           </Select>
//           <Button onClick={handleSaveUserType} sx={{ mt: 2 }}>
//             Save
//           </Button>
//         </Box>
//       </Modal>
//       <Snackbar
//         open={snackbarState.open}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//       >
//         <Alert onClose={handleSnackbarClose} severity={snackbarState.severity}>
//           {snackbarState.message}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default ReviewUsers;

// import React, { useState, useEffect } from 'react';
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
// import Modal from '@mui/material/Modal';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
// import Box from '@mui/material/Box';
// import Cookies from 'js-cookie';

// const Alert = (props) => {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// };

// const ReviewUsers = ({ onClose }) => {
//   const [users, setUsers] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [selectedUserType, setSelectedUserType] = useState('');
//   const [snackbarState, setSnackbarState] = useState({
//     open: false,
//     severity: '',
//     message: '',
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = Cookies.get('token');
//         const response = await fetch('http://127.0.0.1:8000/api/v1/users-list/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }

//         const data = await response.json();
//         setUsers(data.results);
//       } catch (error) {
//         console.error('Error fetching users:', error.message);
//         handleSnackbarOpen('error', 'Failed to fetch users');
//       }
//     };

//     fetchData();
//   }, []);

//   const handleOpenModal = (user) => {
//     setSelectedUser(user);
//     setSelectedUserType(user.user_type);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleSaveUserType = async () => {
//     try {
//       const token = Cookies.get('token');
//       const formData = new FormData();
//       formData.append('user_type', selectedUserType);

//       const response = await fetch(`http://127.0.0.1:8000/api/v1/users-list/${selectedUser.id}/`, {
//         method: 'PATCH',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update user role');
//       }

//       const updatedUsers = users.map((u) => {
//         if (u.id === selectedUser.id) {
//           return { ...u, user_type: selectedUserType };
//         }
//         return u;
//       });
//       setUsers(updatedUsers);
//       handleCloseModal();
//       handleSnackbarOpen('success', 'User role updated successfully!');
//     } catch (error) {
//       console.error('Error updating user type:', error.message);
//       handleSnackbarOpen('error', 'Failed to update user role');
//     }
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarState({ ...snackbarState, open: false });
//   };

//   const handleSnackbarOpen = (severity, message) => {
//     setSnackbarState({ open: true, severity, message });
//   };

//   return (
//     <Box p={2} maxWidth={1000} m="auto">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Review Users
//         </Typography>
//         <Button onClick={onClose} startIcon={<ArrowBackIcon />} sx={{ bgcolor: 'yellow', color: '#000000' }}>
//           Go Back
//         </Button>
//       </Toolbar>
//       <TableContainer component={Paper} sx={{ mt: 2 }}>
//         <Table aria-label="review users table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>User Type</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user) => (
//               <TableRow key={user.id}>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell>{user.email}</TableCell>
//                 <TableCell>{user.user_type}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" onClick={() => handleOpenModal(user)}>
//                     Change Role
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Modal
//         open={modalOpen}
//         onClose={handleCloseModal}
//         sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//       >
//         <Box bgcolor="#ffffff" p={2} borderRadius={8}>
//           <Typography variant="h6">Change User Type</Typography>
//           <Select
//             value={selectedUserType}
//             onChange={(e) => setSelectedUserType(e.target.value)}
//             sx={{ mt: 1, width: '100%' }}
//           >
//             <MenuItem value="ccgadmin">CCG Admin</MenuItem>
//             <MenuItem value="user">User</MenuItem>
//             <MenuItem value="content_creator">CCG Content Creator</MenuItem>
//           </Select>
//           <Button onClick={handleSaveUserType} sx={{ mt: 2 }}>
//             Save
//           </Button>
//         </Box>
//       </Modal>
//       <Snackbar
//         open={snackbarState.open}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//       >
//         <Alert onClose={handleSnackbarClose} severity={snackbarState.severity}>
//           {snackbarState.message}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default ReviewUsers;

import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Cookies from 'js-cookie';
import { BASE_URL } from './constants';

const ReviewUsers = ({ onClose }) => {
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserType, setSelectedUserType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get('token');
        const response = await fetch(`${BASE_URL}/api/v1/users-list/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error('Error fetching users:', error.message);
        alert('Failed to fetch users');
      }
    };

    fetchData();
  }, []);

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setSelectedUserType(user.user_type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveUserType = async () => {
    try {
      const token = Cookies.get('token');
      const formData = new FormData();
      formData.append('user_type', selectedUserType);

      const response = await fetch(`${BASE_URL}/api/v1/users-list/${selectedUser.id}/`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to update user role');
      }

      const updatedUsers = users.map((u) => {
        if (u.id === selectedUser.id) {
          return { ...u, user_type: selectedUserType };
        }
        return u;
      });
      setUsers(updatedUsers);
      handleCloseModal();
      alert('User role updated successfully!');
    } catch (error) {
      console.error('Error updating user type:', error.message);
      alert('Failed to update user role');
    }
  };

  return (
    <Box p={2} maxWidth={1000} m="auto">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Review Users
        </Typography>
        <Button onClick={onClose} startIcon={<ArrowBackIcon />} sx={{ bgcolor: 'yellow', color: '#000000' }}>
          Go Back
        </Button>
        
      </Toolbar>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table aria-label="review users table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.user_type}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => handleOpenModal(user)}>
                    Change Role
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={modalOpen} onClose={handleCloseModal} aria-labelledby="modal-title" center>
        <Box bgcolor="#ffffff" p={2} borderRadius={8} sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Typography variant="h6">Change User Type</Typography>
          <Select
            value={selectedUserType}
            onChange={(e) => setSelectedUserType(e.target.value)}
            sx={{ mt: 1, width: '100%' }}
          >
            <MenuItem value="ccgadmin">CCG Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="content_creator">CCG Content Creator</MenuItem>
          </Select>
          <Button onClick={handleSaveUserType} sx={{ mt: 2 }}>
            Save
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ReviewUsers;
