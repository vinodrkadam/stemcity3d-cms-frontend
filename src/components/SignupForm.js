// SignupForm.js
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Link,
} from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './assets/logo.png';
import { BASE_URL } from './constants';

const SignupForm = ({ backgroundImageUrl, onLogin }) => {
  const [email, setEmail] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignup = async () => {
    try {
      // Make the API call
      const response = await fetch(`${BASE_URL}/account/contentcreator-register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      // Check if the response is not ok
      if (!response.ok) {
        // Extract the error message from the response
        const errorData = await response.json();
        const errorMessage = errorData.error;
  
        // Show a user-friendly alert for the specific error message
        if (errorMessage === "Email already exists") {
          alert('The email address you entered is already registered. Login into your account');
        } else {
          alert('An error occurred. Please try again later.');
        }
        
        return; // Exit the function early
      }
  
      // If the response is ok, show success dialog
      setOpenDialog(true);
    } catch (error) {
      // Handle any network or other errors
      // Show the error message in an alert
      alert(`An error occurred: ${error.message}`);
    }
  };
  
  
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={10} sm={8} md={6} lg={4}>
        <img src={logo} alt="Logo" style={{ width: '42%', marginBottom: 20 , paddingLeft: 125 }}/>
          <Typography variant="h5" align="center" gutterBottom style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
            Content Management System
          </Typography>
          <Paper
            elevation={3}
            style={{
              padding: 20,
              height: 400,
              backgroundColor: 'white',
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: 'cover',
            }}
          >
            <Typography variant="h5" align="center" gutterBottom>
              Sign Up
            </Typography>

            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              style={{ marginTop: 50 }}
              onChange={handleEmailChange}
            />

            <Button
              variant="contained"
              style={{ backgroundColor: 'black', color: 'white', marginTop: 75, height: 55 }}
              fullWidth
              onClick={handleSignup}
            >
              Sign Up
            </Button>

            <Typography variant="body2" style={{ marginTop: 10, textAlign: 'center' }}>
              Already have an account?
              {/* <Link to="/login" color="inherit">
                  Login
              </Link> */}
              <Button
                color="inherit"
                onClick={() => window.location.href = '/login'}
              
                >
                Login
              </Button>
            </Typography>
          </Paper>
        </Grid>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Check Email</DialogTitle>
          <DialogContent>
            <DialogContentText>
              We have sent a confirmation email to {email}. Please check your email to complete the
              signup process.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
  
  );
};

export default SignupForm;
