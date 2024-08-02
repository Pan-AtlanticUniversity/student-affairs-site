import React, { useState } from 'react';
import { Stack, Typography, TextField, InputAdornment, FormControl, InputLabel, OutlinedInput, IconButton, Button, Box } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Image from 'mui-image';
import { AuthNavBar, Footer } from '../components';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Stack sx={{ overflowY: "scroll", overflowX: "hidden" }} alignItems={"center"} gap={3} >
            <AuthNavBar />
            <Stack sx={{ flexDirection: { xs: "column-reverse", md: "row" }, justifyContent: "space-evenly", alignItems: "center" }} width={"100%"} >
                <Stack sx={{ minWidth: "400px", maxWidth: "40%", marginBottom: { xs: "75px" } }} gap={5} pl={1} pr={1}>
                    <Typography variant='h5' color={"primary"} fontFamily={"leckerli-one"} sx={{ textAlign: "center" }}>
                        Hello there again!!!
                    </Typography>

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Email address"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailIcon />
                                </InputAdornment>
                            ),
                        }}
                        required
                    />
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            startAdornment={
                                <InputAdornment position="start">
                                    <IconButton edge="start">
                                        <LockIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Stack alignItems={"center"} width={"100%"} gap={2}>
                        <Button variant='contained' sx={{ textTransform: 'none', padding: "15px 0", width: "100%" }} >
                            Sign In
                        </Button>
                        <Typography variant='caption' color={"#787A81"}>
                            Don't have an account yet?
                            {
                                <Button sx={{ textTransform: 'none', fontWeight: "400" }} onClick={() => navigate("../signup")}>
                                    Register
                                </Button>
                            }
                        </Typography>
                    </Stack>
                </Stack>
                <Box sx={{ flexGrow: 1, maxWidth: "500px" }} zIndex={1}>
                    <Image src="/svgs/login.svg" style={{ height: "100%" }} />
                </Box>
            </Stack>
            <Footer />

            <Box
                sx={{ width: "60vw", aspectRatio: "1", right: { xs: "-15vw", md: "-10vw" }, top: { md: "-7vw" }, maxWidth: "450px", }}
                bgcolor={"#A673B1"}
                position="absolute"
                zIndex={0}
                borderRadius={500}
            />
        </Stack>
    );
};

export default Login;
