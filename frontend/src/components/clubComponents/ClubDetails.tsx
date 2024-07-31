import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Box, Typography } from "@mui/material";
import Footer from "../../components/homeComponents/Footer";
import Navbar from "../../components/homeComponents/Navbar";

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
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  if (!club) {
    return <Typography>No club details available.</Typography>;
  }

  return (

    <Container maxWidth="md" sx={{ mt: 5 }}>
    


      <Box>
        <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore odit enim reiciendis, 
            nulla, quos sapiente animi iure ad distinctio explicabo voluptatem reprehenderit. 
            Libero voluptate architecto sapiente maiores labore eaque eum.
        </Typography>
        <Typography variant="h3" component="h1">
          Welcome to the {club.nameOfClub} !!
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {club.school}
        </Typography>
        {/* <Typography variant="body1" sx={{ mt: 3 }}>
          {club.description}
        </Typography> */}
        {/* Add more details as necessary */}
      </Box>

  

    </Container>
  );
};

export default ClubDetails;
