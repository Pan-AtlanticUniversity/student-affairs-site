import { ChangeEvent, useState, FormEvent, MouseEvent } from 'react';
import { Stack, Typography, TextField, InputAdornment, FormControl, InputLabel, OutlinedInput, IconButton, Button, Box } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Image from 'mui-image';
import { AuthNavBar, Footer, Message } from '../../components';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../context/authContext';
import { disabled, purple } from '../../context/theme';

import loginSVG from '../../assets/svgs/login.svg';



const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const [message, setMessage] = useState<string | null>(null);
    const [openState, setOpenState] = useState(false);
    const [mode, setMode] = useState("");
    const { login } = useAuth();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage(null);

        await login(formData.email, formData.password, setMessage, setMode, setOpenState);
    };

    return (
        <Stack alignItems={"center"} gap={3}
            sx={{
                overflowY: "scroll", overflowX: "hidden", position: 'relative', zIndex: 0,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    left: '100%',
                    transform: 'translate(-75%, -25%)',
                    zIndex: -1,
                    backgroundColor: 'secondary.main',
                    width: "clamp(200px, 50vw, 400px)",
                    aspectRatio: 1,
                    borderRadius: '50%'
                }
            }} >
            <AuthNavBar />
            <Message message={message} openState={openState} setOpenState={setOpenState} mode={mode} />
            <Stack sx={{ flexDirection: { xs: "column-reverse", md: "row" }, justifyContent: "space-evenly", alignItems: "center" }} width={"100%"} >
                <Stack component="form" onSubmit={handleSubmit} sx={{ width: { xs: "100%", sm: "400px" }, marginBottom: { xs: "75px" } }} gap={5} pl={1} pr={1}>
                    <Typography variant='h5' color={"primary"} fontFamily={"leckerli-one"} sx={{ textAlign: "center" }}>
                        Hello there again!!!
                    </Typography>

                    <TextField
                        id="email"
                        name="email"
                        variant="outlined"
                        label="Email address"
                        value={formData.email}
                        onChange={handleChange}
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
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={handleChange}
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
                        <Button variant='contained' sx={{ textTransform: 'none', padding: "15px 0", width: "100%" }} type='submit'>
                            Sign In
                        </Button>
                        <Typography variant='caption' color={disabled}>
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
                    <Image src={loginSVG} style={{ height: "100%" }} />
                </Box>
            </Stack>
            <Footer />
        </Stack >
    );
};

export default Login;
