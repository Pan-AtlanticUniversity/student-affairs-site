import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia
} from "@mui/material";

// Define the types for the blog items
interface BlogItem {
  _id: string;
  title: string;
  content: number;
  date: string;
  image: string;
  read_count: number
}

const AUTH_HEADER = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzI2ODQ4ZTM1MjgwZmFhNDI1OTgxNCIsImlhdCI6MTcyNDI2NTgwNCwiZXhwIjoxNzI0NDM4NjA0fQ.b5RBuJQlpV-ApopuuoUovBipbFA0sHHjGo0CNTLWI8o`
  }
};

const Blog = () => {
  // Call to the database
  const [blogs, setBlogs] = useState<BlogItem[]>([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get<BlogItem[]>("http://localhost:4001/api/v1/blog"); // Fetches from db with token
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
          Trending <span style={{ color: "#ec407a" }}>News!!!!</span>
        </Typography>
        {/* <Typography variant="body1" sx={{ mt: 3 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, assumenda? Repellendus, iste corrupti? Tempore laudantium repellendus accusamus accusantium sed architecto odio, nisi expedita quas quidem nesciunt debitis dolore non aspernatur praesentium assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam consequatur!
        </Typography> */}
        {/* <Link to="/">
          <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
            Back
          </Button>
        </Link> */}
      </Box>

      <Grid container spacing={4} sx={{ mt: 3 }}>
        {blogs.length > 0 ? (
          blogs.map((item) => {
            console.log(item)
            return (
              (
                <Grid item xs={12} md={3} key={item._id}>
                  <Card sx={{
                    height: '100%', transition:
                      'transform 0.2s',
                    '&:hover': { transform: 'scale(1.05)' },
                    backgroundColor: 'background.paper'
                  }}
                    component={Link} to={`/blog/${item._id}`}>


                    {item.image && (
                      <CardMedia
                        component="img"
                        image={item.image}
                        alt={item.title}
                        sx={{ height: 140 }}
                      />
                    )}


                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title ?? 'No Blog Name'}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        News Count: {item.read_count}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Date: {item.date}
                      </Typography>
                    </CardContent>


                  </Card>
                </Grid>
              )
            )
          }
          )
        ) : (
          <Typography variant="h6" sx={{ mt: 3 }}>
            No blogs available.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default Blog;
