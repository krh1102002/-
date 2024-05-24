import React, { useState } from "react";
import { Box, Typography, IconButton, Drawer, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import aaiBabaImage from "../assets/mumpapa.jpg";
import kokanImage from "../assets/konkanmarathisahityparishd.jpg";

const PrernaComponent = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f7e7ce",
        minHeight: "100vh",
        p: { xs: 2, md: 4 },
        px: { xs: 2, md: 8 },
        py: { xs: 2, md: 6 },
        color: "black",
      }}
    >
      <Box sx={{ position: "absolute", top: 16, left: 16 }}>
        <IconButton onClick={() => navigate("/")}>
          <ArrowBackIcon sx={{ color: "black" }} />
        </IconButton>
      </Box>

      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon sx={{ color: "black" }} />
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
            <a
              href="/maza-parichay"
              className="block text-lg font-semibold text-white hover:text-gray-300"
            >
              माझा परिचय
            </a>
            <a
              href="/prastavna"
              className="block text-lg font-semibold text-white hover:text-gray-300"
            >
              प्रास्ताविक
            </a>
            <a
              href="/contact"
              className="block text-lg font-semibold text-white hover:text-gray-300"
            >
              संपर्क
            </a>
            <a
              href="/prerana"
              className="block text-lg font-semibold text-white hover:text-gray-300"
            >
              प्रेरणा
            </a>
          </div>
        </div>
      </Drawer>

      <Grid container spacing={4} alignItems="center" mt={2}>
        <Grid item xs={12} md={6} sx={{ px: { xs: 2, md: 0 } }}>
          <Box className="container" sx={{ position: "relative" }}>
            <img
              src={aaiBabaImage}
              alt="प्रेरणा"
              className="image"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "380px",
                transition: ".5s ease",
              }}
            />
            <Box
              className="middle"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0,
                backgroundColor: "#220a18",
                color: "white",
                fontSize: "16px",
                padding: "16px 32px",
                textAlign: "center",
                transition: ".5s ease",
                "&:hover": { opacity: 1, backgroundColor: "rgba(0,0,0,0.5)" },
              }}
            >
              माझे आई-बाबा
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ px: { xs: 2, md: 0 } }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#5f0707", textShadow: "2px 1px white" }}>
            माझे आई-बाबा
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.25rem" },
                pl: "7px",
              }}
            >
              <b style={{ fontWeight: "500", color: "#663333" }}>
                मी लिहिलेल्या बऱ्याच कवितांचे पहिले श्रोते हे दोघं आहेत. आणि त्यात काही चूक असेल तर सुधारणा सांगणारे माझे खरेखुरे प्रेरणा स्थान. मी काही लिहिलं किंवा काही सुचलं तर पहिले दाद देणारे हेच दोघं असतात .माझे विचार मांडताना मी या दोघांची साक्ष घेतली की मग सगळ्यांपुढे मत मांडायला भीती वाटत नाही.हे दोन श्रोते मला बरंच मार्गदर्शन देऊन जातात,म्हणून सगळ शक्य.
              </b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 4, md: 3 }} sx={{ px: { xs: 2, md: 0 } }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#5f0707", textShadow: "2px 1px white" }}>
            कोकण मराठी साहित्य परिषद
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              <b style={{ fontWeight: "500", color: "#663333" }}>
                मला लिखाणाची आवड होती पण कमी होती ती मार्गदर्शकांची,उन्हात झाड सापडवं तस आपलसं करणारं ,माझे विचार समजून घेणारं , वेळ पडल्यास चुका समजून सांगणार अस हक्काचं व्यासपीठ मिळालं ते म्हणजे कोकण मराठी साहित्य परिषद.या व्यासपीठावर मला आणण्या साठी माझ्या जिजूनी(आशिष पाटील) खूप प्रयत्न केले .त्याच बरोबर दिवकर मॅडम व सर,सिद्धेश दादा नेहमी प्रेरणा देतात . कोकण मराठी साहित्य परिषदेतील सर्वांचेच मी आभारी आहे.
              </b>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} order={{ xs: 3, md: 4 }} sx={{ px: { xs: 2, md: 0 } }}>
          <Box className="container" sx={{ position: "relative" }}>
            <img
              src={kokanImage}
              alt="प्रेरणा"
              className="image"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "380px",
                transition: ".5s ease",
              }}
            />
            <Box
              className="middle"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0,
                backgroundColor: "#220a18",
                color: "white",
                fontSize: "16px",
                textAlign: "center",
                transition: ".5s ease",
                "&:hover": { opacity: 1, backgroundColor: "rgba(0,0,0,0.5)" },
              }}
            >
              कोकण मराठी साहित्य परिषद
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PrernaComponent;
