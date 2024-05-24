import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, Box, IconButton, Drawer } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, Link } from 'react-router-dom';
import poemData from './data';

const KavitaComponent = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCardClick = (title) => {
    navigate(`/kavita-sangrah/${title}`);
  };

  return (
    <Box sx={{ padding: '20px', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <IconButton onClick={() => navigate('/')}>
          <ArrowBackIcon sx={{ color: '#333' }} />
        </IconButton>
        <Typography 
          variant="h3" 
          className="text-center" 
          sx={{ 
            background: 'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bolder', 
            fontSize: '39px',
            textShadow: '3px 3px 9px #888'
          }}
        >
          कविता संग्रह
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon sx={{ color: '#333' }} />
        </IconButton>
      </Box>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle} PaperProps={{ style: { backgroundColor: 'black' } }}>
        <div className="p-4 w-64 text-right text-white h-full">
          <IconButton onClick={handleDrawerToggle} className="mb-4">
            <CloseIcon className="text-white" />
          </IconButton>
          <div className="mt-4 space-y-4">
            <Link to="/maza-parichay" className="block text-lg font-semibold text-white hover:text-gray-300">माझा परिचय</Link>
            <Link to="/prastavna" className="block text-lg font-semibold text-white hover:text-gray-300">प्रास्ताविक</Link>
            <Link to="/contact" className="block text-lg font-semibold text-white hover:text-gray-300">संपर्क</Link>
            <Link to="/prerana" className="block text-lg font-semibold text-white hover:text-gray-300">प्रेरणा</Link>
          </div>
        </div>
      </Drawer>

      <Grid container spacing={3} justifyContent="center">
        {poemData.map(poem => (
          <Grid item xs={12} sm={6} md={4} key={poem.id}>
            <Card sx={{ boxShadow: '10px 7px 32px -7px', height: '100%' }}>
              <CardActionArea sx={{ height: '100%' }} onClick={() => handleCardClick(poem.title)}>
                <CardMedia
                  component="img"
                  alt={poem.title}
                  image={poem.image}
                  sx={{ 
                    height: '250px', 
                    objectFit: 'cover', 
                    borderBottom: '1px solid #e0e0e0'
                  }}
                />
                <CardContent sx={{ backgroundColor: '#ffffff', padding: '16px' }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="div" 
                    sx={{ 
                      color: '#000', 
                      fontSize: '22px', 
                      textAlign: 'center',
                      fontWeight: 'bolder'
                    }}
                  >
                    {poem.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KavitaComponent;
