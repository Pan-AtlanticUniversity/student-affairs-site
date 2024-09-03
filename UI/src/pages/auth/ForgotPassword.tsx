import { ChangeEvent, useState, FormEvent } from 'react';
import { Stack, Typography, TextField, InputAdornment, Button, Box } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'mui-image';
import { AuthNavBar, Footer, Message } from '../../components';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../context/authContext';
import { disabled } from '../../context/theme';

import resetSVG from '../../assets/svgs/reset-password.svg';



const ForgotPassword = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
    });

    const [message, setMessage] = useState<string | null>(null);
    const [openState, setOpenState] = useState(false);
    const [mode, setMode] = useState<"success" | "error" | "warning" | "info">("success");
    const { forgotPassword } = useAuth();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage(null);

        await forgotPassword(formData.email, setMessage, setMode, setOpenState);
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
                <Stack component="form" onSubmit={handleSubmit} sx={{ width: { xs: "95%", sm: "400px" }, marginBottom: { xs: "75px" } }} gap={5} pl={1} pr={1}>
                    <Typography variant='h5' color={"primary"} fontFamily={"leckerli-one"} sx={{ textAlign: "center" }}>
                        Forgot Password
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
                    <Stack alignItems={"center"} width={"100%"} gap={1}>
                        <Button variant='contained' sx={{ textTransform: 'none', padding: "15px 0", width: "100%" }} type='submit'>
                            Send new password
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
                    <Image src={resetSVG} style={{ height: "100%" }} />
                </Box>
            </Stack>
            <Footer />
        </Stack >
    );
};

export default ForgotPassword;
