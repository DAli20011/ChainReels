import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const Dashboard = () => {
  const handleLogout = () => {
    console.log('User logged out');
    // هنا يمكن إضافة منطق تسجيل الخروج لاحقًا
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #6200ea, #3f51b5)',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to the Dashboard!
      </Typography>
      <Typography variant="h6" gutterBottom>
        This is your main page where you can manage your account and content.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        sx={{ marginTop: '20px' }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Dashboard;
