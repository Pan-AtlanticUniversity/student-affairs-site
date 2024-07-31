import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

// Define the types for the blog items
interface BlogItem {
  id: string;
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

function Blog() {
  // Call to the database
  const [blogs, setBlogs] = useState<BlogItem[]>([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get<BlogItem[]>("http://localhost:4001/api/v1/blog", AUTH_HEADER); // Fetches from db with token
        console.log("Response data:", res.data);
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    getBlogs();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <Box sx={{ textAlign: 'center', mt: 10 }}> 
        <Typography variant="h4" component="h1">
          Trending news <span style={{ color: "#ec407a" }}>🎉!</span>
        </Typography>
      </Box>

      <Box
        sx={{
          overflowX: 'auto',
          display: 'flex',
          whiteSpace: 'nowrap',
          mt: 3,
          pb: 3,
          '&::-webkit-scrollbar': {
            height: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '5px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
          },
        }}
      >
        {blogs.length > 0 ? (
          blogs.map((item) => (
            <Box key={item.id} sx={{ display: 'inline-block', minWidth: '300px', pr: 2 }}>
              <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, backgroundColor: 'background.paper' }}>
                {item.image && (
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    sx={{ height: 140 }}
                  />
                )}

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name || 'No Blog Name'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    News Count: {item.news}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Date: {item.date}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))
        ) : (
          <Typography variant="h6" sx={{ mt: 3 }}>
            No blogs available.
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default Blog;
