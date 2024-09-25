import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
import { disabled } from "../../context/theme";
import UnderlinedText from "../typography";  // Assuming you have an UnderlinedText component like in clubs
import GridCard from "../gridcard";  // Assuming GridCard is reusable for blogs

export interface BlogItem {
  _id: string;
  title: string;
  author: string;
  content: string;
  date: string;
  image: string;
  read_count: number;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get<BlogItem[]>(`${import.meta.env.VITE_BACKEND_HOST}/api/v1/blog`);
        setBlogs(res.data);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      }
    };

    getBlogs();
  }, []);

  return (
    <Box sx={{ padding: '20px' }} marginTop={'-20px'}>
      <UnderlinedText text="Latest Blogs" />

      {blogs.length > 0 ? (
        <Grid container spacing={4}>
          {blogs.map((item) => (
            <GridCard
              key={item._id} // Ensuring unique key
              title={item.title ?? 'No Blog Title'}
              imageUrl={item.image ?? "https://via.placeholder.com/300x200"}
              onClick={() => navigate(`/blogs/${item._id}`, { state: { blog: item } })}
              content={item.content ?? 'No Blog Content'}
              date={item.date}
              extraInfo={`News Count: ${item.read_count}`} // Add extra info like read count
            />
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" color={disabled}>
          No blogs available.
        </Typography>
      )}
    </Box>
  );
};

export default Blog;
