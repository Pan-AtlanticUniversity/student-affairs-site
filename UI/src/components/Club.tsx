import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button
} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { dark, disabled, grey } from "../context/theme";

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

const Club = () => {
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
  return (
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
          border: '15px #18BC9C solid',
          width: { xs: '65vw' },
          aspectRatio: "3/5",
          maxWidth: "350px",
          borderRadius: 5,
          display: clubs.length > 0 ? "block" : "none"
        }
      }}
    >
      {clubs.length > 0 ? (
        clubs.map((item) => {
          return (
            (
              <Grid xs={12} sm={6} md={4} xl={3} key={item._id}>

                <Card
                  sx={{
                    backgroundColor: grey,
                    paddingX: { xs: 1.5, md: 2.5 },
                    paddingY: { xs: 1, md: 2 },
                    borderRadius: 3,
                    aspectRatio: "1/1.35",
                    display: 'flex',
                    flexDirection: "column",
                  }}
                  color={dark}>

                  <Typography gutterBottom variant="caption" mb={1} color={disabled}>
                    {item.name ?? 'No Name provided'}
                  </Typography>

                  {item.image && (
                    <CardMedia
                      component="img"
                      image={item.image.value}
                      loading="lazy"
                      alt={item.name}
                      sx={{ borderRadius: 3, aspectRatio: "9/5", objectFit: `${item.name === "Community Service Project (CSP)" ? 'cover' : 'contain'}`, backgroundColor: item.image.background }}
                    />
                  )}
                  <CardContent sx={{ paddingX: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>

                    <Typography variant="body2" component="div" sx={{
                      display: '-webkit-box',
                      WebkitLineClamp: { xs: 2, sm: 3 },
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }} mt={1}>
                      {item.about ?? 'No about'}
                    </Typography>

                    <Button

                      variant="outlined"
                      sx={{ width: '100%', borderColor: 'secondary.main', textTransform: "none", paddingY: 1, fontWeight: 300, marginTop: 'auto' }}
                      onClick={() => navigate(`/clubs/${item._id}`, { replace: true, state: { club: item } })}
                    >
                      More Info
                    </Button>

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

export default Club;
