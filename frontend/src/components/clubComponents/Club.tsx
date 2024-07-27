import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Button, Grid, Card, CardContent, Badge } from "@mui/material";

// Define the types for the club items
interface ClubItem {
    id: string;
    nameOfClub: string;
    school: string;
    title: string;
    image?: string;
    price?: number;
}

function Club() {
    // Call to the database
    const [club, setClub] = useState<ClubItem[]>([]);

    useEffect(() => {
        const getClub = async () => {
            try {
                const res = await axios.get<ClubItem[]>("http://localhost:4001/api/v1/club", {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTUzYWY1Njc1MjIyMGU1NmFhM2YwNyIsImlhdCI6MTcyMjEwNDU2NSwiZXhwIjoxNzIyMjc3MzY1fQ.cZICjRGna_qC5N8KibRi35Ew2RuVlqYXV2xtu7KfAkE`
                    }
                }); // Fetches from db with token
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
                    School Clubs <span style={{ color: "#ec407a" }}>Here! :)</span>
                </Typography>
                <Typography variant="body1" sx={{ mt: 3 }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, assumenda? Repellendus, iste corrupti? Tempore laudantium repellendus accusamus accusantium sed architecto odio, nisi expedita quas quidem nesciunt debitis dolore non aspernatur praesentium assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam consequatur!
                </Typography>
                <Link to="/">
                    <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
                        Back
                    </Button>
                </Link>
            </Box>

            <Grid container spacing={4} sx={{ mt: 3 }}>
                {club.length > 0 ? (
                    club.map((item) => (
                        <Grid item xs={12} md={3} key={item.id}>
                            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, backgroundColor: 'background.paper' }}>
                                {/* Uncomment if images are needed */}
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
                                        {/* {item.school && (
                                            <Badge badgeContent={item.school} color="secondary" sx={{ ml: 1 }} />
                                        )} */}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.school || 'No Title Available'}
                                    </Typography>
                                </CardContent>
                                {/* Uncomment if card actions are needed */}
                                {/* <CardActions sx={{ justifyContent: 'space-between' }}>
                  <Badge badgeContent={`$${item.price || 'N/A'}`} color="primary" />
                  <Button variant="outlined" color="secondary">
                    Buy Now
                  </Button>
                </CardActions> */}
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h6" sx={{ mt: 3 }}>
                        No clubs available.
                    </Typography>
                )}
            </Grid>
        </Container>
    );
}

export default Club;
