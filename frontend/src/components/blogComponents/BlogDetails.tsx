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
interface BlogItem {
    _id: string;
    name: string;
    news: number;
    date: string;
    image: string;
  }

const AUTH_HEADER = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWE0YTJkMGJjNGM4MjM5MjNkN2U5MCIsImlhdCI6MTcyMjQzNjE0MSwiZXhwIjoxNzIyNjA4OTQxfQ.I_K94SKf5404s6ysnQiDutXgz9Cc0DG4nLsnBsXzBpE`
  }
};

const BlogDetails: React.FC = () => {
  const { _id } = useParams<{ _id: string }>();
  const [blog, setBlog] = useState<BlogItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        console.log(`Fetching details for blog ID: ${_id}`);  // Log the ID
        const res = await axios.get<BlogItem>(`http://localhost:4001/api/v1/blog/${_id}`, AUTH_HEADER);
        console.log("Response data:", res.data);  // Log the response data
        setBlog(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching club details:", error);
        setError("Failed to load club details. Please try again later.");
        setLoading(false);
      }
    };
    fetchBlogDetails();
  }, [_id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  if (!blog) {
    return <Typography>No blog details available.</Typography>;
  }

  return (
    <>

      <Container maxWidth="md" sx={{ mt: 5 }}>
        {/* blog details */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>

          <img src={blog.image} alt="blog Image" style={{ width: '100%', borderRadius: '8px' }} />

          <Typography variant="h3" component="h1" sx={{ mt: 2 }}>
            {blog.name}
          </Typography>

          <Typography variant="body1" sx={{ mt: 2 }}>
            {blog.date}
          </Typography>

        </Box>

       

        {/* more info
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, backgroundColor: 'background.paper' }}>

            <CardContent>
              text 1
              <Typography gutterBottom variant="h5" component="div">
                More Info
              </Typography>

              text 2 
              <Typography variant="body2" color="text.secondary">
                Meeting Time: ...to be gotten from db
              </Typography>

              social media icons
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
        </Box> */}


      </Container>

    </>
  );
};

export default BlogDetails;
