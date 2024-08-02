import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Box, Typography, Avatar, Grid, CircularProgress, Card, CardContent, IconButton } from "@mui/material";
import Footer from "../../components/homeComponents/Footer";
import Navbar from "../../components/homeComponents/Navbar";
import architecture3 from "../../../public/pau_logo.png"; // Replace with your actual image paths
import imagetolife from "../../../public/pau_logo.png"; // Replace with your actual image paths
import architecture2 from "../../../public/pau_logo.png"; // Replace with your actual image paths
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

// Define the types for the club item
interface ClubItem {
  _id: string;
  nameOfClub: string;
  school: string;
  description: string;
  // Add more fields as necessary
}

const AUTH_HEADER = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWE0YTJkMGJjNGM4MjM5MjNkN2U5MCIsImlhdCI6MTcyMjQzNjE0MSwiZXhwIjoxNzIyNjA4OTQxfQ.I_K94SKf5404s6ysnQiDutXgz9Cc0DG4nLsnBsXzBpE`
  }
};

const ClubDetails: React.FC = () => {
  const { _id } = useParams<{ _id: string }>();
  const [club, setClub] = useState<ClubItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClubDetails = async () => {
      try {
        console.log(`Fetching details for club ID: ${_id}`);  // Log the ID
        const res = await axios.get<ClubItem>(`http://localhost:4001/api/v1/club/${_id}`, AUTH_HEADER);
        console.log("Response data:", res.data);  // Log the response data
        setClub(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching club details:", error);
        setError("Failed to load club details. Please try again later.");
        setLoading(false);
      }
    };
    fetchClubDetails();
  }, [_id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  if (!club) {
    return <Typography>No club details available.</Typography>;
  }

  return (
    <>

      <Container maxWidth="md" sx={{ mt: 5 }}>
        {/* club details */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>

          <img src="../../../public/assets/image.jpg" alt="Club Image" style={{ width: '100%', borderRadius: '8px' }} />

          <Typography variant="h3" component="h1" sx={{ mt: 2 }}>
            {club.nameOfClub}, {club.school}
          </Typography>

          <Typography variant="body1" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>

        </Box>

        {/* executives */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            Executives
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {["President", "Vice President", "Secretary", "Treasurer"].map((title, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ width: 80, height: 80, margin: '0 auto' }}>JD</Avatar>
                  <Typography variant="h6" component="h3">
                    John Doe
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        

        {/* more info */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, backgroundColor: 'background.paper' }}>

            <CardContent>
              {/* text 1 */}
              <Typography gutterBottom variant="h5" component="div">
                More Info
              </Typography>

              {/*text 2  */}
              <Typography variant="body2" color="text.secondary">
                Meeting Time: ...to be gotten from db
              </Typography>

              {/* social media icons */}
              <Typography variant="body2" color="text.secondary">
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
              </Typography>

            </CardContent>
          </Card>
        </Box>


      </Container>

    </>
  );
};

export default ClubDetails;
