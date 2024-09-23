// import { IconButton, Stack, Typography, Box, Grid } from "@mui/material";
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import { grey, primary, dark } from "../context/theme"; // Assuming you have colors defined here

// const Footer = () => {
//     return (
//         <Box component="footer" width="100%" bgcolor={primary} color="#fff" pt={8} pb={4}>
//             <Grid container spacing={5} justifyContent="between" alignItems="center">
//                 {/* Section 1: Contact Info */}
//                 <Grid item xs={12} md={4} pl={3}>
//                     <Typography variant="h6" color="inherit" mb={2}>
//                         PAU Student Affairs
//                     </Typography>
//                     <Typography variant="body2" color={grey[300]} mb={2}>
//                         Pan-Atlantic University, 
//                         Lagos, Nigeria
//                     </Typography>
//                     <Typography variant="body2" color={grey[300]}>
//                         Phone: +234 800 123 4567
//                     </Typography>
//                     <Typography variant="body2" color={grey[300]}>
//                         Email: studentaffairs@pau.edu.ng
//                     </Typography>
//                 </Grid>

//                 {/* Section 2: Social Media Links */}
//                 <Grid item xs={12} md={4} textAlign="center">
//                     <Typography variant="h6" color="inherit" mb={2}>
//                         Connect with us
//                     </Typography>
//                     <Stack direction="row" spacing={2} justifyContent="center">
//                         <IconButton
//                             sx={{ color: "#fff" }}
//                             component="a"
//                             href="https://ng.linkedin.com/school/pan-atlantic-university/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <LinkedInIcon sx={{ fontSize: { xs: '24px', md: '28px' } }} />
//                         </IconButton>

//                         <IconButton
//                             sx={{ color: "#fff" }}
//                             component="a"
//                             href="https://web.facebook.com/PanAtlanticUniversityNG/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <FacebookIcon sx={{ fontSize: { xs: '24px', md: '28px' } }} />
//                         </IconButton>

//                         <IconButton
//                             sx={{ color: "#fff" }}
//                             component="a"
//                             href="https://x.com/pau_nigeria"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <XIcon sx={{ fontSize: { xs: '24px', md: '28px' } }} />
//                         </IconButton>

//                         <IconButton
//                             sx={{ color: "#fff" }}
//                             component="a"
//                             href="https://www.instagram.com/pau_nigeria/?hl=en"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <InstagramIcon sx={{ fontSize: { xs: '24px', md: '28px' } }} />
//                         </IconButton>
//                     </Stack>
//                 </Grid>

//                 {/* Section 3: Quick Links */}
//                 <Grid item xs={12} md={4}>
//                     <Typography variant="h6" color="inherit" mb={2}>
//                         Quick Links
//                     </Typography>
//                     <Stack spacing={1}>
//                         <Typography component="a" href="/privacy" color="inherit" sx={{ textDecoration: "none", cursor: "pointer" }}>
//                             Privacy Policy
//                         </Typography>
//                         <Typography component="a" href="/terms" color="inherit" sx={{ textDecoration: "none", cursor: "pointer" }}>
//                             Terms & Conditions
//                         </Typography>
//                         <Typography component="a" href="/contact" color="inherit" sx={{ textDecoration: "none", cursor: "pointer" }}>
//                             Contact Us
//                         </Typography>
//                     </Stack>
//                 </Grid>
//             </Grid>

//             {/* Footer Bottom: Copyright */}
//             <Box mt={8} pt={4} borderTop="1px solid rgba(255, 255, 255, 0.1)" textAlign="center">
//                 <Typography variant="body2" color={grey[500]}>
//                     © 2024 Pan-Atlantic University. All rights reserved.
//                 </Typography>
//             </Box>
//         </Box>
//     );
// };

// export default Footer;
import { IconButton, Stack, Typography, Box, Grid, Divider, Link } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { grey } from "@mui/material/colors";
import StrathmoreLogo from '../assets/images/transparent-pau-logo.png';

const Footer = () => {
    return (

        <Box component="footer" width="100%" bgcolor="#002E6D" color="#fff" pt={8} pb={4} sx={{ borderStartStartRadius: 15, borderStartEndRadius: 15 }}>
            <Stack>
                {/* Logo */}
                <Box pl={3}  pb={4} component="img" src={StrathmoreLogo} alt="Strathmore University Logo"
                    sx={{
                        width: { xs: '80px', md: '120px' }, // Responsive sizing
                        height: 'auto'
                    }}
                />
                <Typography pl={5} pb={6} sx={{ fontWeight: 'bold' }}>STUDENT AFFAIRS, PAN-ATLANTIC UNIVERSITY</Typography>
            </Stack>

            <Grid container spacing={5} justifyContent="space-between" alignItems="flex-start" px={{ xs: 2, md: 5 }}>

                {/* Section 1: Important Links */}
                <Grid item xs={12} md={3}>
                    <Stack spacing={1}>
                        {['BRAND GUIDELINES', 'LECTURES GUIDE FOR ONLINE LEARNING', 'GRADUATION POLICY', 'LECTURERS REGULATIONS FOR LIVE VIDEO CLASS', 'STUDENTS REGULATIONS FOR LIVE VIDEO', 'STRATHMORE MEDICAL SERVICE PROVIDERS'].map((item, index) => (
                            <Link href="#" underline="hover" color="inherit" key={index} variant="body2">
                                {item}
                            </Link>
                        ))}
                    </Stack>
                </Grid>

                {/* Section 2: Other Links */}
                <Grid item xs={12} md={3}>
                    <Stack spacing={1}>
                        {['SAGANA', 'STUDENT\'S E-LEARNING SYSTEM', 'AMS STUDENT\'S MODULE', 'VICE CHANCELLOR\'S BLOG', 'FAQs'].map((item, index) => (
                            <Link href="#" underline="hover" color="inherit" key={index} variant="body2">
                                {item}
                            </Link>
                        ))}
                    </Stack>
                </Grid>

                {/* Section 3: Logo and Social Media Links */}
                <Grid item xs={12} md={3}>
                    <Stack >
                        <Typography variant="h6" color="inherit" fontWeight="bold" pl={1.25}>
                            Connect with Us
                        </Typography>
                        <Stack direction="row">
                            {/* Social Media Icons */}
                            {[
                                { icon: <LinkedInIcon sx={{ fontSize: { xs: '24px', md: '28px' } }} />, link: "https://ng.linkedin.com/school/pan-atlantic-university/" },
                                { icon: <FacebookIcon sx={{ fontSize: { xs: '24px', md: '28px' } }} />, link: "https://web.facebook.com/PanAtlanticUniversityNG/" },
                                { icon: <XIcon sx={{ fontSize: { xs: '24px', md: '28px' } }} />, link: "https://x.com/pau_nigeria" },
                                { icon: <InstagramIcon sx={{ fontSize: { xs: '24px', md: '28px' } }} />, link: "https://www.instagram.com/pau_nigeria/?hl=en" }
                            ].map((item, index) => (
                                <IconButton
                                    sx={{ color: "#fff" }}
                                    component="a"
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={index}
                                >
                                    {item.icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>

            {/* Divider */}
            <Divider sx={{ bgcolor: grey[500], mt: 4 }} />

            {/* Footer Bottom: Copyright and Logo */}
            <Stack justifyContent="center" alignItems="center" direction={{ xs: 'column', md: 'row' }} mt={4} spacing={3}>
                <Box>
                    <Typography variant="body2" color={grey[400]}>
                        University Relations & Communications | Data Privacy Policy | Legal Notice | Whistle Blowing Platform | Cookie Policy | Contact Us
                    </Typography>
                    <Typography variant="body2" color={grey[500]} mt={2}>
                        © Pan-Atlantic University. All Rights Reserved.
                    </Typography>
                </Box>

                
            </Stack>
        </Box>
    );
};

export default Footer;
