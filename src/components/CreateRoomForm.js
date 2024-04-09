import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import TemporaryDrawer from './tempdrawer';
import ImagePanel from './ImagePanel';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import  Cookies  from 'universal-cookie';
import { BASE_URL } from './constants';



const cookies = new Cookies();
const CreateRoomForm = () => {
  const [cities, setCities] = useState([]);
  const [formValues, setFormValues] = useState({
    city: '',
    roomName: '',
  });
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const fileInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showThumbnailError, setShowThumbnailError] = useState(false);
  const [showCityError, setShowCityError] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [roomDescription, setRoomDescription] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
 
  // useEffect(() => {
  //   // Check if user is logged in
  //   const token = cookies.get('token');
  //   if (token) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, []); // Add closing square bracket here
  
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/city/`);
        const data = await response.json();
        setCities(data.results);
        setFormValues((prevValues) => ({
          ...prevValues,
          city: data.results.length > 0 ? data.results[0].id : '',
        }));
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };
  
    fetchCities();
  }, []); // Add closing square bracket here
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleRoomDescriptionChange = (e) => {
    const { value } = e.target;
    setRoomDescription(value);
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const newImage = { file: URL.createObjectURL(file) };
    setSelectedThumbnail(newImage.file);
    fileInputRef.current.value = ''; // Clear the file input
  };

  // if (!isLoggedIn) {
  //   // Redirect user to login page if not logged in
  //   return redirect("/login");
  // }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
       if (!formValues.city) {
        setShowCityError(true);
        return;
        }
        if (!selectedThumbnail) {
          setShowThumbnailError(true);
          return;
        }
        // Proceed with form submission
        setShowCityError(false);
        setShowThumbnailError(false);
    try {
      const token = cookies.get('token');
      const role = cookies.get('role');
      const isAdmin = cookies.get('isAdmin');
      if (!token) {
        // Token not found, handle accordingly (e.g., redirect to login)
        console.error('Token not found in cookie');
        return;
      }
      if (role !== 'ccgadmin' && role !== 'content_creator' && isAdmin !== 'true') {
        setShowSnackbar(true);
        setSnackbarSeverity('error');
        setSnackbarMessage('You must be a content creator or ccgadmin to create a room.');
        return;
      }
      console.log("token",token);
      const formData = new FormData();
      formData.append('city_name', formValues.city);
      if (formValues.roomName) {
        formData.append('name', formValues.roomName);
      }

      if (roomDescription) {
        formData.append('description', roomDescription);
      }

      if (selectedThumbnail) {
        const response = await fetch(selectedThumbnail);
        console.log("res",response);
        const blob = await response.blob();
        console.log("ST",blob)
        const file = new File([blob], 'thumbnail.jpg', { type: 'image/jpeg' }); // Change 'thumbnail.jpg' and 'image/jpeg' based on your actual file name and type
        formData.append('room_thumbnail', file);
      }
    
      for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
      }
      console.log("FD",formData);
      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
      const response = await fetch(`${BASE_URL}/api/v1/rooms/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Send the token in the Authorization header
        },
        body: formData,
      });

      console.log('API response:', response);

      if (response.ok) {
        setShowSnackbar(true);
        setSnackbarSeverity('success');
        setSnackbarMessage('Room has been created and is in review. It will be published once it is approved.');
      } else {
        setShowSnackbar(true);
        setSnackbarSeverity('error');
        setSnackbarMessage('Error creating room. Please try again.');
      }
    } catch (error) {
      console.error('Error creating room:', error);
      setShowSnackbar(true);
      setSnackbarSeverity('error');
      setSnackbarMessage('An error occurred. Please try again.');
    }
  };

  const handleCityChange = (event) => {
    const { value } = event.target;
    const selectedCity = cities.find(city => city.name === value);
    setFormValues((prevValues) => ({
      ...prevValues,
      city: value,
    }));
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ maxWidth: 600, margin: 'auto', textAlign: 'left', padding: 3 , alignContent: 'Left',marginLeft:'10px' }}>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="city-label">Select City *</InputLabel>
          <Select
           labelId="city-label"
           id="city"
           value={formValues.city}
           onChange={handleCityChange}
           label="Select City *"
          >
           {cities.map((city) => (
               <MenuItem  value={city.name}>
                 {city.name}
               </MenuItem>
             ))}
         </Select>
            {showCityError && !formValues.city && (
              <Typography color="error">Please select a city</Typography>
            )}
        </FormControl>

        <TextField
          label="Room Name *"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          name="roomName"
          value={formValues.roomName}
          onChange={handleInputChange}
        />
        {formValues.roomName && (
          <Typography color="error">*</Typography>
        )}

        {/* <TextField
          label="Room Description(Optional)"
          multiline
          rows={3} // Adjust the number of rows as needed
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          name="roomDescription"
          value={roomDescription}
          onChange={handleRoomDescriptionChange}
        /> */}

        {selectedThumbnail && (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
            {/* <Typography sx={{ marginRight: 2 }}>Room Thumbnail:</Typography> */}
            <img
              src={selectedThumbnail}
              alt="Thumbnail"
              style={{ width: '150px', height: '150px' }}
            />
          </Box>
        )}

        {showThumbnailError && !selectedThumbnail && (
          <Typography color="error">Please select a room thumbnail</Typography>
        )}

        <Typography variant="subtitle1" sx={{ marginTop: 2 }}>Room Thumbnail* :</Typography>
        <TemporaryDrawer
          onSeeAllClick={() => setIsModalOpen(true)}
          onSelectThumbnail={(image) => setSelectedThumbnail(image)}
        />
        
        <Button variant="contained" type="submit" sx={{ marginTop: 2, backgroundColor: 'black', color: 'white' }}>
          Create Room
        </Button>

        <input
          type="file"
          accept=".jpeg, .jpg, .png, .gif"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <ImagePanel
           isOpen={isModalOpen}
           onClose={() => setIsModalOpen(false)}
           onSelectThumbnail={(image) => {
             setSelectedThumbnail(image);
           }}
         />
         <Snackbar
          open={showSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
          >
            {snackbarMessage}
          </MuiAlert>
        </Snackbar>
      </Box>
    </form>
  );
};

export default CreateRoomForm;
