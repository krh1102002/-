import React, { useState } from 'react';
import { Box, Typography, IconButton, Drawer } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import mazaParichayImage from '../assets/ink-pen-writing_wide-d542d29357c42b88f054af92dd4d6f292a697780-s1200.jpg';

const MazaParichayComponent = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${mazaParichayImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        p: 4,
        color: 'white',
      }}
    >
      <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
        <IconButton onClick={() => navigate('/')}>
          <ArrowBackIcon sx={{ color: '#000' }} />
        </IconButton>
      </Box>
      
      <Box sx={{ maxWidth: '600px', ml: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: "#5f0707",
            textShadow: "2px 1px white", }}>
          माझा परिचय
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body1" sx={{ fontSize: '1.25rem', color:"#663333" }}>
            मन सत्ततल्यार वेग-वेगळे विचार ये जा करत असतात. आणि असेच बरेच विचार करणारी मी. माझ्या मनात एकाच वेळी न्न्नविचारांचा तास सुरु असतो आणि माण मध्ये सुट्टी मिळाली की मी ते कागदावर रेखाटत असते, कधी चुकून असतील तर कधी जिंकत असतील पण मी मात्र माझे पण चे जागा समोर ठेवत असते... इथला सत्तती मध्ये लागलीले कविता हे जोपासत आहे... थोडी कळकळ जाणते आणि जगात आहे...
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bolder", alignSelf: 'flex-end',color: "#5f0707" }}>
            - ऋद्धी संगीता संदीप भगत
          </Typography>
        </Box>
      </Box>
      
      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon sx={{ color: '#000' }} />
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
    </Box>
  );
}

export default MazaParichayComponent;
