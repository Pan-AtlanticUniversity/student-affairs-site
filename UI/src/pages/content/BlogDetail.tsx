import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Banner, Footer, NavBar } from '../../components';
import { BlogItem } from '../../components/Blog';
import useAuth from '../../context/authContext';
import axios from 'axios';
import { dark } from '../../context/theme';
import dayjs from 'dayjs';

import avatar from '../../assets/svgs/default-user.svg';

const BlogDetail = () => {
    const [blog, setBlog] = useState<BlogItem>();
    const { token } = useAuth();
    const { _id } = useParams();

    useEffect(() => {
        const getBlog = async () => {
            try {
                const AUTH_HEADER = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
                const res = await axios.get<BlogItem>(`http://${import.meta.env.VITE_BACKEND_HOST}:${import.meta.env.VITE_BACKEND_PORT}/api/v1/blog/${_id}`, AUTH_HEADER);
                setBlog(res.data);
            } catch (error) {
                console.log("Error fetching blogs:", error);
            }
        };

        getBlog();
    }, []);

    return (
        <Stack minHeight={"100vh"} sx={{ gap: { xs: 5, md: 8 } }}>
            <NavBar route="Blog" />
            <Stack sx={{ gap: { xs: 1, md: 5 } }}>
                <Banner bannerImage={blog?.image} bannerImageFormat={blog?.fileType} />
                <Typography sx={{ fontSize: { xs: '24px', md: '32px' } }} width={'100%'} textAlign={'center'} fontFamily={'leckerli-one'} color={dark}>{blog?.title}</Typography>
            </Stack>

            <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: { xs: 5, md: 7 } }}>
                <Stack gap={5} direction={'row'} justifyContent={'space-between'}>
                    <Typography variant="caption" color="text.secondary">
                        10 minutes read
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {blog?.read_count} views
                    </Typography>
                </Stack>
                <Typography variant="body1" color={dark}>
                    {blog?.content} views
                </Typography>
                <Stack gap={5} direction={'row'} justifyContent={'space-between'} alignItems={'center'} >
                    <Stack flexWrap={'wrap'} flexGrow={1} gap={1} direction={'row'} alignItems={'inherit'}> 
                        <Box
                            component="img"
                            src={avatar}
                            sx={{
                                objectFit: 'contain',
                                backgroundSize: "contain",
                                width: '50px',
                                height: '100%',
                                verticalAlign: 'middle'
                            }}
                        />
                        <Typography variant="caption" color="text.secondary">
                            {blog?.author}
                        </Typography>
                    </Stack>

                    <Typography variant="caption" color="text.secondary">
                        Date: {dayjs(blog?.date).format("DD MMM YYYY")}
                    </Typography>
                </Stack>
            </Stack>
            <Footer />
        </Stack>
    );
};

export default BlogDetail;
