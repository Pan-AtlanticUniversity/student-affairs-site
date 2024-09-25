import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
  Box
} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { accent, dark, disabled, grey } from '../../context/theme';
import UnderlinedText from "../typography";

export interface ClubItem {
  _id: string;
  name: string;
  image: {
    value: string;
    background: string
  };
  about: string;
  member_count: number;
  meeting_time: string;
  handles: {
    handle: string;
    url: string;
  }[];
  executives: {
    _id: string;
    full_name: string;
    image: string;
    post: string
  }[]
}

interface ClubProp {
  mode?: 'admin' | 'student';
  searchQuery?: string;
  openEditMenu?: () => void;
}

const Club: React.FC<ClubProp> = ({ mode, searchQuery, openEditMenu }) => {
  const [clubs, setClubs] = useState<ClubItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getClubs = async () => {
      try {
        const res = await axios.get<ClubItem[]>(`${import.meta.env.VITE_BACKEND_HOST}/api/v1/club`);
        setClubs(res.data);
      } catch (error) {
        console.log("Error fetching club details:", error);
      }
    };

    getClubs();
  }, []);

  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(searchQuery?.toLowerCase() ?? "")
  );
  return (
    <Stack alignItems={'center'} sx={{ overflowX: 'visible' }}>
      <UnderlinedText text="Clubs at Pan-Atlantic University" />
      <Grid container spacing={3} width={'100%'} zIndex={1} position={'relative'}
        sx={{
          overflowX: 'visible',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: { xs: '50%', md: '25%' },
            left: { xs: '-50vw', md: '-25%', xl: '-5%' },
            transform: 'translateY(-10%)  rotate(35deg)',
            zIndex: -1,
            border: `15px ${accent} solid`,
            width: { xs: '65vw' },
            aspectRatio: "3/5",
            maxWidth: "350px",
            borderRadius: 5,
            display: filteredClubs.length > 0 ? "block" : "none"
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            transform: 'translate(50%, -50%)',
            zIndex: -1,
            backgroundColor: 'secondary.main',
            width: "clamp(150px, 50vw, 300px)",
            aspectRatio: 1,
            maxWidth: "350px",
            borderRadius: '50%',
            display: filteredClubs.length > 0 ? "block" : "none"
          }
        }}
      >
        {filteredClubs.length > 0 ? (
          filteredClubs.map((item) => {
            return (
              (
                <Grid xs={12} sm={6} md={4} xl={3} key={item._id}>

                  <Card
                    sx={{
                      backgroundColor: grey,
                      paddingX: { xs: 1.5, md: 2.5 },
                      paddingY: { xs: 1, md: 2 },
                      borderRadius: 3,
                      aspectRatio: "1/1.2",
                      display: 'flex',
                      flexDirection: "column",
                    }}
                    color={dark}>

                    <Typography gutterBottom variant="caption" mb={1} color={disabled}>
                      {item.name ?? 'No Name provided'}
                    </Typography>

                    {item.image && (
                      <Box sx={{ overflow: 'hidden', borderRadius: 3 }}> {/* Ensure the image zoom is contained */}
                        <CardMedia
                          component="img"
                          image={item.image.value}
                          loading="lazy"
                          alt={item.name}
                          sx={{
                            borderRadius: 3,
                            aspectRatio: "9/5",
                            objectFit: `${item.name === "Community Service Project (CSP)" ? 'cover' : 'contain'}`,
                            backgroundColor: item.image.background,
                            transition: 'transform 0.3s ease-in-out', // Smooth zoom effect
                            '&:hover': {
                              transform: 'scale(1.1)', // Only the image zooms on hover
                            },
                          }}
                        />
                      </Box>

                    )}
                    <Typography variant="body2" component="div" sx={{
                      display: '-webkit-box',
                      WebkitLineClamp: { xs: 2, sm: 3 },
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }} mt={1}>

                      {item.about ?? 'No about'}

                    </Typography>

                    <CardContent sx={{ paddingX: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      {
                        mode !== 'admin'
                          ? <Button

                            variant="outlined"
                            sx={{
                              width: '100%',
                              borderColor: 'secondary.main',
                              textTransform: "none",
                              paddingY: 1,
                              fontWeight: 300,
                              marginTop: 'auto',
                              transition: '0.5s', // Smooth zoom effect
                              '&:hover': {
                                backgroundColor: 'primary.main',
                                borderColor: 'transparent',
                                color: grey
                              },
                            }}
                            onClick={() => navigate(`/clubs/${item._id}`, { state: { club: item } })}
                          >
                            More Info
                          </Button>

                          :

                          <Stack gap={2} mt={'auto'} flexDirection={'row'}>
                            <Button

                              variant="contained"
                              sx={{ width: '100%', backgroundColor: 'secondary.main', textTransform: "none", paddingY: 1, fontWeight: 300 }}
                              onClick={openEditMenu}
                            >
                              Edit
                            </Button>
                            <Button

                              variant="outlined"
                              sx={{ width: '100%', borderColor: 'secondary.main', textTransform: "none", paddingY: 1, fontWeight: 300 }}
                              onClick={() => navigate(`/clubs/${item._id}`, { state: { club: item } })}
                            >
                              Delete
                            </Button>


                          </Stack>
                      }

                    </CardContent>


                  </Card>
                </Grid>
              )
            )
          }
          )
        ) : (
          <Typography variant="h6" color={disabled}>
            No Clubs available.
          </Typography>
        )}
      </Grid>
    </Stack>
  );
}

export default Club;
