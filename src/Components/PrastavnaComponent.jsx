import React, { useState } from "react";
import { Box, Typography, IconButton, Drawer } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import prastavnaImage from "../assets/ink-pen-writing_wide-d542d29357c42b88f054af92dd4d6f292a697780-s1200.jpg";

const PrastavnaComponent = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${prastavnaImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        p: 4,
        color: "white",
      }}
    >
      <Box sx={{ position: "absolute", top: 16, left: 16 }}>
        <IconButton onClick={() => navigate("/")}>
          <ArrowBackIcon sx={{ color: "#000" }} />
        </IconButton>
      </Box>

      <Box sx={{ maxWidth: "600px", ml: 2 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#5f0707",
            textShadow: "2px 1px white",
          }}
        >
          प्रस्तावना
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body1" sx={{ fontSize: "1.25rem", color:"#663333" }}>
            नमस्कार, असं म्हणतात कोणतीही गोष्ट करण्याआधी माणसाने विचार केला पाहिजे. अशीच विचारांची शाळा माझ्या मनात सतत भरत असते. आणि त्या माझ्या शाळेत माझे आई-बाबा नेहमी सोबत असतात म्हणून सगळं शक्य. अशीच विचारांची पहिली शाळा माझ्या मनाच्या अंगणात भरली ती ७वीला. माझी पहिली चारोळी ते आता पर्यंतचा प्रवास आणि हा प्रवास न थांबणारा आहे. माझे गुरूजन व मित्र-मंडळींनी माझ्या लेखनाचे वेळोवेळी कौतूक करून माझे मनोबल वाढवले आहे. माझ्या विचारांचा हाच प्रवास करण्यासाठी तुमच्या सर्वांच्या आर्शीवादाची गरज आहे.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.25rem", color:"#663333", mt: 2 }}>
            आपली विश्वासू,
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.25rem", color:"#663333", fontWeight: "bold", alignSelf: 'flex-end' }}>
            - ऋद्धी संगीता संदीप भगत
          </Typography>
        </Box>
      </Box>

      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon sx={{ color: "#000" }} />
        </IconButton>
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ style: { backgroundColor: "black" } }}
      >
        <div className="p-4 w-64 text-right text-white h-full">
          <IconButton onClick={handleDrawerToggle} className="mb-4">
            <CloseIcon className="text-white" />
          </IconButton>
          <div className="mt-4 space-y-4">
            <Link
              to="/maza-parichay"
              className="block text-lg font-semibold text-white hover:text-gray-300"
            >
              माझा परिचय
            </Link>
            <Link
              to="/prastavna"
              className="block text-lg font-semibold text-white hover:text-gray-300"
            >
              प्रास्ताविक
            </Link>
            <Link
              to="/contact"
              className="block text-lg font-semibold text-white hover:text-gray-300"
            >
              संपर्क
            </Link>
            <Link
              to="/prerana"
              className="block text-lg font-semibold text-white hover:text-gray-300"
            >
              प्रेरणा
            </Link>
          </div>
        </div>
      </Drawer>
    </Box>
  );
};

export default PrastavnaComponent;
