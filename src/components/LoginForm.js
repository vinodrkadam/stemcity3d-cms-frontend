import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, Link, Modal, Box } from '@mui/material';
import { BASE_URL } from './constants';
import { BrowserRouter as Router } from 'react-router-dom';
import Cookies from 'universal-cookie';
import logo from './assets/logo.png';

const cookies = new Cookies();
const LoginForm = ({ onLogin, backgroundImageUrl, onSignUp }) => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');


  const handleLogin = async () => {
    try {
      const response = await fetch(`${BASE_URL}/account/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to login. Please check your credentials and try again.'); // Handle error response
      }
  
      // Extract JWT token from response
      const responseData = await response.json();
      const { token, data: { user_type, is_admin } } = responseData;

      // Set token in cookies
      cookies.set('token', token, { path: '/', secure: false, sameSite: 'strict' });
      cookies.set('role', user_type, { path: '/', secure: false, sameSite: 'strict' });
      cookies.set('isAdmin', is_admin, { path: '/', secure: false, sameSite: 'strict' });
      // Store user role and admin status in local storage
      localStorage.setItem('role', user_type);
      localStorage.setItem('isAdmin', is_admin);
      // Redirect user to dashboard
      window.location.href = '/dashboard';
    } catch (error) { 
      console.error('Error during login:', error);
      // Display error message to the user
      setEmailError(error.message);
    }
  };
  
  const handleSignUp = () => {
    // Perform sign up logic or navigate to sign up page
    console.log('Redirecting to sign up page');
    onSignUp(); // Notify the parent component to handle sign up action
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEmail('');
    setPassword('');
    setEmailError('');
  };

  const handleSendResetLink = () => {
    if (!email) {
      setEmailError('Please enter email');
      return;
    }
    // Perform logic to send reset link to the entered email
    alert(`Reset link will be sent to ${email}, if it exists.`);
    handleCloseModal();
  };

  return(
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
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: 'cover',
            backgroundColor: 'white',
            position: 'relative', // Add position relative for absolute positioning of links
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal" // Use the shorthand notation for margin
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginTop: 30 }} // Additional marginTop for the password field
          />

          <Button
            variant="contained"
            style={{ backgroundColor: 'black', color: 'white', marginTop: 30 }}
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>

          <Typography variant="body2" style={{ marginTop: 15 }}>
            <Button
                color="inherit"
                onClick={handleOpenModal}
                >
                Forgot Password?
            </Button>
          </Typography>

          <Box mt={2} display="flex" justifyContent="space-between">
            <Typography variant="body2">
              Don't have an account?
              <Button
                color="inherit"
                onClick={() => window.location.href = '/signup'}
                >
                Register
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Grid>

      {/* Forgot Password Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'white',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Forgot Password
          </Typography>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
          />
          <Button
            variant="contained"
            style={{ backgroundColor: 'black', color: 'white', marginTop: 15 }}
            fullWidth
            onClick={handleSendResetLink}
          >
            Send Reset Link
          </Button>
        </Box>
      </Modal>
    </Grid>
  );
};

export default LoginForm;

