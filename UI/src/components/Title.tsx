import { Box, Grid, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { dark, disabled } from '../context/theme'
import axios from 'axios';

interface TitleItem {
    _id: string;
    post: string;
    name: string;
    email: string;
    phone: string;
    image: string
}

const Title = () => {
    const [members, setMembers] = useState<TitleItem[]>([]);

    useEffect(() => {
        const getMembers = async () => {
            try {
                const res = await axios.get<TitleItem[]>(`${import.meta.env.VITE_BACKEND_HOST}/api/v1/member`);
                setMembers(res.data);
            } catch (error) {
                console.log("Error fetching member details:", error);
            }
        };

        getMembers();
    }, []);

    return (

        <Grid
            container
            width={'100%'}
            rowGap={5}
            justifyContent={'space-evenly'}
            sx={{
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: { xs: '-50vw' },
                    transform: 'translateY(-50%)  rotate(35deg)',
                    zIndex: -1,
                    border: '15px #18BC9C solid',
                    width: { xs: '65vw' },
                    aspectRatio: "3/5",
                    maxWidth: "350px",
                    borderRadius: 5,
                    display: { xs: "block", md: "none" }


                }
            }}
        >

            {members.length > 0 &&
                members.map((item) => {
                    return (
                        <Grid
                            item
                            xs={12} sm={4} md={3} lg={2.4}
                            key={item._id}
                            display="flex" // Ensure the Grid item uses flexbox for centering
                            justifyContent="center" // Centers horizontally
                            alignItems={'center'}
                            flexDirection={'column'}
                        >
                            <Typography variant="h6" color={dark}>
                                {item.post}
                            </Typography>
                            <Box
                                component={'img'}
                                src={item.image}
                                alt={item.name}
                                sx={{
                                    width: { xs: "35%", sm: "150px", lg: '200px' },
                                    aspectRatio: '1/1',
                                    borderRadius: '50%',
                                    backgroundColor:'info.main'
                                }}
                                
                            />
                            <Stack direction={'column'} alignItems={'center'} sx={{ gap: 0.5 }}>
                                <Typography variant="body1" color={disabled}>
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color={disabled}>
                                    {item.email}
                                </Typography>
                                <Typography variant="body2" color={disabled}>
                                    {item.phone}
                                </Typography>
                            </Stack>
                        </Grid>
                    )
                }
                )}
        </Grid>
    )
}
export default Title