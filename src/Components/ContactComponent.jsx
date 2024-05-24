import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Button, Typography, Grid, IconButton, Drawer } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import emailjs from 'emailjs-com';
import backgroundImage from '../assets/wp3269231.webp'; // replace with your actual image path
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactComponent = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const onSubmit = (data) => {
    emailjs.send(
      'service_hu8bfb7',
      'template_u2q7ejq', 
      data,
      'eDz6LFipeL52zNgSJ' 
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success('Message sent successfully!', { position: toast.POSITION.TOP_CENTER });
      reset(); 
    }).catch((err) => {
      console.error('FAILED...', err);
      toast.error('Failed to send message. Please try again.', { position: toast.POSITION.TOP_CENTER });
    });
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
        color: 'white',
      }}
    >
      <ToastContainer />
      <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
        <IconButton onClick={() => navigate('/')}>
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

      <Grid container spacing={4} sx={{ maxWidth: '800px', backgroundColor: 'rgba(0, 0, 0, 0.7)', p: 4, borderRadius: 2, mt: { xs: 2, md: 0 } }}>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, fontSize: { xs: '1.5rem', md: '2.5rem' } }}>संपर्क</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <LocationOnIcon sx={{ mr: 2, fontSize: { xs: '1.5rem', md: '2rem' } }} />
            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
              <b>ठिकाण</b><br />
              मुरुड, रायगड, महाराष्ट्र, भारत.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <PhoneIcon sx={{ mr: 2, fontSize: { xs: '1.5rem', md: '2rem' } }} />
            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
              <b>मोबाइल नंबर</b><br />
              +91 9604983716
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <EmailIcon sx={{ mr: 2, fontSize: { xs: '1.5rem', md: '2rem' } }} />
            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
              <b>ई-मेल आयडी</b><br />
              ruddhibhagat2402@gmail.com
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="नाव"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('user_name', { required: true })}
              name="user_name"
              error={!!errors.user_name}
              helperText={errors.user_name && 'हे फील्ड आवश्यक आहे'}
              InputProps={{
                style: {
                  backgroundColor: 'white',
                  color: 'black',
                },
              }}
              sx={{ mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}
            />
            <TextField
              label="ई-मेल"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('user_email', { required: true })}
              name="user_email"
              error={!!errors.user_email}
              helperText={errors.user_email && 'हे फील्ड आवश्यक आहे'}
              InputProps={{
                style: {
                  backgroundColor: 'white',
                  color: 'black',
                },
              }}
              sx={{ mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}
            />
            <TextField
              label="लिहा"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              {...register('message', { required: true })}
              name="message"
              error={!!errors.message}
              helperText={errors.message && 'हे फील्ड आवश्यक आहे'}
              InputProps={{
                style: {
                  backgroundColor: 'white',
                  color: 'black',
                },
              }}
              sx={{ mb: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
              संदेश पाठवा
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactComponent;
