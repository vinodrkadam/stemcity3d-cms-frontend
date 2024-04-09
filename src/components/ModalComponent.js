import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const ModalComponent = ({ images, open, onClose, onSelectThumbnail }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <h2 id="modal-modal-title">Select Thumbnaillll</h2>
        <div style={{ maxHeight: 300, overflowY: 'auto' }}>
          {images.map((image) => (
            <img
              key={image.id}
              src={image.url}
              alt={`Image ${image.id}`}
              onClick={() => {
                onSelectThumbnail(image.url);
                onClose();
              }}
              style={{ cursor: 'pointer', margin: '5px', width: '100px', height: '100px' }}
            />
          ))}
        </div>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
