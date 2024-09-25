import { GridCard, InfoBox } from '../components';
import { Grid, Stack } from '@mui/material';
import FIG from '../assets/images/FIG/3.jpg';
import Sports from '../assets/images/Clubs and extracurricular/3.jpg';
import Mentor from '../assets/images/Guidance counselling & mentoring/3.jpg';
import MedicalService from '../assets/images/Medical service_.jpg';
import Career from '../assets/images/7.jpg';
import WorkStudy from '../assets/images/1.jpg'
import { accent, primary } from '../context/theme';


const Services = () => {
  return (
    // Updated the margin top to bring the services component closer to the top
    <Stack
      position={'relative'} overflow={'visible'} zIndex={0}
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

      <Grid container
        spacing={4}>
        <GridCard title="Student Affairs Office" imageUrl="https://via.placeholder.com/300x200" onClick={() => alert('Dean of students clicked!')} />
        <GridCard title="Clubs and Extracurriculars" imageUrl={Sports} onClick={() => alert('Clubs and societies clicked!')} />

        {/* mentoring would be a subsection */}
        {/* <GridCard title="Guidance and Counselling" imageUrl="https://via.placeholder.com/300x200" onClick={() => alert('Mentoring clicked!')} /> */}
        <GridCard title="The FIG Programme" imageUrl={FIG} onClick={() => alert('New students clicked!')} />
        <GridCard title="Career and Internship" imageUrl={Career} onClick={() => alert('Career development services clicked!')} />

        {/* Peer 2 peer to be added as a subsection */}
        <GridCard title="Work Study Programme" imageUrl={WorkStudy} onClick={() => alert('Student Council clicked!')} />
        <GridCard title="Mentoring" imageUrl={Mentor} onClick={() => alert('Chaplaincy clicked!')} />
        <GridCard title="Student Businesses" imageUrl="https://via.placeholder.com/300x200" onClick={() => alert('ICT services clicked!')} />
        <GridCard title="The PAU Student Policies" imageUrl="https://via.placeholder.com/300x200" onClick={() => alert('Student Council clicked!')} />
        {/* <GridCard title="Town Hall Meetings" imageUrl="https://via.placeholder.com/300x200" onClick={() => alert('Chaplaincy clicked!')} /> */}
        <GridCard title="The Student handbook and Code of Conduct" imageUrl="https://via.placeholder.com/300x200" onClick={() => alert('ICT services clicked!')} />
        <GridCard title="Medical Services" imageUrl={MedicalService} onClick={() => alert('Health services clicked!')} />
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
            title="Pan-Atlantic University Chaplaincy"
            content="Strathmore University Leos popularly known as Strathmore Leos was founded in 2003. It consists of two teams, the sevens team and the fifteens’ team with an involvement of over 60 players."
            buttonText="Find out more"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InfoBox
            title="The Student Handbook and Code of Conduct"
            content="Higher Education Loans Board (HELB) is currently receiving applications for Diplomas, Undergraduate, and Post-graduate applicants."
            buttonText="Download Here"
            onClick={() => alert('to add feature that downloads the doc.')}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Services;
