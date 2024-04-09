// // // import React, { useState } from 'react';
// // // import CreateRoomForm from './CreateRoomForm';
// // // import HomePage from './HomePage';
// // // import Rooms from './rooms';
// // // import { styled, useTheme } from '@mui/material/styles';
// // // import Box from '@mui/material/Box';
// // // import MuiDrawer from '@mui/material/Drawer';
// // // import MuiAppBar from '@mui/material/AppBar';
// // // import Toolbar from '@mui/material/Toolbar';
// // // import List from '@mui/material/List';
// // // import CssBaseline from '@mui/material/CssBaseline';
// // // import Typography from '@mui/material/Typography';
// // // import Divider from '@mui/material/Divider';
// // // import IconButton from '@mui/material/IconButton';
// // // import MenuIcon from '@mui/icons-material/Menu';
// // // import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// // // import ChevronRightIcon from '@mui/icons-material/ChevronRight'; 
// // // import ListItem from '@mui/material/ListItem';
// // // import ListItemButton from '@mui/material/ListItemButton';
// // // import ListItemIcon from '@mui/material/ListItemIcon';
// // // import ListItemText from '@mui/material/ListItemText';
// // // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // // import InboxIcon from '@mui/icons-material/MoveToInbox';
// // // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // // import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// // // import MenuItem from '@mui/material/MenuItem';
// // // import Menu from '@mui/material/Menu';
// // // import Button from '@mui/material/Button';
// // // import HomeIcon from '@mui/icons-material/Home';
// // // import RoomIcon from '@mui/icons-material/Room';
// // // import Cookies from 'js-cookie';
// // // import EventIcon from '@mui/icons-material/Event';
// // // import EventDetails from './EventDetails';
// // // import ProfilePage from './ProfilePage';
// // // import { useNavigate } from 'react-router-dom';

// // // const drawerWidth = 240;

// // // const openedMixin = (theme) => ({
// // //   width: drawerWidth,
// // //   transition: theme.transitions.create('width', {
// // //     easing: theme.transitions.easing.sharp,
// // //     duration: theme.transitions.duration.enteringScreen,
// // //   }),
// // //   overflowX: 'hidden',
// // // });

// // // const closedMixin = (theme) => ({
// // //   transition: theme.transitions.create('width', {
// // //     easing: theme.transitions.easing.sharp,
// // //     duration: theme.transitions.duration.leavingScreen,
// // //   }),
// // //   overflowX: 'hidden',
// // //   width: `calc(${theme.spacing(7)} + 1px)`,
// // //   [theme.breakpoints.up('sm')]: {
// // //     width: `calc(${theme.spacing(8)} + 1px)`,
// // //   },
// // // });

// // // const DrawerHeader = styled('div')(({ theme }) => ({
// // //   display: 'flex',
// // //   alignItems: 'center',
// // //   justifyContent: 'flex-end',
// // //   padding: theme.spacing(0, 1),
// // //   // necessary for content to be below app bar
// // //   ...theme.mixins.toolbar,
// // // }));

// // // const AppBar = styled(MuiAppBar, {
// // //   shouldForwardProp: (prop) => prop !== 'open',
// // // })(({ theme, open }) => ({
// // //   zIndex: theme.zIndex.drawer + 1,
// // //   transition: theme.transitions.create(['width', 'margin'], {
// // //     easing: theme.transitions.easing.sharp,
// // //     duration: theme.transitions.duration.leavingScreen,
// // //   }),
// // //   ...(open && {
// // //     marginLeft: drawerWidth,
// // //     width: `calc(100% - ${drawerWidth}px)`,
// // //     transition: theme.transitions.create(['width', 'margin'], {
// // //       easing: theme.transitions.easing.sharp,
// // //       duration: theme.transitions.duration.enteringScreen,
// // //     }),
// // //   }),
// // // }));

// // // const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
// // //   ({ theme, open }) => ({
// // //     width: drawerWidth,
// // //     flexShrink: 0,
// // //     whiteSpace: 'nowrap',
// // //     boxSizing: 'border-box',
// // //     ...(open && {
// // //       ...openedMixin(theme),
// // //       '& .MuiDrawer-paper': openedMixin(theme),
// // //     }),
// // //     ...(!open && {
// // //       ...closedMixin(theme),
// // //       '& .MuiDrawer-paper': closedMixin(theme),
// // //     }),
// // //   }),
// // // );

// // // export default function MiniDrawer() {
// // //   const theme = useTheme();
// // //   const [open, setOpen] = useState(false);
// // //   const [selectedPage, setSelectedPage] = useState('homepage');
// // //   const [anchorEl, setAnchorEl] = useState(null);
// // //   const [showProfile, setShowProfile] = useState(false);
// // //   const history = useNavigate();

// // //   const handleDrawerOpen = () => {
// // //     setOpen(true);
// // //   };

// // //   const handleDrawerClose = () => {
// // //     setOpen(false);
// // //   };

// // //   const handlePageChange = (page) => {
// // //     setSelectedPage(page);
// // //   };

// // //   const handleMenuOpen = (event) => {
// // //     setAnchorEl(event.currentTarget);
// // //   };

// // //   const handleMenuClose = () => {
// // //     setAnchorEl(null);
// // //   };

// // //   const handleProfile = () => {
// // //     setShowProfile(true); // Set the state to show the profile page
// // //     handleMenuClose();
// // //   };

// // //   const handleLogout = () => {
// // //     // Close the menu (if needed)
// // //     // Clear the token cookie
// // //     Cookies.remove('token');
// // //     window.location.href = '/login';
// // //     // Redirect to the login page
// // //     // history.push('/login');
// // //     handleMenuClose();
// // //   };

// // //   const renderPage = () => {
// // //     switch (selectedPage) {
// // //       case 'inbox':
// // //         return (
// // //           <div>
// // //             <Typography variant="h6" gutterBottom>
// // //               Inbox Page Content...
// // //             </Typography>
// // //           </div>
// // //         );
// // //       case 'createRoom':
// // //         return <CreateRoomForm />;
// // //       case 'homepage':
// // //         return <HomePage />;
// // //       case 'rooms':
// // //         return <Rooms/>;
// // //       case 'event':
// // //         return <EventDetails />;
// // //       case 'myprofile':
// // //         return <ProfilePage/>;
// // //       default:
// // //         return null;
// // //     }
// // //   };

// // //   return (
// // //     <Box sx={{ display: 'flex' }}>
// // //       <CssBaseline />
// // //       <AppBar position="fixed" open={open} sx={{ backgroundColor: 'black' }}>
// // //         <Toolbar>
// // //           <IconButton
// // //             color="inherit"
// // //             aria-label="open drawer"
// // //             onClick={handleDrawerOpen}
// // //             edge="start"
// // //             sx={{
// // //               marginRight: 2,
// // //               ...(open && { display: 'none' }),
// // //             }}
// // //           >
// // //             <MenuIcon />
// // //           </IconButton>
// // //           <Typography variant="h6" noWrap component="div">
// // //             Stem-City CMS
// // //           </Typography>
// // //           <Button
// // //             color="inherit"
// // //             onClick={() => window.open('https://stemcity3d.com/', '_blank')}
// // //             sx={{ marginLeft: '775px' }}
// // //           >
// // //             Go to Stem City Main
// // //           </Button>
// // //           <IconButton
// // //             color="inherit"
// // //             aria-label="account of current user"
// // //             aria-controls="menu-appbar"
// // //             aria-haspopup="true"
// // //             onClick={handleMenuOpen}
// // //             sx={{ marginLeft: 'auto' }}
// // //           >
// // //             <AccountCircleIcon />
// // //             <ArrowDropDownIcon />
// // //           </IconButton>
// // //           <Menu
// // //             id="menu-appbar"
// // //             anchorEl={anchorEl}
// // //             anchorOrigin={{
// // //               vertical: 'bottom', // Align the menu to the bottom of the icon
// // //               horizontal: 'right',
// // //             }}
// // //             transformOrigin={{
// // //               vertical: 'top',
// // //               horizontal: 'right',
// // //             }}
// // //             open={Boolean(anchorEl)}
// // //             onClose={handleMenuClose}
// // //           >
// // //             <MenuItem onClick={() => handlePageChange('myprofile')}>My Profile</MenuItem>
// // //             <MenuItem onClick={handleLogout}>Logout</MenuItem>
// // //           </Menu>

// // //         </Toolbar>
// // //       </AppBar>
// // //       <Drawer variant="permanent" open={open}>
// // //         <DrawerHeader>
// // //           <IconButton onClick={handleDrawerClose}>
// // //             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
// // //           </IconButton>
// // //         </DrawerHeader>
// // //         <Divider />
// // //         <List>
// // //           <ListItem
// // //             key="homepage"
// // //             disablePadding
// // //             onClick={() => handlePageChange('homepage')}
// // //           >
// // //             <ListItemButton>
// // //               <ListItemIcon>
// // //                 <HomeIcon />
// // //               </ListItemIcon>
// // //               <ListItemText primary="Home Page" />
// // //             </ListItemButton>
// // //           </ListItem>
// // //           <ListItem
// // //             key="createRoom"
// // //             disablePadding
// // //             onClick={() => handlePageChange('createRoom')}
// // //           >
// // //             <ListItemButton>
// // //               <ListItemIcon>
// // //                 <AddCircleIcon />
// // //               </ListItemIcon>
// // //               <ListItemText primary="Create a Room" />
// // //             </ListItemButton>
// // //           </ListItem>
// // //           <ListItem
// // //             key="rooms"
// // //             disablePadding
// // //             onClick={() => handlePageChange('rooms')} // Update the key to match the component name
// // //           >
// // //             <ListItemButton>
// // //               <ListItemIcon>
// // //                 <RoomIcon />
// // //               </ListItemIcon>
// // //               <ListItemText primary="My Rooms" />
// // //             </ListItemButton>
// // //           </ListItem>
// // //           <ListItem key="event" disablePadding onClick={() => handlePageChange('event')}>
// // //             <ListItemButton>
// // //               <ListItemIcon>
// // //                 <EventIcon />
// // //               </ListItemIcon>
// // //               <ListItemText primary="Event" />
// // //             </ListItemButton>
// // //           </ListItem>
// // //           {/* <ListItem
// // //             key="inbox"
// // //             disablePadding
// // //             onClick={() => handlePageChange('inbox')}
// // //           >
// // //             <ListItemButton>
// // //               <ListItemIcon>
// // //                 <InboxIcon />
// // //               </ListItemIcon>
// // //               <ListItemText primary="Inbox" />
// // //             </ListItemButton>
// // //           </ListItem> */}
// // //         </List>
// // //         <Divider />
// // //         <List>
// // //           {/* Add any additional list items */}
// // //         </List>
// // //       </Drawer>
// // //       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
// // //         <DrawerHeader />
// // //         {renderPage()}
// // //       </Box>
// // //     </Box>
// // //   );
// // // }

// // import React, { useState, useEffect } from 'react';
// // import CreateRoomForm from './CreateRoomForm';
// // import HomePage from './HomePage';
// // import Rooms from './rooms';
// // import { styled, useTheme } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import MuiDrawer from '@mui/material/Drawer';
// // import MuiAppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import List from '@mui/material/List';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import Typography from '@mui/material/Typography';
// // import Divider from '@mui/material/Divider';
// // import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// // import ChevronRightIcon from '@mui/icons-material/ChevronRight'; 
// // import ListItem from '@mui/material/ListItem';
// // import ListItemButton from '@mui/material/ListItemButton';
// // import ListItemIcon from '@mui/material/ListItemIcon';
// // import ListItemText from '@mui/material/ListItemText';
// // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // import InboxIcon from '@mui/icons-material/MoveToInbox';
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// // import MenuItem from '@mui/material/MenuItem';
// // import Menu from '@mui/material/Menu';
// // import Button from '@mui/material/Button';
// // import HomeIcon from '@mui/icons-material/Home';
// // import RoomIcon from '@mui/icons-material/Room';
// // import Cookies from 'js-cookie';
// // import EventIcon from '@mui/icons-material/Event';
// // import EventDetails from './EventDetails';
// // import ProfilePage from './ProfilePage';
// // import { useNavigate } from 'react-router-dom';

// // const drawerWidth = 240;

// // const openedMixin = (theme) => ({
// //   width: drawerWidth,
// //   transition: theme.transitions.create('width', {
// //     easing: theme.transitions.easing.sharp,
// //     duration: theme.transitions.duration.enteringScreen,
// //   }),
// //   overflowX: 'hidden',
// // });

// // const closedMixin = (theme) => ({
// //   transition: theme.transitions.create('width', {
// //     easing: theme.transitions.easing.sharp,
// //     duration: theme.transitions.duration.leavingScreen,
// //   }),
// //   overflowX: 'hidden',
// //   width: `calc(${theme.spacing(7)} + 1px)`,
// //   [theme.breakpoints.up('sm')]: {
// //     width: `calc(${theme.spacing(8)} + 1px)`,
// //   },
// // });

// // const DrawerHeader = styled('div')(({ theme }) => ({
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'flex-end',
// //   padding: theme.spacing(0, 1),
// //   // necessary for content to be below app bar
// //   ...theme.mixins.toolbar,
// // }));

// // const AppBar = styled(MuiAppBar, {
// //   shouldForwardProp: (prop) => prop !== 'open',
// // })(({ theme, open }) => ({
// //   zIndex: theme.zIndex.drawer + 1,
// //   transition: theme.transitions.create(['width', 'margin'], {
// //     easing: theme.transitions.easing.sharp,
// //     duration: theme.transitions.duration.leavingScreen,
// //   }),
// //   ...(open && {
// //     marginLeft: drawerWidth,
// //     width: `calc(100% - ${drawerWidth}px)`,
// //     transition: theme.transitions.create(['width', 'margin'], {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.enteringScreen,
// //     }),
// //   }),
// // }));

// // const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
// //   ({ theme, open }) => ({
// //     width: drawerWidth,
// //     flexShrink: 0,
// //     whiteSpace: 'nowrap',
// //     boxSizing: 'border-box',
// //     ...(open && {
// //       ...openedMixin(theme),
// //       '& .MuiDrawer-paper': openedMixin(theme),
// //     }),
// //     ...(!open && {
// //       ...closedMixin(theme),
// //       '& .MuiDrawer-paper': closedMixin(theme),
// //     }),
// //   }),
// // );

// // export default function MiniDrawer() {
// //   const theme = useTheme();
// //   const [open, setOpen] = useState(false);
// //   const [selectedPage, setSelectedPage] = useState('homepage');
// //   const [anchorEl, setAnchorEl] = useState(null);
// //   const [showProfile, setShowProfile] = useState(false);
// //   const [userType, setUserType] = useState(null); // State to store user type
// //   const [isAdmin, setIsAdmin] = useState(false); // State to store admin status
// //   const history = useNavigate();

// //   useEffect(() => {
// //     // Fetch user profile data
// //     const fetchUserProfile = async () => {
// //       try {
// //         const token = Cookies.get('token');
// //         const response = await fetch('http://127.0.0.1:8000/api/v1/user-profile/', {
// //           method: 'GET',
// //           headers: {
// //             'Content-Type': 'application/json',
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });
// //         const data = await response.json();
// //         if (response.ok) {
// //           // Extract user type and admin status from the fetched data
// //           const user = data.results[0];
// //           setUserType(user.user_type);
// //           setIsAdmin(user.is_admin);
// //         } else {
// //           throw new Error('Failed to fetch user profile data');
// //         }
// //       } catch (error) {
// //         console.error('Error fetching user profile data:', error);
// //       }
// //     };

// //     fetchUserProfile();
// //   }, []);

// //   const handleDrawerOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleDrawerClose = () => {
// //     setOpen(false);
// //   };

// //   const handlePageChange = (page) => {
// //     setSelectedPage(page);
// //   };

// //   const handleMenuOpen = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleMenuClose = () => {
// //     setAnchorEl(null);
// //   };

// //   const handleProfile = () => {
// //     setShowProfile(true); // Set the state to show the profile page
// //     handleMenuClose();
// //   };

// //   const handleLogout = () => {
// //     // Close the menu (if needed)
// //     // Clear the token cookie
// //     Cookies.remove('token');
// //     window.location.href = '/login';
// //     // Redirect to the login page
// //     // history.push('/login');
// //     handleMenuClose();
// //   };

// //   const renderPage = () => {
// //     switch (selectedPage) {
// //       case 'inbox':
// //         return (
// //           <div>
// //             <Typography variant="h6" gutterBottom>
// //               Inbox Page Content...
// //             </Typography>
// //           </div>
// //         );
// //       case 'createRoom':
// //         return <CreateRoomForm />;
// //       case 'homepage':
// //         return <HomePage />;
// //       case 'rooms':
// //         return <Rooms/>;
// //       case 'event':
// //         return <EventDetails />;
// //       case 'myprofile':
// //         return <ProfilePage/>;
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <Box sx={{ display: 'flex' }}>
// //       <CssBaseline />
// //       <AppBar position="fixed" open={open} sx={{ backgroundColor: 'black' }}>
// //         <Toolbar>
// //           <IconButton
// //             color="inherit"
// //             aria-label="open drawer"
// //             onClick={handleDrawerOpen}
// //             edge="start"
// //             sx={{
// //               marginRight: 2,
// //               ...(open && { display: 'none' }),
// //             }}
// //           >
// //             <MenuIcon />
// //           </IconButton>
// //           <Typography variant="h6" noWrap component="div">
// //             Stem-City CMS
// //           </Typography>
// //           <Button
// //             color="inherit"
// //             onClick={() => window.open('https://stemcity3d.com/', '_blank')}
// //             sx={{ marginLeft: '775px' }}
// //           >
// //             Go to Stem City Main
// //           </Button>
// //           <IconButton
// //             color="inherit"
// //             aria-label="account of current user"
// //             aria-controls="menu-appbar"
// //             aria-haspopup="true"
// //             onClick={handleMenuOpen}
// //             sx={{ marginLeft: 'auto' }}
// //           >
// //             <AccountCircleIcon />
// //             <ArrowDropDownIcon />
// //           </IconButton>
// //           <Menu
// //             id="menu-appbar"
// //             anchorEl={anchorEl}
// //             anchorOrigin={{
// //               vertical: 'bottom', // Align the menu to the bottom of the icon
// //               horizontal: 'right',
// //             }}
// //             transformOrigin={{
// //               vertical: 'top',
// //               horizontal: 'right',
// //             }}
// //             open={Boolean(anchorEl)}
// //             onClose={handleMenuClose}
// //           >
// //             <MenuItem onClick={() => handlePageChange('myprofile')}>My Profile</MenuItem>
// //             <MenuItem onClick={handleLogout}>Logout</MenuItem>
// //           </Menu>

// //         </Toolbar>
// //       </AppBar>
// //       <Drawer variant="permanent" open={open}>
// //         <DrawerHeader>
// //           <IconButton onClick={handleDrawerClose}>
// //             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
// //           </IconButton>
// //         </DrawerHeader>
// //         <Divider />
// //         <List>
// //           <ListItem
// //             key="homepage"
// //             disablePadding
// //             onClick={() => handlePageChange('homepage')}
// //           >
// //             <ListItemButton>
// //               <ListItemIcon>
// //                 <HomeIcon />
// //               </ListItemIcon>
// //               <ListItemText primary="Home Page" />
// //             </ListItemButton>
// //           </ListItem>
// //           <ListItem
// //             key="createRoom"
// //             disablePadding
// //             onClick={() => handlePageChange('createRoom')}
// //           >
// //             <ListItemButton>
// //               <ListItemIcon>
// //                 <AddCircleIcon />
// //               </ListItemIcon>
// //               <ListItemText primary="Create a Room" />
// //             </ListItemButton>
// //           </ListItem>
// //           <ListItem
// //             key="rooms"
// //             disablePadding
// //             onClick={() => handlePageChange('rooms')} // Update the key to match the component name
// //           >
// //             <ListItemButton>
// //               <ListItemIcon>
// //                 <RoomIcon />
// //               </ListItemIcon>
// //               <ListItemText primary="My Rooms" />
// //             </ListItemButton>
// //           </ListItem>
// //           <ListItem key="event" disablePadding onClick={() => handlePageChange('event')}>
// //             <ListItemButton>
// //               <ListItemIcon>
// //                 <EventIcon />
// //               </ListItemIcon>
// //               <ListItemText primary="Event" />
// //             </ListItemButton>
// //           </ListItem>
// //           {/* Conditional rendering for additional list items based on user type and admin status */}
// //           {userType === 'ccg_admin' && isAdmin && (
// //             <>
// //               <ListItem
// //                 key="reviewRooms"
// //                 disablePadding
// //                 onClick={() => handlePageChange('reviewRooms')}
// //               >
// //                 <ListItemButton>
// //                   <ListItemText primary="Review Rooms" />
// //                 </ListItemButton>
// //               </ListItem>
// //               <ListItem
// //                 key="reviewEvents"
// //                 disablePadding
// //                 onClick={() => handlePageChange('reviewEvents')}
// //               >
// //                 <ListItemButton>
// //                   <ListItemText primary="Review Events" />
// //                 </ListItemButton>
// //               </ListItem>
// //               <ListItem
// //                 key="users"
// //                 disablePadding
// //                 onClick={() => handlePageChange('users')}
// //               >
// //                 <ListItemButton>
// //                   <ListItemText primary="Users" />
// //                 </ListItemButton>
// //               </ListItem>
// //             </>
// //           )}
// //         </List>
// //         <Divider />
// //         <List>
// //           {/* Add any additional list items */}
// //         </List>
// //       </Drawer>
// //       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
// //         <DrawerHeader />
// //         {renderPage()}
// //       </Box>
// //     </Box>
// //   );
// // }

// import React, { useState, useEffect } from 'react';
// import CreateRoomForm from './CreateRoomForm';
// import HomePage from './HomePage';
// import Rooms from './rooms';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight'; 
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import Button from '@mui/material/Button';
// import HomeIcon from '@mui/icons-material/Home';
// import RoomIcon from '@mui/icons-material/Room';
// import Cookies from 'js-cookie';
// import EventIcon from '@mui/icons-material/Event';
// import EventDetails from './EventDetails';
// import ProfilePage from './ProfilePage';
// import { useNavigate } from 'react-router-dom';

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = useState(false);
//   const [selectedPage, setSelectedPage] = useState('homepage');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [showProfile, setShowProfile] = useState(false);
//   const [userType, setUserType] = useState(null); // State to store user type
//   const [isAdmin, setIsAdmin] = useState(false); // State to store admin status
//   const history = useNavigate();

//   useEffect(() => {
//     // Fetch user profile data
//     const fetchUserProfile = async () => {
//       try {
//         const token = Cookies.get('token');
//         const response = await fetch('http://127.0.0.1:8000/api/v1/user-profile/', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const data = await response.json();
//         if (response.ok) {
//           // Extract user type and admin status from the fetched data
//           const user = data.results[0];
//           console.log("user",user.is_admin);
//           setUserType(user.user_type);
//           setIsAdmin(user.is_admin);
//         } else {
//           throw new Error('Failed to fetch user profile data');
//         }
//       } catch (error) {
//         console.error('Error fetching user profile data:', error);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const handlePageChange = (page) => {
//     setSelectedPage(page);
//   };

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleProfile = () => {
//     setShowProfile(true); // Set the state to show the profile page
//     handleMenuClose();
//   };

//   const handleLogout = () => {
//     // Close the menu (if needed)
//     // Clear the token cookie
//     Cookies.remove('token');
//     window.location.href = '/login';
//     // Redirect to the login page
//     // history.push('/login');
//     handleMenuClose();
//   };

//   const renderPage = () => {
//     switch (selectedPage) {
//       case 'inbox':
//         return (
//           <div>
//             <Typography variant="h6" gutterBottom>
//               Inbox Page Content...
//             </Typography>
//           </div>
//         );
//       case 'createRoom':
//         return <CreateRoomForm />;
//       case 'homepage':
//         return <HomePage />;
//       case 'rooms':
//         return <Rooms/>;
//       case 'event':
//         return <EventDetails />;
//       case 'myprofile':
//         return <ProfilePage/>;
//       case 'reviewRooms':
//         // Implement logic for the reviewRooms page
//         break;
//       case 'reviewEvents':
//         // Implement logic for the reviewEvents page
//         break;
//       case 'users':
//         // Implement logic for the users page
//         break;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open} sx={{ backgroundColor: 'black' }}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 2,
//               ...(open && { display: 'none' }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Stem-City CMS
//           </Typography>
//           <Button
//             color="inherit"
//             onClick={() => window.open('https://stemcity3d.com/', '_blank')}
//             sx={{ marginLeft: '775px' }}
//           >
//             Go to Stem City Main
//           </Button>
//           <IconButton
//             color="inherit"
//             aria-label="account of current user"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             onClick={handleMenuOpen}
//             sx={{ marginLeft: 'auto' }}
//           >
//             <AccountCircleIcon />
//             <ArrowDropDownIcon />
//           </IconButton>
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorEl}
//             anchorOrigin={{
//               vertical: 'bottom', // Align the menu to the bottom of the icon
//               horizontal: 'right',
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={() => handlePageChange('myprofile')}>My Profile</MenuItem>
//             <MenuItem onClick={handleLogout}>Logout</MenuItem>
//           </Menu>

//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           <ListItem
//             key="homepage"
//             disablePadding
//             onClick={() => handlePageChange('homepage')}
//           >
//             <ListItemButton>
//               <ListItemIcon>
//                 <HomeIcon />
//               </ListItemIcon>
//               <ListItemText primary="Home Page" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem
//             key="createRoom"
//             disablePadding
//             onClick={() => handlePageChange('createRoom')}
//           >
//             <ListItemButton>
//               <ListItemIcon>
//                 <AddCircleIcon />
//               </ListItemIcon>
//               <ListItemText primary="Create a Room" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem
//             key="rooms"
//             disablePadding
//             onClick={() => handlePageChange('rooms')} // Update the key to match the component name
//           >
//             <ListItemButton>
//               <ListItemIcon>
//                 <RoomIcon />
//               </ListItemIcon>
//               <ListItemText primary="My Rooms" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem key="event" disablePadding onClick={() => handlePageChange('event')}>
//             <ListItemButton>
//               <ListItemIcon>
//                 <EventIcon />
//               </ListItemIcon>
//               <ListItemText primary="Event" />
//             </ListItemButton>
//           </ListItem>
//           {/* Conditional rendering for additional list items based on user type and admin status */}
//           {userType === 'ccg_admin' && isAdmin && (
//             <>
//               <ListItem
//                 key="reviewRooms"
//                 disablePadding
//                 onClick={() => handlePageChange('reviewRooms')}
//               >
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <EventIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="Review Rooms" />
//                 </ListItemButton>
//               </ListItem>
//               <ListItem
//                 key="reviewEvents"
//                 disablePadding
//                 onClick={() => handlePageChange('reviewEvents')}
//               >
//                 <ListItemButton>
//                   <ListItemIcon>
//                     {/* Icon for Review Events */}
//                   </ListItemIcon>
//                   <ListItemText primary="Review Events" />
//                 </ListItemButton>
//               </ListItem>
              
//               <ListItem
//                 key="users"
//                 disablePadding
//                 onClick={() => handlePageChange('users')}
//               >
//                 <ListItemButton>
//                   <ListItemIcon>
//                     {/* Icon for Users */}
//                   </ListItemIcon>
//                   <ListItemText primary="Users" />
//                 </ListItemButton>
//               </ListItem>
//             </>
//           )}
//         </List>
//         <Divider />
//         <List>
//           {/* Add any additional list items */}
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//         {renderPage()}
//       </Box>
//     </Box>
//   );
// }

import React, { useState, useEffect } from 'react';
import CreateRoomForm from './CreateRoomForm';
import HomePage from './HomePage';
import Rooms from './rooms';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'; 
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import RoomIcon from '@mui/icons-material/Room';
import Cookies from 'js-cookie';
import EventIcon from '@mui/icons-material/Event';
import EventDetails from './EventDetails';
import ProfilePage from './ProfilePage';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from './constants';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('homepage');
  const [anchorEl, setAnchorEl] = useState(null);
  const [userType, setUserType] = useState(null); // State to store user type
  const [isAdmin, setIsAdmin] = useState(false); // State to store admin status
  const history = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    // Fetch user profile data
    const fetchUserProfile = async () => {
      try {
        const token = Cookies.get('token');
        const response = await fetch(`${BASE_URL}/api/v1/user-profile/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          // Extract user type and admin status from the fetched data
          const user = data.results[0];
          setUserType(user.user_type);
          setIsAdmin(user.is_admin);
        } else {
          throw new Error('Failed to fetch user profile data');
        }
      } catch (error) {
        console.error('Error fetching user profile data:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    setShowProfile(true); // Set the state to show the profile page
    handleMenuClose();
  };

  const handleLogout = () => {
    // Close the menu (if needed)
    // Clear the token cookie
    Cookies.remove('token');
    window.location.href = '/login';
    // Redirect to the login page
    // history.push('/login');
    handleMenuClose();
  };

  const renderPage = () => {
    switch (selectedPage) {
      case 'inbox':
        return (
          <div>
            <Typography variant="h6" gutterBottom>
              Inbox Page Content...
            </Typography>
          </div>
        );
      case 'createRoom':
        return <CreateRoomForm />;
      case 'homepage':
        return <HomePage />;
      case 'rooms':
        return <Rooms/>;
      case 'event':
        return <EventDetails />;
      case 'myprofile':
        return <ProfilePage/>;
      case 'reviewRooms':
        // Implement logic for the reviewRooms page
        return <EventDetails />;
        // break;
      case 'reviewEvents':
        // Implement logic for the reviewEvents page
        break;
      case 'users':
        // Implement logic for the users page
        break;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Stem-City CMS
          </Typography>
          <Button
            color="inherit"
            onClick={() => window.open('https://stemcity3d.com/', '_blank')}
            sx={{ marginLeft: '775px' }}
          >
            Go to Stem City Main
          </Button>
          <IconButton
            color="inherit"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            sx={{ marginLeft: 'auto' }}
          >
            <AccountCircleIcon />
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom', // Align the menu to the bottom of the icon
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handlePageChange('myprofile')}>My Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            key="homepage"
            disablePadding
            onClick={() => handlePageChange('homepage')}
          >
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home Page" />
            </ListItemButton>
          </ListItem>
          <ListItem
            key="createRoom"
            disablePadding
            onClick={() => handlePageChange('createRoom')}
          >
            <ListItemButton>
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Create a Room" />
            </ListItemButton>
          </ListItem>
          <ListItem
            key="rooms"
            disablePadding
            onClick={() => handlePageChange('rooms')} // Update the key to match the component name
          >
            <ListItemButton>
              <ListItemIcon>
                <RoomIcon />
              </ListItemIcon>
              <ListItemText primary="My Rooms" />
            </ListItemButton>
          </ListItem>
          <ListItem key="event" disablePadding onClick={() => handlePageChange('event')}>
            <ListItemButton>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="Event" />
            </ListItemButton>
          </ListItem>
          {/* Conditional rendering for additional list items based on user type and admin status */}
          {userType === 'ccg_admin' && isAdmin && (
            <>
              <ListItem
                key="reviewRooms"
                disablePadding
                onClick={() => handlePageChange('reviewRooms')}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {/* Icon for Review Rooms */}
                    <AddCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Review Rooms" />
                </ListItemButton>
              </ListItem>
              <ListItem
                key="reviewEvents"
                disablePadding
                onClick={() => handlePageChange('reviewEvents')}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {/* Icon for Review Events */}
                    <EventIcon />
                  </ListItemIcon>
                  <ListItemText primary="Review Events" />
                </ListItemButton>
              </ListItem>
              <ListItem
                key="users"
                disablePadding
                onClick={() => handlePageChange('users')}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {/* Icon for Users */}
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Users" />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {renderPage()}
      </Box>
    </Box>
  );
}
