import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Button
} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import useAuth from "../context/authContext";
import { dark, disabled, grey } from "../context/theme";
import dayjs from "dayjs";

export interface BlogItem {
  _id: string;
  title: string;
  author: string;
  content: number;
  date: string;
  image: string;
  read_count: number
}

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const navigate = useNavigate();

  const { token } = useAuth();

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const AUTH_HEADER = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        const res = await axios.get<BlogItem[]>(`${import.meta.env.VITE_BACKEND_HOST}/api/v1/blog`, AUTH_HEADER);
        setBlogs(res.data);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      }
    };

    getBlogs();
  }, [token]);


  //component={Link} to={`/blog/${item._id}`}
  return (
    <Grid container spacing={3} width={'100%'} zIndex={1} position={'relative'} overflow={'visible'}
      sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          top: { xs: '50%', md: '25%' },
          left: { xs: '-50vw', md: '-25%' },
          transform: 'translateY(-10%)  rotate(35deg)',
          zIndex: -1,
          border: '15px #18BC9C solid',
          width: { xs: '65vw' },
          aspectRatio: "3/5",
          maxWidth: "350px",
          borderRadius: 5,
          display: blogs.length > 0 ? "block" : "none"
        }
      }}
    >
      {blogs.length > 0 ? (
        blogs.map((item) => {
          return (
            (
              <Grid xs={12} sm={6} md={4} key={item._id}>

                <Card
                  sx={{
                    backgroundColor: grey,
                    fontFamily: "Poppins",
                    paddingX: { xs: 1.5, md: 2.5 },
                    paddingY: { xs: 1, md: 2 },
                    borderRadius: 3,
                    aspectRatio: "1/1.36",
                    display: 'flex',
                    flexDirection: "column",
                  }}
                  color={dark}>

                  <Typography gutterBottom variant="caption" mb={1} color={disabled}>
                    {item.title ?? 'No Blog Name'}
                  </Typography>

                  {item.image && (
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={{ borderRadius: 3, aspectRatio: "9/5" }}
                    />
                  )}
                  <CardContent sx={{ paddingX: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>

                    <Typography variant="body1" component="div" textTransform={'capitalize'} fontWeight={400}>
                      {item.title ?? 'No Blog Name'}
                    </Typography>

                    <Typography gutterBottom variant="body2" component="div" sx={{
                      display: '-webkit-box',
                      WebkitLineClamp: { xs: 1, sm: 3 },
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }} mt={1}>
                      {item.content ?? 'No Blog Content Available'}
                    </Typography>

                    <Stack sx={{ mt: 'auto', gap: 2 }}>

                      <Stack justifyContent={'space-between'} direction={'row'}>
                        <Typography variant="caption" color="text.secondary">
                          News Count: {item.read_count}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Date: {dayjs(item.date).format("DD MMM YYYY")}
                        </Typography>
                      </Stack>

                      <Button
                        variant="outlined"
                        sx={{ width: '100%', borderColor: 'secondary.main', textTransform: "none", paddingY: 1, fontWeight: 300 }}
                        onClick={() => navigate(`/blogs/${item._id}`, { replace: true })}
                      >
                        Read More
                      </Button>

                    </Stack>

                  </CardContent>


                </Card>
              </Grid>
            )
          )
        }
        )
      ) : (
        <Typography variant="h6" color={disabled}>
          No blogs available.
        </Typography>
      )}
    </Grid>
  );
}

export default Blog;
