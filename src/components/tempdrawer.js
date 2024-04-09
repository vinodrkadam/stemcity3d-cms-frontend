// import React, { useEffect, useRef, useState } from 'react';
// import Drawer from '@mui/material/Drawer';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';

// const TemporaryDrawer = ({ onSeeAllClick, onSelectThumbnail }) => {
//   const [images, setImages] = useState([]);
//   const fileInputRef = useRef(null);

//   useEffect(() => {
//     // Fetch images from the API
//     const fetchImages = async () => {
//       try {
//         const response = await fetch('http://20.51.247.117:8000/app/images/');
//         const data = await response.json();

//         // Sort the images by some criteria (e.g., id) to get the top 5
//         const sortedImages = data
//           .sort((a, b) => b.id - a.id)
//           .slice(0, 4);

//         // Dynamically set the images using the API response
//         setImages(sortedImages.map(item => ({
//           file: item.file,
//           id: item.id,
//         })));
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, []);

//   const anchor = 'right';

//   const handleUploadClick = () => {
//     // Trigger the file input click event
//     fileInputRef.current.click();
//   };

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];
  
//     // Create a FormData object and append the file
//     const formData = new FormData();
//     formData.append('file', file);
  
//     // Add the new image to the local images state
//     const newImage = { file: URL.createObjectURL(file), id: Date.now() }; // Use a unique identifier for the ID
//     setImages((prevImages) => [...prevImages, newImage]);
  
//     // Perform any additional logic as needed
  
//     // Display the new image
//     onSelectThumbnail(newImage.file);
  
//     // Send the image via POST request to the API
//     try {
//       // Send the image to the API
//       const response = await fetch('http://20.51.247.117:8000/app/images/', {
//         method: 'POST',
//         body: formData,
//       });
  
//       if (!response.ok) {
//         console.error('Error uploading image:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };
  


//   const handleImageClick = (image) => {
//     // Handle the image click event
//     onSelectThumbnail(image.file);
//   };

//   return (
//     <Drawer anchor="right" open={true} variant="permanent" sx={{ width: '200%', flexShrink: 0, backgroundColor: '#f5f5f5' }}>
//       <Box sx={{ width: '100%', textAlign: 'center', paddingTop: '60px', borderBottom: '1px solid #ccc' }}>
//         <h2>Image Drawer</h2>
//       </Box>
//       <List sx={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: '8px' }}>
//         {images.map((image, index) => (
//           <ListItem key={index} disablePadding sx={{ width: '100px', margin: '8px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', overflow: 'hidden' }}>
//             <ListItemButton onClick={() => handleImageClick(image)}>
//               <img
//                 src={image.file}
//                 alt={`Image ${index + 1}`}
//                 style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px', maxWidth: '100%', maxHeight: '100%' }}
//               />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Box
//         sx={{
//           marginTop: 'auto',
//           textAlign: 'center',
//           borderTop: '1px solid #ccc',
//           padding: '16px',
//           display: 'flex',
//           justifyContent: 'center',
//         }}
//       >
//         <Button
//           sx={{
//             backgroundColor: 'black',
//             color: 'white',
//             '&:hover': { backgroundColor: '#333' },
//             marginRight: '10px',
//             padding: '12px 20px',
//             borderRadius: '6px',
//             boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
//           }}
//           onClick={onSeeAllClick}
//         >
//           See All
//         </Button>
//         <Button
//           sx={{
//             backgroundColor: 'black',
//             color: 'white',
//             '&:hover': { backgroundColor: '#333' },
//             marginLeft: '10px',
//             padding: '12px 20px',
//             borderRadius: '6px',
//             boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
//           }}
//           onClick={handleUploadClick}
//         >
//           Upload
//         </Button>
//         <input type="file" accept=".jpeg, .jpg, .png, .gif" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
//       </Box>

//     </Drawer>
//   );
// };

// export default TemporaryDrawer;

import React, { useEffect, useRef, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Cookies from 'js-cookie';

const TemporaryDrawer = ({ onSeeAllClick, onSelectThumbnail }) => {
  const [images, setImages] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: 'error',
    message: '',
  });
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://20.51.247.117:8000/app/images/');
        const data = await response.json();

        const sortedImages = data
          .sort((a, b) => b.id - a.id)
          .slice(0, 4);

        setImages(sortedImages.map(item => ({
          file: item.file,
          id: item.id,
        })));
      } catch (error) {
        console.error('Error fetching images:', error);
        setSnackbar({
          open: true,
          severity: 'error',
          message: 'Failed to fetch images. Please try again later.',
        });
      }
    };

    fetchImages();
  }, []);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const role = Cookies.get('role');
    const isAdmin = Cookies.get('isAdmin');

    if (role === 'ccgadmin' || role === 'content_creator' || isAdmin === 'true') {
      const newImage = { file: URL.createObjectURL(file), id: Date.now() };
      setImages((prevImages) => [...prevImages, newImage]);

      onSelectThumbnail(newImage.file);

      try {
        const response = await fetch('http://20.51.247.117:8000/app/images/', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          console.error('Error uploading image:', response.statusText);
          setSnackbar({
            open: true,
            severity: 'error',
            message: 'Failed to upload image. Please try again later.',
          });
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        setSnackbar({
          open: true,
          severity: 'error',
          message: 'Failed to upload image. Please try again later.',
        });
      }
    } else {
      setSnackbar({
        open: true,
        severity: 'error',
        message: 'You must be a content creator or ccgadmin to upload images.',
      });
    }
  };

  const handleImageClick = (image) => {
    onSelectThumbnail(image.file);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Drawer anchor="right" open={true} variant="permanent" sx={{ width: '200%', flexShrink: 0 }}>
      <Box sx={{ width: '100%', textAlign: 'center', paddingTop: '60px', borderBottom: '1px solid #ccc' }}>
        <h2>Image Drawer</h2>
      </Box>
      <List sx={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: '8px' }}>
        {images.map((image, index) => (
          <ListItem key={index} disablePadding sx={{ width: '100px', margin: '8px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', overflow: 'hidden' }}>
            <ListItemButton onClick={() => handleImageClick(image)}>
              <img
                src={image.file}
                alt={`Image ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px', maxWidth: '100%', maxHeight: '100%' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          marginTop: 'auto',
          textAlign: 'center',
          borderTop: '1px solid #ccc',
          padding: '16px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
       <Button
          sx={{
            backgroundColor: 'black',
            color: 'white',
            '&:hover': { backgroundColor: '#333' },
            marginRight: '10px',
            padding: '12px 20px',
            borderRadius: '6px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          }}
          onClick={onSeeAllClick}
        >
          See All
        </Button>
        <Button
          sx={{
            backgroundColor: 'black',
            color: 'white',
            '&:hover': { backgroundColor: '#333' },
            marginLeft: '10px',
            padding: '12px 20px',
            borderRadius: '6px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          }}
          onClick={handleUploadClick}
        >
          Upload
        </Button>
        <input type="file" accept=".jpeg, .jpg, .png, .gif" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
      </Box>
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
    </Drawer>
  );
};

export default TemporaryDrawer;
