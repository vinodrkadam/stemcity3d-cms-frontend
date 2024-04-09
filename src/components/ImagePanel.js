import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { BASE_URL } from './constants';

const ImagePanel = ({ isOpen, onClose, onSelectThumbnail }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://20.51.247.117:8000/app/images/');
        const data = await response.json();
        setImages(data.map(item => ({
          title: item.title,
          description: item.description,
          file: item.file, 
          id: item.id,
        })));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  // const handleImageClick = (image) => {
  //   try {
  //     const blobUrl = image.file;
  //     localStorage.setItem('roomThumbnail', blobUrl);
  //     onSelectThumbnail(blobUrl);
  //     onClose();
  //   } catch (error) {
  //     console.error('Error handling image click:', error);
  //   }
  // };
  const handleImageClick = (image) => {
    // Handle the image click event
    onSelectThumbnail(image.file);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800, // Increase the width of the modal
          maxHeight: '80vh',
          overflowY: 'auto',
          bgcolor: 'white', // Change the background color
          boxShadow: 24,
          p: 4,
        }}
      >
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          sx={{ position: 'absolute', top: 0, right: 0 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h4" sx={{ textAlign: 'center', marginY: 2, fontWeight: 'bold', color: '#333' }}>
          Image Gallery
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {images.map((image) => (
            <img
              key={image.id}
              src={image.file}
              alt={`Image ${image.id}`}
              onClick={() => handleImageClick(image)}
              style={{ cursor: 'pointer', margin: '5px', width: '200px', height: '200px' }}
            />
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default ImagePanel;
