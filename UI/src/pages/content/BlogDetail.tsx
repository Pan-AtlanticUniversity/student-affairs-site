import { Box, Stack, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Banner, Footer, NavBar } from '../../components';
import { dark } from '../../context/theme';
import dayjs from 'dayjs';

import avatar from '../../assets/svgs/default-user.svg';
import { BlogItem } from '../../components/Blog';

const BlogDetail = () => {

    const location = useLocation();
    const { blog }: { blog: BlogItem } = location.state;

    if (!blog) {
        return <Typography variant="h6">No blog details available.</Typography>;
    }

    const paragraphs = blog?.content.split('\n');

    return (
        <Stack minHeight={"100vh"} sx={{ gap: { xs: 5, md: 8 } }}>
            <NavBar route="Blog" />
            <Stack sx={{ gap: { xs: 1, md: 5 } }}>
                <Banner bannerImage={blog?.image} />
                <Typography sx={{ fontSize: { xs: '24px', md: '32px' } }} width={'100%'} textAlign={'center'} fontFamily={'Barlow'} color={dark}>{blog?.name}</Typography>
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
                <div>
                    {paragraphs.map((paragraph, index) => {
                        // Check if the line starts with ## for an <h2> or ### for an <h3>
                        if (paragraph.startsWith('###')) {
                            return (
                                <>
                                    <br />
                                    <Typography
                                        key={index}
                                        variant="h6" // You can change the variant to match the header level
                                        color={dark}
                                        zIndex={1}
                                        textAlign={'left'}
                                        gutterBottom // Adds margin below the header
                                    >
                                        {paragraph.replace('###', '')}
                                    </Typography>
                                </>

                            );
                        } else if (paragraph.startsWith('##')) {
                            return (
                                <>
                                    <br />
                                    <Typography
                                        key={index}
                                        variant="h4" // You can change the variant to match the header level
                                        color={dark}
                                        zIndex={1}
                                        textAlign={'left'}
                                        gutterBottom
                                    >
                                        {paragraph.replace('##', '')}
                                    </Typography>
                                </>

                            );
                        } else {
                            // Regular paragraph text
                            return (
                                <Typography
                                    key={index}
                                    variant="body1"
                                    color={dark}
                                    zIndex={1}
                                    textAlign={'left'}
                                    paragraph // Adds margin below the paragraph
                                >
                                    {paragraph}
                                </Typography>
                            );
                        }
                    })}
                </div>
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
