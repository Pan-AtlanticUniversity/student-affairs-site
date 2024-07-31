import React from "react";
import { Container, Box, Typography, TextField, Button, InputAdornment } from "@mui/material";
import { MailOutline } from "@mui/icons-material";
import Image from "../../../public/pau_logo.png";

function Landing() {
  return (
    <Container maxWidth="xl" sx={{ my: 10 }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center" }}>
        <Box sx={{ flex: 1, order: { xs: 2, md: 1 }, mt: { xs: 12, md: 36 }, px: { xs: 2, md: 4 } }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
            About PAU Student Affairs!{" "}
            <span style={{ color: "#ec407a" }}>we groom youngins into proffesionals</span>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, et totam. Tempora amet atque expedita, quae corrupti totam sed pariatur corporis at veniam est voluptas animi!
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Email"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutline />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="secondary">
            Get Started
          </Button>
        </Box>
        <Box sx={{ flex: 1, order: { xs: 1, md: 2 }, mt: 20, textAlign: 'center' }}>
          <img src={Image} alt="and image ought to show lol" style={{ maxWidth: "100%", height: "auto" }} />
        </Box>
      </Box>
      <Box>
    
      </Box>
    </Container>

  );
}

export default Landing;
