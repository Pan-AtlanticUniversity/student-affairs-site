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
import { dark, disabled, grey } from "../context/theme";
import dayjs from "dayjs";

export interface BlogItem {
  _id?: string;
  name?: string;
  author?: string;
  content?: string;
  date?: string;
  image?: string;
  read_count?: number
}

interface BlogProp {
  mode?: 'admin' | 'student';
  searchQuery?: string;
  openEditMenu?: (blogItem: BlogItem) => void;
}

const Blog: React.FC<BlogProp> = ({ mode, searchQuery, openEditMenu }) => {
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

  const filteredBlogs = blogs.filter((blog) =>
    blog.name?.toLowerCase().includes(searchQuery?.toLowerCase() ?? "")
  );
  //component={Link} to={`/blog/${item._id}`}
  return (
    <Grid container spacing={3} width={'100%'} zIndex={1} position={'relative'} overflow={'visible'}
      sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          top: { xs: '50%', md: '25%', lg: '45%' },
          left: { xs: '-50vw', md: '-25%', xl: '-5vw' },
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
      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((item) => {
          return (
            (
              <Grid xs={12} sm={6} md={4} xl={3} key={item._id}>

                <Card
                  sx={{
                    backgroundColor: grey,
                    paddingX: { xs: 1.5, md: 2.5 },
                    paddingY: { xs: 1, md: 2 },
                    borderRadius: 3,
                    aspectRatio: "1/1.36",
                    display: 'flex',
                    flexDirection: "column",
                  }}
                  color={dark}>

                  <Typography gutterBottom variant="caption" mb={1} color={disabled}>
                    {item.name ?? 'No Blog Name'}
                  </Typography>

                  {item.image && (
                    <CardMedia
                      component="img"
                      loading="lazy"
                      image={item.image}
                      alt={item.name}
                      sx={{ borderRadius: 3, aspectRatio: "9/5" }}
                    />
                  )}
                  <CardContent sx={{ paddingX: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>

                    <Typography
                      variant="body1"
                      component="div"
                      textTransform={'capitalize'}
                      fontWeight={400}
                    >
                      {item.name ?? 'No Blog Name'}
                    </Typography>

                    <Typography gutterBottom variant="body2" component="div" sx={{
                      display: '-webkit-box',
                      WebkitLineClamp: { xs: 1, sm: 3 },
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }} mt={1}>
                      {item.content?.replace(/#/g, "") ?? 'No Blog Content Available'}
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

                      {
                        mode !== 'admin'
                          ? <Button
                            variant="outlined"
                            sx={{ width: '100%', borderColor: 'secondary.main', textTransform: "none", paddingY: 1, fontWeight: 300 }}
                            onClick={() => navigate(`/blogs/${item._id}`, { state: { blog: item } })}
                          >
                            Read More
                          </Button>
                          : <Stack gap={2} mt={'auto'} flexDirection={'row'}>
                            <Button

                              variant="contained"
                              sx={{ width: '100%', backgroundColor: 'secondary.main', textTransform: "none", paddingY: 1, fontWeight: 300 }}
                              onClick={() => openEditMenu && openEditMenu(item)}
                            >
                              Edit
                            </Button>
                            <Button

                              variant="outlined"
                              sx={{ width: '100%', borderColor: 'secondary.main', textTransform: "none", paddingY: 1, fontWeight: 300 }}
                              onClick={() => navigate(`/clubs/${item._id}`, { replace: true, state: { club: item } })}
                            >
                              Delete
                            </Button>
                          </Stack>
                      }
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
