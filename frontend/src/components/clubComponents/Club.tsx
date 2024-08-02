import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Button, Grid, Card, CardContent, Badge , CardMedia} from "@mui/material";

// Define the types for the club items
interface ClubItem {
    _id: string;
    nameOfClub: string;
    school: string;
    title: string;
    image?: string;
    price?: number;
}


const AUTH_HEADER = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWE0YTJkMGJjNGM4MjM5MjNkN2U5MCIsImlhdCI6MTcyMjQzNjE0MSwiZXhwIjoxNzIyNjA4OTQxfQ.I_K94SKf5404s6ysnQiDutXgz9Cc0DG4nLsnBsXzBpE`
    }
  };

function Club() {
    // Call to the database
    const [club, setClub] = useState<ClubItem[]>([]);

    useEffect(() => {
        const getClub = async () => {
            try {
                const res = await axios.get<ClubItem[]>("http://localhost:4001/api/v1/club", AUTH_HEADER); // Fetches from db with token
                console.log("Response data:", res.data);
                setClub(res.data);
            } catch (error) {
                console.error("Error fetching clubs:", error);
            }
        };
        getClub();
    }, []);
    return (
        <Container maxWidth="xl" sx={{ mt: 10 }}>
          <Box sx={{ textAlign: 'center', mt: 10 }}> 
            <Typography variant="h4" component="h1">
              Meet our clubs <span style={{ color: "#ec407a" }}>🎉!</span>
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
            {club.length > 0 ? (
              club.map((item) => (
                <Box key={item._id} sx={{ display: 'inline-block', minWidth: '300px', pr: 2 }}>
                  <Card
                    sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, backgroundColor: 'background.paper' }}
                    component={Link} to={`/club/${item._id}`} //passes the ID of the item clicked
                  >
                    {/* {item.image && (
                      <CardMedia
                        component="img"
                        image={item.image}
                        alt={item.nameOfClub}
                        sx={{ height: 140 }}
                      />
                    )} */}
    
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.nameOfClub || 'No Club Name'}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.school || 'No Title Available'}
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

export default Club;
