// import React, { useState, useRef } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import { styled } from '@mui/material/styles';
// import CameraAltIcon from '@mui/icons-material/CameraAlt';

// const ProfilePageContainer = styled(Card)(({ theme }) => ({
//   maxWidth: '25%',
//   float: 'left',
//   marginTop: theme.spacing(5),
//   marginRight: theme.spacing(6),
//   borderRadius: theme.spacing(2),
//   boxShadow: theme.shadows[5],
//   backgroundColor: theme.palette.background.paper,
//   textAlign: 'center',
//   padding: theme.spacing(4),
//   position: 'relative',
// }));

// const ProfileInfoContainer = styled(Card)(({ theme }) => ({
//   maxWidth: '65%',
//   float: 'left',
//   marginTop: theme.spacing(5),
//   borderRadius: theme.spacing(2),
//   boxShadow: theme.shadows[5],
//   backgroundColor: theme.palette.background.paper,
//   padding: theme.spacing(4),
// }));

// const AvatarWrapper = styled('div')({
//   display: 'flex',
//   justifyContent: 'center',
//   marginBottom: '20px',
//   position: 'relative',
// });

// const CameraIconWrapper = styled('div')({
//   position: 'absolute',
//   right: 0,
//   bottom: 0,
//   cursor: 'pointer',
//   backgroundColor: 'rgba(255, 255, 255, 0.7)',
//   borderRadius: '50%',
//   padding: '5px',
//   zIndex: 1,
// });

// const UpdateButtonWrapper = styled('div')({
//   display: 'flex',
//   justifyContent: 'flex-end',
//   marginTop: '20px',
// });

// const ProfilePage = () => {
//   const [avatarSrc, setAvatarSrc] = useState('/path/to/avatar.jpg');
//   const userData = {
//     name: 'John Doe',
//     designation: 'Software Engineer',
//     email: 'john.doe@example.com',
//     contact: '123-456-7890',
//   };

//   const inputFileRef = useRef(null);

//   const handleUpdateProfile = () => {
//     // Implement update profile functionality here
//   };

//   const handleAvatarUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setAvatarSrc(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleCameraIconClick = () => {
//     inputFileRef.current.click();
//   };

//   return (
//     <>
//       <ProfilePageContainer>
//         <CardContent>
//           <Typography variant="h4" component="div" gutterBottom>
//             My Account
//           </Typography>
//           <AvatarWrapper>
//             <Avatar alt="User Avatar" src={avatarSrc} sx={{ width: 120, height: 120 }} />
//             <CameraIconWrapper onClick={handleCameraIconClick}>
//               <CameraAltIcon fontSize="small" />
//               <input
//                 ref={inputFileRef}
//                 type="file"
//                 accept="image/*"
//                 onChange={handleAvatarUpload}
//                 style={{ display: 'none' }}
//               />
//             </CameraIconWrapper>
//           </AvatarWrapper>
//           <Typography variant="h5" gutterBottom>
//             {userData.name}
//           </Typography>
//           <Typography variant="subtitle1" gutterBottom>
//             {userData.designation}
//           </Typography>
//         </CardContent>
//       </ProfilePageContainer>

//       <ProfileInfoContainer>
//         <CardContent>
//           <Typography variant="h4" component="div" gutterBottom>
//             Update Profile
//           </Typography>
//           <TextField
//             id="name"
//             label="Name"
//             defaultValue={userData.name}
//             fullWidth
//             sx={{ marginBottom: 2 }}
//           />
//           <TextField
//             id="email"
//             label="Email"
//             defaultValue={userData.email}
//             fullWidth
//             sx={{ marginBottom: 2 }}
//           />
//           <TextField
//             id="designation"
//             label="Designation"
//             defaultValue={userData.designation}
//             fullWidth
//             disabled
//             sx={{ marginBottom: 2 }}
//           />
//           <TextField
//             id="contact"
//             label="Contact No"
//             defaultValue={userData.contact}
//             fullWidth
//             sx={{ marginBottom: 2 }}
//           />
//           <UpdateButtonWrapper>
//             <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
//               Update Profile
//             </Button>
//           </UpdateButtonWrapper>
//         </CardContent>
//       </ProfileInfoContainer>
//     </>
//   );
// };

// export default ProfilePage;

// import React, { useState, useEffect, useRef } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import { styled } from '@mui/material/styles';
// import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
// import Cookies from 'js-cookie';

// const ProfilePageContainer = styled(Card)(({ theme }) => ({
//   maxWidth: '25%',
//   float: 'left',
//   marginTop: theme.spacing(5),
//   marginRight: theme.spacing(6),
//   borderRadius: theme.spacing(2),
//   boxShadow: theme.shadows[5],
//   backgroundColor: theme.palette.background.paper,
//   textAlign: 'center',
//   padding: theme.spacing(4),
//   position: 'relative',
// }));

// const ProfileInfoContainer = styled(Card)(({ theme }) => ({
//   maxWidth: '65%',
//   float: 'left',
//   marginTop: theme.spacing(5),
//   borderRadius: theme.spacing(2),
//   boxShadow: theme.shadows[5],
//   backgroundColor: theme.palette.background.paper,
//   padding: theme.spacing(4),
// }));

// const AvatarWrapper = styled('div')({
//   display: 'flex',
//   justifyContent: 'center',
//   marginBottom: '20px',
//   position: 'relative',
// });

// const CameraIconWrapper = styled('div')({
//   position: 'absolute',
//   right: 0,
//   bottom: 0,
//   cursor: 'pointer',
//   backgroundColor: 'rgba(255, 255, 255, 0.7)',
//   borderRadius: '50%',
//   padding: '5px',
//   zIndex: 1,
// });

// const UpdateButtonWrapper = styled('div')({
//   display: 'flex',
//   justifyContent: 'flex-end',
//   marginTop: '20px',
// });

// const ProfilePage = () => {
//   const [avatarSrc, setAvatarSrc] = useState('/path/to/avatar.jpg');
//   const [userData, setUserData] = useState(null);
//   const [showSnackbar, setShowSnackbar] = useState(false);

//   const inputFileRef = useRef(null);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const token = Cookies.get('token');
//         const response = await fetch('http://127.0.0.1:8000/api/v1/user-profile/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch user profile');
//         }
//         const userProfileData = await response.json();
//         setUserData(userProfileData.results[0]);
//       } catch (error) {
//         console.error('Error fetching user profile:', error);
//       }
//     };
//     fetchUserProfile();
//   }, []);

//   const handleUpdateProfile = async () => {
//     try {
//       console.log('Data being sent:', userData); // Logging the data being sent
//       const token = Cookies.get('token'); // Get the token from the cookie
//       const formData = new FormData();
//       formData.append('name', userData.name);
//       formData.append('email', userData.email);
//       formData.append('phone_number', userData.phone_number);
//       //formData.append('profile_photo', inputFileRef.current.files[0]); 

//       const response = await fetch(`http://127.0.0.1:8000/api/v1/user-profile/${userData.id}/`, {
//         method: 'PATCH',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });
//       if (!response.ok) {
//         throw new Error('Failed to update user profile');
//       }
//       // Show success Snackbar
//       setShowSnackbar(true);
//       setTimeout(() => setShowSnackbar(false), 6000); // Close Snackbar after 6 seconds
//       // Show success message or handle accordingly
//       console.log('User profile updated successfully');
//     } catch (error) {
//       console.error('Error updating user profile:', error);
//       // Show error message or handle accordingly
//     }
//   };

//   const handleAvatarUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setAvatarSrc(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleCameraIconClick = () => {
//     inputFileRef.current.click();
//   };

//   const handleCloseSnackbar = () => {
//     setShowSnackbar(false);
//   };

//   return (
//     <>
//       {userData && (
//         <>
//           <ProfilePageContainer>
//             <CardContent>
//               <Typography variant="h4" component="div" gutterBottom>
//                 My Account
//               </Typography>
//               <AvatarWrapper>
//                 <Avatar alt="User Avatar" src={userData.profile_photo} sx={{ width: 120, height: 120 }} />
//                 <CameraIconWrapper onClick={handleCameraIconClick}>
//                   <CameraAltIcon fontSize="small" />
//                   <input
//                     ref={inputFileRef}
//                     type="file"
//                     accept="image/*"
//                     onChange={handleAvatarUpload}
//                     style={{ display: 'none' }}
//                   />
//                 </CameraIconWrapper>
//               </AvatarWrapper>
//               <Typography variant="h5" gutterBottom>
//                 {userData.name}
//               </Typography>
//               <Typography variant="subtitle1" gutterBottom>
//                 {userData.designation}
//               </Typography>
//             </CardContent>
//           </ProfilePageContainer>

//           <ProfileInfoContainer>
//             <CardContent>
//               <Typography variant="h4" component="div" gutterBottom>
//                 Update Profile
//               </Typography>
//               <TextField
//                 id="name"
//                 label="Name"
//                 defaultValue={userData.name}
//                 fullWidth
//                 sx={{ marginBottom: 2 }}
//               />
//               <TextField
//                 id="email"
//                 label="Email"
//                 defaultValue={userData.email}
//                 fullWidth
//                 sx={{ marginBottom: 2 }}
//               />
//               <TextField
//                 id="designation"
//                 label="Designation"
//                 defaultValue={userData.user_type}
//                 fullWidth
//                 disabled
//                 sx={{ marginBottom: 2 }}
//               />
//               <TextField
//                 id="contact"
//                 label="Contact No"
//                 defaultValue={userData.phone_number}
//                 fullWidth
//                 sx={{ marginBottom: 2 }}
//               />
//               <UpdateButtonWrapper>
//                 <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
//                   Update Profile
//                 </Button>
//               </UpdateButtonWrapper>
//             </CardContent>
//           </ProfileInfoContainer>
//         </>
//       )}
//       <Snackbar
//         open={showSnackbar}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//       >
//         <MuiAlert
//           elevation={6}
//           variant="filled"
//           onClose={handleCloseSnackbar}
//           severity="success"
//         >
//           User profile updated successfully
//         </MuiAlert>
//       </Snackbar>
//     </>
//   );
// };

// export default ProfilePage;

// import React, { useState, useEffect, useRef } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import { styled } from '@mui/material/styles';
// import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
// import Cookies from 'js-cookie';

// const ProfilePageContainer = styled(Card)(({ theme }) => ({
//   maxWidth: '25%',
//   float: 'left',
//   marginTop: theme.spacing(5),
//   marginRight: theme.spacing(6),
//   borderRadius: theme.spacing(2),
//   boxShadow: theme.shadows[5],
//   backgroundColor: theme.palette.background.paper,
//   textAlign: 'center',
//   padding: theme.spacing(4),
//   position: 'relative',
// }));

// const ProfileInfoContainer = styled(Card)(({ theme }) => ({
//   maxWidth: '65%',
//   float: 'left',
//   marginTop: theme.spacing(5),
//   borderRadius: theme.spacing(2),
//   boxShadow: theme.shadows[5],
//   backgroundColor: theme.palette.background.paper,
//   padding: theme.spacing(4),
// }));

// const AvatarWrapper = styled('div')({
//   display: 'flex',
//   justifyContent: 'center',
//   marginBottom: '20px',
//   position: 'relative',
// });

// const CameraIconWrapper = styled('div')({
//   position: 'absolute',
//   right: 0,
//   bottom: 0,
//   cursor: 'pointer',
//   backgroundColor: 'rgba(255, 255, 255, 0.7)',
//   borderRadius: '50%',
//   padding: '5px',
//   zIndex: 1,
// });

// const UpdateButtonWrapper = styled('div')({
//   display: 'flex',
//   justifyContent: 'flex-end',
//   marginTop: '20px',
// });

// const ProfilePage = () => {
//   const [avatarSrc, setAvatarSrc] = useState('/path/to/avatar.jpg');
//   const [userData, setUserData] = useState(null);
//   const [showSnackbar, setShowSnackbar] = useState(false);

//   const inputFileRef = useRef(null);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const token = Cookies.get('token');
//         const response = await fetch('http://127.0.0.1:8000/api/v1/user-profile/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch user profile');
//         }
//         const userProfileData = await response.json();
//         setUserData(userProfileData.results[0]);
//         setAvatarSrc(userProfileData.results[0].profile_photo); // Update avatar source
//       } catch (error) {
//         console.error('Error fetching user profile:', error);
//       }
//     };
//     fetchUserProfile();
//   }, []);

//   const handleUpdateProfile = async () => {
//     try {
//       console.log('Data being sent:', userData); // Logging the data being sent
//       const token = Cookies.get('token'); // Get the token from the cookie
//       const formData = new FormData();
//       formData.append('name', userData.name);
//       formData.append('email', userData.email);
//       formData.append('phone_number', userData.phone_number);
//       formData.append('profile_photo', inputFileRef.current.files[0]); // Update profile photo

//       const response = await fetch(`http://127.0.0.1:8000/api/v1/user-profile/${userData.id}/`, {
//         method: 'PATCH',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });
//       if (!response.ok) {
//         throw new Error('Failed to update user profile');
//       }
//       // Show success Snackbar
//       setShowSnackbar(true);
//       setTimeout(() => setShowSnackbar(false), 6000); // Close Snackbar after 6 seconds
//       // Show success message or handle accordingly
//       console.log('User profile updated successfully');
//     } catch (error) {
//       console.error('Error updating user profile:', error);
//       // Show error message or handle accordingly
//     }
//   };

//   const handleAvatarUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setAvatarSrc(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleCameraIconClick = () => {
//     inputFileRef.current.click();
//   };

//   const handleCloseSnackbar = () => {
//     setShowSnackbar(false);
//   };

//   return (
//     <>
//       {userData && (
//         <>
//           <ProfilePageContainer>
//             <CardContent>
//               <Typography variant="h4" component="div" gutterBottom>
//                 My Account
//               </Typography>
//               <AvatarWrapper>
//                 <Avatar alt="User Avatar" src={avatarSrc} sx={{ width: 120, height: 120 }} />
//                 <CameraIconWrapper onClick={handleCameraIconClick}>
//                   <CameraAltIcon fontSize="small" />
//                   <input
//                     ref={inputFileRef}
//                     type="file"
//                     accept="image/*"
//                     onChange={handleAvatarUpload}
//                     style={{ display: 'none' }}
//                   />
//                 </CameraIconWrapper>
//               </AvatarWrapper>
//               <Typography variant="h5" gutterBottom>
//                 {userData.name}
//               </Typography>
//               <Typography variant="subtitle1" gutterBottom>
//                 {userData.designation}
//               </Typography>
//             </CardContent>
//           </ProfilePageContainer>

//           <ProfileInfoContainer>
//             <CardContent>
//               <Typography variant="h4" component="div" gutterBottom>
//                 Update Profile
//               </Typography>
//               <TextField
//                 id="name"
//                 label="Name"
//                 defaultValue={userData.name}
//                 fullWidth
//                 sx={{ marginBottom: 2 }}
//               />
//               <TextField
//                 id="email"
//                 label="Email"
//                 defaultValue={userData.email}
//                 fullWidth
//                 sx={{ marginBottom: 2 }}
//               />
//               <TextField
//                 id="designation"
//                 label="Designation"
//                 defaultValue={userData.user_type}
//                 fullWidth
//                 disabled
//                 sx={{ marginBottom: 2 }}
//               />
//               <TextField
//                 id="contact"
//                 label="Contact No"
//                 defaultValue={userData.phone_number}
//                 fullWidth
//                 sx={{ marginBottom: 2 }}
//               />
//               <UpdateButtonWrapper>
//                 <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
//                   Update Profile
//                 </Button>
//               </UpdateButtonWrapper>
//             </CardContent>
//           </ProfileInfoContainer>
//         </>
//       )}
//       <Snackbar
//         open={showSnackbar}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//       >
//         <MuiAlert
//           elevation={6}
//           variant="filled"
//           onClose={handleCloseSnackbar}
//           severity="success"
//         >
//           User profile updated successfully
//         </MuiAlert>
//       </Snackbar>
//     </>
//   );
// };

// export default ProfilePage;

// import React, { useState, useEffect, useRef } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import { styled } from '@mui/material/styles';
// import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
// import Cookies from 'js-cookie';

// const ProfilePageContainer = styled(Card)(({ theme }) => ({
//   maxWidth: '25%',
//   float: 'left',
//   marginTop: theme.spacing(5),
//   marginRight: theme.spacing(6),
//   borderRadius: theme.spacing(2),
//   boxShadow: theme.shadows[5],
//   backgroundColor: theme.palette.background.paper,
//   textAlign: 'center',
//   padding: theme.spacing(4),
//   position: 'relative',
// }));

// const ProfileInfoContainer = styled(Card)(({ theme }) => ({
//   maxWidth: '65%',
//   float: 'left',
//   marginTop: theme.spacing(5),
//   borderRadius: theme.spacing(2),
//   boxShadow: theme.shadows[5],
//   backgroundColor: theme.palette.background.paper,
//   padding: theme.spacing(4),
// }));

// const AvatarWrapper = styled('div')({
//   display: 'flex',
//   justifyContent: 'center',
//   marginBottom: '20px',
//   position: 'relative',
// });

// const CameraIconWrapper = styled('div')({
//   position: 'absolute',
//   right: 0,
//   bottom: 0,
//   cursor: 'pointer',
//   backgroundColor: 'rgba(255, 255, 255, 0.7)',
//   borderRadius: '50%',
//   padding: '5px',
//   zIndex: 1,  
// });

// const UpdateButtonWrapper = styled('div')({
//   display: 'flex',
//   justifyContent: 'flex-end',
//   marginTop: '20px', 
// });

// const ProfilePage = () => {
//   const [avatarSrc, setAvatarSrc] = useState('/path/to/avatar.jpg');
//   const [userData, setUserData] = useState(null);
//   const [showSnackbar, setShowSnackbar] = useState(false);

//   const inputFileRef = useRef(null);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const token = Cookies.get('token');
//         const response = await fetch('http://127.0.0.1:8000/api/v1/user-profile/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch user profile');
//         }
//         const userProfileData = await response.json();
//         setUserData(userProfileData.results[0]);
//         setAvatarSrc(userProfileData.results[0].profile_photo); // Update avatar source
//       } catch (error) {
//         console.error('Error fetching user profile:', error);
//       }
//     };
//     fetchUserProfile();
//   }, []);

//   const handleUpdateProfile = async () => {
//     try {
//       console.log('Data being sent:', userData); // Logging the data being sent
//       const token = Cookies.get('token'); // Get the token from the cookie
//       const formData = new FormData();
//       formData.append('name', userData.name);
//       formData.append('email', userData.email);
//       formData.append('phone_number', userData.phone_number);
//       formData.append('profile_photo', inputFileRef.current.files[0]);

//       const response = await fetch(`http://127.0.0.1:8000/api/v1/user-profile/${userData.id}/`, {
//         method: 'PATCH',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });
//       if (!response.ok) {
//         throw new Error('Failed to update user profile');
//       }
//       // Show success Snackbar
//       setShowSnackbar(true);
//       setTimeout(() => setShowSnackbar(false), 6000); // Close Snackbar after 6 seconds
//       // Show success message or handle accordingly
//       console.log('User profile updated successfully');
//     } catch (error) {
//       console.error('Error updating user profile:', error);
//       // Show error message or handle accordingly
//     }
//   };

//   const handleAvatarUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setAvatarSrc(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleCameraIconClick = () => {
//     inputFileRef.current.click();
//   };

//   const handleCloseSnackbar = () => {
//     setShowSnackbar(false);
//   };

//   const handleFieldChange = (e) => {
//     const { id, value } = e.target;
//     setUserData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   return (
//     <>
//       {userData && (
//         <>
//           <ProfilePageContainer>
//             <CardContent>
//               <Typography variant="h4" component="div" gutterBottom>
//                 My Account
//               </Typography>
//               <AvatarWrapper>
//                 <Avatar alt="User Avatar" src={avatarSrc} sx={{ width: 120, height: 120 }} />
//                 <CameraIconWrapper onClick={handleCameraIconClick}>
//                   <CameraAltIcon fontSize="small" />
//                   <input
//                     ref={inputFileRef}
//                     type="file"
//                     accept="image/*"
//                     onChange={handleAvatarUpload}
//                     style={{ display: 'none' }}
//                   />
//                 </CameraIconWrapper>
//               </AvatarWrapper>
//               <Typography variant="h5" gutterBottom>
//                 {userData.name}
//               </Typography>
//               <Typography variant="subtitle1" gutterBottom>
//                 {userData.designation}
//               </Typography>
//             </CardContent>
//           </ProfilePageContainer>

//           <ProfileInfoContainer>
//             <CardContent>
//               <Typography variant="h4" component="div" gutterBottom>
//                 Update Profile
//               </Typography>
//               <TextField
//                 id="name"
//                 label="Name"
//                 value={userData.name}
//                 fullWidth
//                 onChange={handleFieldChange}
//                 sx={{ marginBottom: 2 }}
//               />
//               <TextField
//                 id="email"
//                 label="Email"
//                 value={userData.email}
//                 fullWidth
//                 onChange={handleFieldChange}
//                 sx={{ marginBottom: 2 }}
//               />
//               <TextField
//                 id="designation"
//                 label="Designation"
//                 value={userData.user_type}
//                 fullWidth
//                 disabled
//                 sx={{ marginBottom: 2 }}
//               />
//               <TextField
//                 id="phone_number"
//                 label="Contact No"
//                 value={userData.phone_number}
//                 fullWidth
//                 onChange={handleFieldChange}
//                 sx={{ marginBottom: 2 }}
//               />
//               <UpdateButtonWrapper>
//                 <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
//                   Update Profile
//                 </Button>
//               </UpdateButtonWrapper>
//             </CardContent>
//           </ProfileInfoContainer>
//         </>
//       )}
//       <Snackbar
//         open={showSnackbar}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//       >
//         <MuiAlert
//           elevation={6}
//           variant="filled"
//           onClose={handleCloseSnackbar}
//           severity="success"
//         >
//           User profile updated successfully
//         </MuiAlert>
//       </Snackbar>
//     </>
//   );
// };

// export default ProfilePage;

import React, { useState, useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Cookies from 'js-cookie';
import { BASE_URL } from './constants';

const ProfilePageContainer = styled(Card)(({ theme }) => ({
  maxWidth: '25%',
  float: 'left',
  marginTop: theme.spacing(5),
  marginRight: theme.spacing(6),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[5],
  backgroundColor: theme.palette.background.paper,
  textAlign: 'center',
  padding: theme.spacing(4),
  position: 'relative',
}));

const ProfileInfoContainer = styled(Card)(({ theme }) => ({
  maxWidth: '65%',
  float: 'left',
  marginTop: theme.spacing(5),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[5],
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
}));

const AvatarWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
  position: 'relative',
});

const CameraIconWrapper = styled('div')({
  position: 'absolute',
  right: 0,
  bottom: 0,
  cursor: 'pointer',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  borderRadius: '50%',
  padding: '5px',
  zIndex: 1,
});

const UpdateButtonWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '20px',
});

const ProfilePage = () => {
  const [avatarSrc, setAvatarSrc] = useState('/path/to/avatar.jpg');
  const [userData, setUserData] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const inputFileRef = useRef(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = Cookies.get('token');
        const response = await fetch(`${BASE_URL}/api/v1/user-profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }
        const userProfileData = await response.json();
        setUserData(userProfileData.results[0]);
        setAvatarSrc(userProfileData.results[0].profile_photo); // Update avatar source
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const token = Cookies.get('token'); // Get the token from the cookie
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('email', userData.email);
      formData.append('phone_number', userData.phone_number);
      if (inputFileRef.current.files[0]) {
        formData.append('profile_photo', inputFileRef.current.files[0]); // Update profile photo if selected
      }

      const response = await fetch(`${BASE_URL}/api/v1/user-profile/${userData.id}/`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to update user profile');
      }
      // Show success Snackbar
      setShowSnackbar(true);
      setTimeout(() => setShowSnackbar(false), 6000); // Close Snackbar after 6 seconds
      // Show success message or handle accordingly
      console.log('User profile updated successfully');
    } catch (error) {
      console.error('Error updating user profile:', error);
      // Show error message or handle accordingly
    }
  };

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCameraIconClick = () => {
    inputFileRef.current.click();
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const handleFieldChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <>
      {userData && (
        <>
          <ProfilePageContainer>
            <CardContent>
              <Typography variant="h4" component="div" gutterBottom>
                My Account
              </Typography>
              <AvatarWrapper>
                <Avatar alt="User Avatar" src={avatarSrc} sx={{ width: 120, height: 120 }} />
                <CameraIconWrapper onClick={handleCameraIconClick}>
                  <CameraAltIcon fontSize="small" />
                  <input
                    ref={inputFileRef}
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    style={{ display: 'none' }}
                  />
                </CameraIconWrapper>
              </AvatarWrapper>
              <Typography variant="h5" gutterBottom>
                {userData.name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {userData.designation}
              </Typography>
            </CardContent>
          </ProfilePageContainer>

          <ProfileInfoContainer>
            <CardContent>
              <Typography variant="h4" component="div" gutterBottom>
                Update Profile
              </Typography>
              <TextField
                id="name"
                label="Name"
                value={userData.name}
                fullWidth
                onChange={handleFieldChange}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                id="email"
                label="Email"
                value={userData.email}
                fullWidth
                onChange={handleFieldChange}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                id="designation"
                label="Designation"
                value={userData.user_type}
                fullWidth
                disabled
                sx={{ marginBottom: 2 }}
              />
              <TextField
                id="phone_number"
                label="Contact No"
                value={userData.phone_number}
                fullWidth
                onChange={handleFieldChange}
                sx={{ marginBottom: 2 }}
              />
              <UpdateButtonWrapper>
                <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
                  Update Profile
                </Button>
              </UpdateButtonWrapper>
            </CardContent>
          </ProfileInfoContainer>
        </>
      )}
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
          User profile updated successfully
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default ProfilePage;
