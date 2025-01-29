import { GridCard, InfoBox } from '..';
import { Grid, Stack } from '@mui/material';
import { accent, primary } from '../../context/theme';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export interface ServiceInterface {
  name: string,
  image: string,
  content: string
}

const Services = () => {

  const [services, setServices] = useState<ServiceInterface[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getServices = async () => {
      try {
<<<<<<< HEAD
        const res = await axios.get<ServiceInterface[]>(`/api/v1/services`);
        setServices(res.data);
=======
        const res = await axios.get<ServiceInterface[]>(`${import.meta.env.VITE_BACKEND_HOST}/api/v1/services`);
        setServices(res?.data);
>>>>>>> 37da7e54e2495053143ab2f99484d77bc32fbe19
      } catch (error) {
        console.log("Error fetching services:", error);
      }
    };

    getServices();
  }, []);

  return (
    // Updated the margin top to bring the services component closer to the top
    <Stack
      position={'relative'} overflow={'visible'}
      sx={{
        gap: { xs: 10, md: 15 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translate(-50%, -50%)  rotate(35deg)',
          zIndex: -1,
          border: `15px ${primary} solid`,
          width: { xs: '65vw' },
          aspectRatio: "3/5",
          maxWidth: "350px",
          borderRadius: 5,
        }
      }}>

      <Grid
        container
        spacing={4}
        sx={{ zIndex: 1 }}
      >
        {
          services.map(item => {
            // console.log(item)
            return (
              <GridCard
                key={item.name}
                title={item.name}
                imageUrl={item.image ?? "https://via.placeholder.com/300x200"}

                onClick={() => {
                  if (item.name === 'Sports') {
                    navigate('/sports');
                  } else if (item.name == 'Guidance and Counselling') {
                    navigate('/guidance')
                  } else if (item.name === 'Community Service Project') {
                    window.location.href = 'http://pau.volunteer.ng';
                  } else if (item.name === 'Peer to Peer Tutorials') {
                    navigate('/p2p')
                  }
                  else {
                    navigate(`/services/${item.name}`, { state: { service: item } });
                  }
                }}

              />)
          }
          )
        }
      </Grid>

      <Grid container spacing={3}
        sx={{
          position: "relative", overflowX: 'visible',
          zIndex: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translate(50%, -50%)  rotate(135deg)',
            zIndex: -1,
            border: `15px ${accent} solid`,
            width: { xs: '50vw' },
            aspectRatio: "3/5",
            maxWidth: "350px",
            borderRadius: 5,
          }
        }}>
        <Grid item xs={12} md={6}>
          <InfoBox
            title="Get To Know More About Us"
            content="At Pan-Atlantic University, we are dedicated to fostering academic excellence, personal growth, and innovation. Discover how we are shaping the future through education, research, and leadership, and learn more about the values that guide our institution."
            buttonText="Find out more"
            onClick={() => navigate('/about')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InfoBox
            title="The Student Handbook and Code of Conduct"
            content="Understanding the processes and guidelines that shape your experience at Pan-Atlantic University is essential for a smooth and successful academic journey.
"
            buttonText="Download Here"

            onClick={() => {
              window.open('https://drive.google.com/file/d/1X5rna2wlYiHAsj-aEVlb1MAqRoFkKxbZ/view?usp=sharing', '_blank');
            }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Services;
