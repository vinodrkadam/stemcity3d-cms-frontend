// import React, { useState } from 'react';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import ReviewRooms from './ReviewRooms';
// import ReviewEvents from './ReviewEvents';
// import ReviewUsers from './ReviewUsers';

// const HomePage = () => {
//   const [selectedPage, setSelectedPage] = useState(null);
//   const [showComp, setShowComp] = useState(false);
//   const handlePageChange = (pageName) => {
//     setSelectedPage(pageName);
//   };

//   const renderPage = () => {
//     switch (selectedPage) {
//       case 'reviewRooms':
//         return <ReviewRooms />;
//       case 'reviewEvents':
//         return <ReviewEvents />;
//       case 'reviewUsers':
//         return <ReviewUsers />;
//       default:
//         return (
//           <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
//             <Typography variant="h4" gutterBottom align="center">
//               Welcome to Stem-City Dashboard Home
//             </Typography>
//             <Typography variant="body1" paragraph align="center">
             
//             </Typography>
//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//               <Button
//                 variant="contained"
//                 color="inherit"
//                 style={{ margin: '10px' }}
//                 onClick={() => handlePageChange('reviewRooms')}
//               >
//                 Review Rooms
//               </Button>
//               <Button
//                 variant="contained"
//                 color="inherit"
//                 style={{ margin: '10px' }}
//                 onClick={() => handlePageChange('reviewEvents')}
//               >
//                 Review Events
//               </Button>
//               <Button
//                 variant="contained"
//                 color="inherit"
//                 style={{ margin: '10px' }}
//                 onClick={() => handlePageChange('reviewUsers')}
//               >
//                 Review Users
//               </Button>
//             </div>
//           </div>
//         );
//     }
//   };

//   return renderPage();
// };

// export default HomePage;

// import React, { useState } from 'react';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import ReviewRooms from './ReviewRooms';
// import ReviewEvents from './ReviewEvents';
// import ReviewUsers from './ReviewUsers';

// const HomePage = () => {
//   const [selectedPage, setSelectedPage] = useState(null);
//   const [showComp, setShowComp] = useState(false);

//   const handlePageChange = (pageName) => {
//     setSelectedPage(pageName);
//     setShowComp(true);
//   };

//   const handleClose = () => {
//     setShowComp(false);
//   };

//   const renderPage = () => {
//     switch (selectedPage) {
//       case 'reviewRooms':
//         return <ReviewRooms onClose={handleClose} />;
//       case 'reviewEvents':
//         return <ReviewEvents onClose={handleClose} />;
//       case 'reviewUsers':
//         return <ReviewUsers onClose={handleClose} />;
//       default:
//         return (
//           <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
//             <Typography variant="h4" gutterBottom align="center">
//               Welcome to Stem-City Dashboard Home
//             </Typography>
//             <Typography variant="body1" paragraph align="center">
             
//             </Typography>
//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//               <Button
//                 variant="contained"
//                 color="inherit"
//                 style={{ margin: '10px' }}
//                 onClick={() => handlePageChange('reviewRooms')}
//               >
//                 Review Rooms
//               </Button>
//               <Button
//                 variant="contained"
//                 color="inherit"
//                 style={{ margin: '10px' }}
//                 onClick={() => handlePageChange('reviewEvents')}
//               >
//                 Review Events
//               </Button>
//               <Button
//                 variant="contained"
//                 color="inherit"
//                 style={{ margin: '10px' }}
//                 onClick={() => handlePageChange('reviewUsers')}
//               >
//                 Review Users
//               </Button>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div>
//       {showComp ? (
//         renderPage()
//       ) : (
//         <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
//           <Typography variant="h4" gutterBottom align="center">
//             Welcome to Stem-City Dashboard Home
//           </Typography>
//           <Typography variant="body1" paragraph align="center">
           
//           </Typography>
//           <div style={{ display: 'flex', justifyContent: 'center' }}>
//             <Button
//               variant="contained"
//               color="inherit"
//               style={{ margin: '10px' }}
//               onClick={() => handlePageChange('reviewRooms')}
//             >
//               Review Rooms
//             </Button>
//             <Button
//               variant="contained"
//               color="inherit"
//               style={{ margin: '10px' }}
//               onClick={() => handlePageChange('reviewEvents')}
//             >
//               Review Events
//             </Button>
//             <Button
//               variant="contained"
//               color="inherit"
//               style={{ margin: '10px' }}
//               onClick={() => handlePageChange('reviewUsers')}
//             >
//               Review Users
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ReviewRooms from './ReviewRooms';
import ReviewEvents from './ReviewEvents';
import ReviewUsers from './ReviewUsers';
import Cookies from 'js-cookie';
import { BASE_URL } from './constants';

const HomePage = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const [showComp, setShowComp] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = Cookies.get('token');
        const response = await fetch(`${BASE_URL}/api/v1/user-profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user role');
        }
        const roleData = await response.json();
        const { results } = roleData; 
        console.log("data",roleData);
        if (results && results.length > 0) {
          const userData = results[0]; // Access the first object in the results array
          const { user_type, is_admin } = userData; // Destructure user_type and is_admin
        
          // Now you can use user_type and is_admin as needed
          console.log("User type:", user_type);
          console.log("Is admin:", is_admin);
          setUserRole(user_type);
          setIsAdmin(is_admin);
        } else {
          console.error("No user data found in roleData");
        }
        // setUserRole(user_type);
        // setIsAdmin(is_admin);
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };

    fetchUserRole();
  }, []);

  const handlePageChange = (pageName) => {
    setSelectedPage(pageName);
    setShowComp(true);
  };

  const handleClose = () => {
    setShowComp(false);
  };

  const renderPage = () => {
    switch (selectedPage) {
      case 'reviewRooms':
        return <ReviewRooms onClose={handleClose} />;
      case 'reviewEvents':
        return <ReviewEvents onClose={handleClose} />;
      case 'reviewUsers':
        return <ReviewUsers onClose={handleClose} />;
      default:
        return (
          <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <Typography variant="h4" gutterBottom align="center">
              Dashboard 
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {isAdmin || userRole === 'ccgadmin' ? (
                <>
                  <Button
                    variant="contained"
                    color="inherit"
                    style={{ margin: '10px' }}
                    onClick={() => handlePageChange('reviewRooms')}
                  >
                    Review Rooms
                  </Button>
                  <Button
                    variant="contained"
                    color="inherit"
                    style={{ margin: '10px' }}
                    onClick={() => handlePageChange('reviewEvents')}
                  >
                    Review Events
                  </Button>
                  <Button
                    variant="contained"
                    color="inherit"
                    style={{ margin: '10px' }}
                    onClick={() => handlePageChange('reviewUsers')}
                  >
                    Review Users
                  </Button>
                </>
              ) : null}
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      {showComp ? (
        renderPage()
      ) : (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
          <Typography variant="h4" gutterBottom align="center">
            Welcome to Stem-City Dashboard Home
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {isAdmin || userRole === 'ccgadmin' ? (
              <>
                <Button
                  variant="contained"
                  color="inherit"
                  style={{ margin: '10px' }}
                  onClick={() => handlePageChange('reviewRooms')}
                >
                  Review Rooms
                </Button>
                <Button
                  variant="contained"
                  color="inherit"
                  style={{ margin: '10px' }}
                  onClick={() => handlePageChange('reviewEvents')}
                >
                  Review Events
                </Button>
                <Button
                  variant="contained"
                  color="inherit"
                  style={{ margin: '10px' }}
                  onClick={() => handlePageChange('reviewUsers')}
                >
                  Review Users
                </Button>
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
