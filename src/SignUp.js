import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!username || !name || !email || !password || !confirmPassword) {
      alert('All fields are required!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Sign Up Data:', { username, name, email, password });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #6200ea, #3f51b5)',
        margin: 0,
        padding: 0,
        border: 'none',
        outline: 'none',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: '30px',
          borderRadius: '10px',
          width: '400px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: '#6200ea' }}
        >
          Create Account
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: '20px' }}
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
        <Typography
          variant="body2"
          sx={{ marginTop: '15px', color: 'gray' }}
        >
          Already have an account? <Link to="/">Login</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUp;
