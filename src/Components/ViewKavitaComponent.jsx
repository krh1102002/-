import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Box, Typography, IconButton, Drawer } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import poemData from './data'; 

const ViewKavitaComponent = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const poem = poemData.find(p => p.title === title);

  if (!poem) {
    return <Typography variant="h5">Poem not found</Typography>;
  }

  return (
    <Box
      sx={{
        backgroundImage: `url(${poem.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        p: 4,
        overflow: 'hidden', // Prevent overflow
        textAlign: 'center',
        position: 'relative', // For positioning author name
      }}
    >
      <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
        <IconButton onClick={() => navigate('/kavita-sangrah')}>
          <ArrowBackIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>

      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon sx={{ color: 'white' }} />
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

      <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: '1.7rem', sm: '2.3rem', md: '2.5rem' } }}>
        {poem.title}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: { xs: '1rem', sm: '1.18rem', md: '1.25rem' }, px: 2 }} dangerouslySetInnerHTML={{ __html: poem.poem }} />
      <Typography variant="h6" sx={{ position: 'absolute', bottom: 5, right: 16 }}>
        {poem.author}
      </Typography>
    </Box>
  );
};

export default ViewKavitaComponent;
