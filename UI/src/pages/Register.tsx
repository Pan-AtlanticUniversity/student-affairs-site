import { ChangeEvent, useState, FormEvent } from 'react';
import { Stack, Typography, TextField, InputAdornment, Button, Box } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'mui-image';
import { AuthNavBar, Footer, Message } from '../components';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import useAuth from '../context/authContext';

const Register = () => {

  const { register } = useAuth();

  const [message, setMessage] = useState<string | null>(null);
  const [openState, setOpenState] = useState(false);
  const [mode, setMode] = useState("");

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    await register(formData.firstName, formData.lastName, formData.email, setMessage, setMode, setOpenState);
  };



  return (
    <Stack sx={{ overflowY: "scroll", overflowX: "hidden" }} alignItems={"center"} gap={3} >
      <AuthNavBar />
      <Message message={message} openState={openState} setOpenState={setOpenState} mode={mode} />
      <Stack sx={{ flexDirection: { xs: "column-reverse", md: "row" }, justifyContent: "space-evenly", alignItems: "center" }} width={"100%"} >
        <Stack component="form" onSubmit={handleSubmit} sx={{ minWidth: "400px", maxWidth: "40%", marginBottom: { xs: "75px" } }} gap={5} pl={1} pr={1}>
          <Typography variant='h5' color={"primary"} fontFamily={"leckerli-one"} sx={{ textAlign: "center" }}>
            The place for professionals
          </Typography>

          <TextField
            id="first-name"
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            required
            variant="outlined"
          />

          <TextField
            id="last-name"
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            required
            variant="outlined"
          />

          <TextField
            id="email"
            name="email"
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
            variant="outlined"
          />

          <Stack alignItems={"center"} width={"100%"} gap={2}>
            <Button variant='contained' sx={{ textTransform: 'none', padding: "15px 0", width: "100%" }} type='submit'>
              Register
            </Button>
            <Typography variant='caption' color={"#787A81"}>
              Already have an account?
              <Button sx={{ textTransform: 'none', fontWeight: "400" }} onClick={() => navigate("../login")}>
                Sign In
              </Button>
            </Typography>
          </Stack>
        </Stack>
        <Box sx={{ flexGrow: 1, maxWidth: "500px" }} zIndex={1}>
          <Image src="/svgs/register.svg" style={{ height: "100%" }} />
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

export default Register;
