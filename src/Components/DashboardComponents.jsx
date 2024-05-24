import React, { useState } from 'react';
import { Drawer, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import backgroundImage from '../assets/wp3269231.webp';

const DashboardComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute top-4 right-4 md:hidden">
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon className="text-white" />
        </IconButton>
      </div>

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

      <div className="flex flex-col justify-center items-start p-8 text-white min-h-screen">
        <h1 className="text-5xl font-bold">माझे विचार</h1>
        <h3 className="mt-4 text-2xl">
          थोडे डोळ्याने टिपलेले...<br />
          थोडे अनुभवाने शेकलेले...<br />
          थोडे मनात रेंगाळलेले...<br />
          थोडे डोक्यात भिनलेले...<br />
          आणि...थोडे काळजाला भिडलेले...
        </h3>
        <button className="mt-8 px-4 py-2 bg-purple-600 text-white text-lg font-semibold rounded hover:bg-purple-700">
          <Link to="/kavita-sangrah" style={{ textDecoration: 'none', alignSelf: 'center' }}>कविता संग्रह</Link>
        </button>
      </div>

      <div className="absolute top-4 right-4 hidden md:block text-right space-y-2">
        <Link to="/maza-parichay" className="block text-2xl font-bold text-white hover:text-gray-300">माझा परिचय</Link>
        <Link to="/prastavna" className="block text-2xl font-bold text-white hover:text-gray-300">प्रास्ताविक</Link>
        <Link to="/contact" className="block text-2xl font-bold text-white hover:text-gray-300">संपर्क</Link>
        <Link to="/prerana" className="block text-2xl font-bold text-white hover:text-gray-300">प्रेरणा</Link>
      </div>
    </div>
  );
};

export default DashboardComponent;
