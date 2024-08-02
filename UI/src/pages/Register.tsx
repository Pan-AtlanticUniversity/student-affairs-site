import { Stack, Typography, TextField, InputAdornment, Button, Box } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'mui-image';
import { AuthNavBar, Footer } from '../components';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

const Register = () => {

  const navigate = useNavigate();

  return (
    <Stack sx={{ overflowY: "scroll", overflowX: "hidden" }} alignItems={"center"} gap={3} >
      <AuthNavBar />
      <Stack sx={{ flexDirection: { xs: "column-reverse", md: "row" }, justifyContent: "space-evenly", alignItems: "center" }} width={"100%"} >
        <Stack sx={{ minWidth: "400px", maxWidth: "40%", marginBottom: { xs: "75px" } }} gap={5} pl={1} pr={1}>
          <Typography variant='h5' color={"primary"} fontFamily={"leckerli-one"} sx={{ textAlign: "center" }}>
            The place for professionals
          </Typography>

          <TextField
            id="input-with-icon-textfield"
            label="First Name"
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
            id="input-with-icon-textfield"
            label="First Name"
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
          <Stack alignItems={"center"} width={"100%"} gap={2}>
            <Button variant='contained' sx={{ textTransform: 'none', padding: "15px 0", width: "100%" }} >
              Sign In
            </Button>
            <Typography variant='caption' color={"#787A81"}>
              Already have an account?
              {
                <Button sx={{ textTransform: 'none', fontWeight: "400" }} onClick={() => navigate("../login")}>
                  Sign In
                </Button>
              }
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
