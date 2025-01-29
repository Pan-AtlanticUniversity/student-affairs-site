import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
import { disabled } from "../../context/theme";
import UnderlinedText from "../typography";
import GridCard from "../gridcard";

export interface ClubItem {
  _id: string;
  club_name: string;
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
  }[];
}

const Club = () => {
  const [clubs, setClubs] = useState<ClubItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getClubs = async () => {
      try {
        const res = await axios.get<ClubItem[]>(`/api/v1/club`);
        setClubs(res.data);
      } catch (error) {
        console.log("Error fetching club details:", error);
      }
    };
    getClubs();
  }, []);

  return (
    <Box sx={{ padding: '20px' }} marginTop={'-20px'}>
      <UnderlinedText text="Clubs at Pan-Atlantic University" />

      {clubs.length > 0 ? (
        <Grid container spacing={4}>
          {clubs.map((item) => (

            <GridCard
              title={item.club_name ?? 'No Name provided'}
              imageUrl={item.image?.value ?? "https://via.placeholder.com/300x200"}
              onClick={() => navigate(`/clubs/${item._id}`, { replace: true, state: { club: item } })}
            />

          ))}
        </Grid>
      ) : (
        <Typography variant="h6" color={disabled}>
          No clubs available.
        </Typography>
      )}
    </Box>
  );
};

export default Club;
