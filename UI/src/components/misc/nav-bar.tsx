// import { AppBar, styled, Toolbar, Box, Button, Stack, Menu, MenuItem } from '@mui/material';
// import { Image } from 'mui-image'
// import React from 'react';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import { useNavigate } from 'react-router-dom';
// import { grey } from '../context/theme';

// import PAULogo from '../assets/images/transparent-pau-logo.png';
// import DefaultUser from '../assets/svgs/default-user.svg';

// const StyledToolBar = styled(Toolbar)({
//     display: "flex",
//     justifyContent: "space-between",
// });
// const StyledMenuItem = styled(MenuItem)({
//     padding: "8px 35px",
//     display: 'flex',
//     justifyContent: 'center',
//     textAlign: 'center',
// });

// interface NavBarProps {
//     route: string;
// }

// const NavBar: React.FC<NavBarProps> = ({ route }) => {
//     const navigate = useNavigate();

//     const handleNavigation = (path: string) => {
//         navigate(path);
//         handleClose();
//     };

//     const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//     return (
//         <AppBar position="fixed" sx={{ backgroundColor: "#002E6D", boxShadow: "none", padding: "10px 10px" }}>
//             <StyledToolBar sx={{ padding: 0 }} color='white'>
//                 <Box sx={{ width: { xs: "125px", md: "150px", lg: "175px" } }}>
//                     <Image src={PAULogo} style={{ height: "100%" }} />
//                 </Box>

//                 <Stack direction="row" sx={{ gap: { xs: 1, md: 3 } }} alignItems={'center'} >
//                     <Button
//                         id="basic-button"
//                         aria-controls={open ? 'basic-menu' : undefined}
//                         aria-haspopup="true"
//                         aria-expanded={open ? 'true' : undefined}
//                         onClick={handleClick}
//                         endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//                         sx={{ textTransform: "none" }}

//                     >
//                         {route}
//                     </Button>
//                     <Menu
//                         id="basic-menu"
//                         anchorEl={anchorEl}
//                         open={open}
//                         onClose={handleClose}
//                         MenuListProps={{
//                             'aria-labelledby': 'basic-button',
//                         }}
//                     >
//                         <StyledMenuItem onClick={() => handleNavigation('/')}>Home</StyledMenuItem>
//                         <StyledMenuItem onClick={() => handleNavigation('/about')}>About</StyledMenuItem>
//                         <StyledMenuItem onClick={() => handleNavigation('/clubs')}>Clubs</StyledMenuItem>
//                         <StyledMenuItem onClick={() => handleNavigation('/blogs')}>Blog</StyledMenuItem>
//                         <StyledMenuItem onClick={() => handleNavigation('/rules')}>Rules</StyledMenuItem>
//                         <StyledMenuItem
//                             onClick={() => window.location.href = 'mailto:studentaffairs@pau.edu.ng?subject=Know%20Your%20Mentor'}
//                         >
//                             Know your
//                             <br />
//                             mentor!
//                         </StyledMenuItem>
//                     </Menu>
//                     <Box sx={{ width: "35px" }}>
//                         <Image src={DefaultUser} style={{ height: "100%" }} />
//                     </Box>
//                 </Stack>


//             </StyledToolBar>

//         </AppBar>
//     )
// }

// export default NavBar

// import React, { useState } from 'react';
// import { AppBar, Box, Button, Drawer, IconButton, Stack, Toolbar, styled } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu'; // Menu icon for mobile view
// import { Image } from 'mui-image';
// import { useNavigate } from 'react-router-dom';
// import PAULogo from '../assets/images/transparent-pau-logo.png'; // Replace with your logo

// const StyledToolBar = styled(Toolbar)({
//   display: 'flex',
//   justifyContent: 'space-between',
//   padding: '10px 0', // Adjust padding for better spacing
// });

// const NavLinkButton = styled(Button)({
//   color: 'white',
//   fontWeight: 'bold',
//   fontSize: '1rem',
//   textTransform: 'uppercase', // Matching the uppercase style of text
//   '&:hover': {
//     backgroundColor: 'rgba(255, 255, 255, 0.2)', // On hover, slight white background
//   },
// });

// const SupportButton = styled(Button)({
//   backgroundColor: '#D4A251', // Gold color from the image
//   color: 'white',
//   borderRadius: '25px', // Rounded corners
//   padding: '10px 20px',
//   fontWeight: 'bold',
//   '&:hover': {
//     backgroundColor: '#C19345', // Slightly darker on hover
//   },
// });

// const DrawerContainer = styled(Box)({
//   width: 250,
//   height:'100%',
//   padding: '20px',
//   backgroundColor: '#002E6D',
// });

// interface NavBarProps {
//   route: string;
// }

// const NavBar: React.FC<NavBarProps> = ({ route }) => {
//   const navigate = useNavigate();
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const handleNavigation = (path: string) => {
//     navigate(path);
//     setDrawerOpen(false); // Close the drawer after navigation
//   };

//   const toggleDrawer = (open: boolean) => () => {
//     setDrawerOpen(open);
//   };

//   return (
//     <>
//       <AppBar position="fixed" sx={{ backgroundColor: '#002E6D', boxShadow: 'none' }}>
//         <StyledToolBar>
//           {/* Logo Section */}
//           <Box sx={{ width: '150px' }}>
//             <Image src={PAULogo} style={{ height: '100%', width: '100%' }} />
//           </Box>

//           {/* Desktop Navigation Links */}
//           <Stack direction="row" spacing={4} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
//             <NavLinkButton onClick={() => handleNavigation('/')}>Home</NavLinkButton>
//             <NavLinkButton onClick={() => handleNavigation('/about')}>About</NavLinkButton>
//             <NavLinkButton onClick={() => handleNavigation('/clubs')}>Clubs</NavLinkButton>
//             <NavLinkButton onClick={() => handleNavigation('/blogs')}>Blog</NavLinkButton>
//             <NavLinkButton onClick={() => handleNavigation('/rules')}>Rules</NavLinkButton>
//           </Stack>

//           {/* Support Button */}
//           <SupportButton
//             onClick={() => window.location.href = 'mailto:studentaffairs@pau.edu.ng?subject=Know%20Your%20Mentor'}
//             sx={{ display: { xs: 'none', md: 'block' } }}
//           >
//             Contact Us!
//           </SupportButton>

//           {/* Mobile Hamburger Menu */}
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ display: { xs: 'block', md: 'none' } }}
//             onClick={toggleDrawer(true)}
//           >
//             {/* {route} */}
//             <MenuIcon />
//           </IconButton>

//           {/* Drawer for mobile view */}
//           <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//             <DrawerContainer>
//               <NavLinkButton fullWidth onClick={() => handleNavigation('/')}>Home</NavLinkButton>
//               <NavLinkButton fullWidth onClick={() => handleNavigation('/about')}>About</NavLinkButton>
//               <NavLinkButton fullWidth onClick={() => handleNavigation('/clubs')}>Clubs</NavLinkButton>
//               <NavLinkButton fullWidth onClick={() => handleNavigation('/blogs')}>Blog</NavLinkButton>
//               <NavLinkButton fullWidth onClick={() => handleNavigation('/rules')}>Rules</NavLinkButton>
//               <SupportButton fullWidth  onClick={() => window.location.href = 'mailto:studentaffairs@pau.edu.ng?subject=Know%20Your%20Mentor'}>Contact Us</SupportButton>
//             </DrawerContainer>
//           </Drawer>
//         </StyledToolBar>
//       </AppBar>

//       {/* Add padding to prevent content from being hidden behind the fixed navbar */}
//       {/* <Box sx={{ paddingTop: '80px' }}>
//         {/* Your content goes here */}
//       {/* </Box> */}
//     </>
//   );
// };

// export default NavBar;
