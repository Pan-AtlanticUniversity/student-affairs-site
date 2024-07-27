import React from "react";
import { Box, Link, IconButton, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <Box component="footer" sx={{ p: 4, bgcolor: "blue", color: "text.primary", textAlign: "center", borderTop: 1, borderColor: "divider" }}>
      <Box sx={{ mb: 2 }}>
        <nav>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>About us</Link>
            <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>Contact</Link>
            <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>Jobs</Link>
            <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>Press kit</Link>
          </Box>
        </nav>
      </Box>
      <Box sx={{ mb: 2 }}>
        <nav>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <IconButton href="#" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <YouTubeIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <FacebookIcon />
            </IconButton>
          </Box>
        </nav>
      </Box>
      <Box>
        <Typography variant="body2">
          Copyright © 2024 - All rights reserved Chima & Miracle
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
