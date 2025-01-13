import React from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
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
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: '20px' }}
        >
          Login
        </Button>
        <Typography
          variant="body2"
          sx={{ marginTop: '15px', color: 'gray' }}
        >
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
