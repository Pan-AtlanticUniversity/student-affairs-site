import { GridCard, InfoBox, UnderlinedText } from '../components';
import { Grid, Typography, Box } from '@mui/material';
import FIG from '../assets/images/FIG/3.jpg';
import Sports from '../assets/images/Clubs and extracurricular/3.jpg';
import Mentor from '../assets/images/Guidance counselling & mentoring/3.jpg';
import MedicalService from '../assets/images/Medical service_.jpg';
import Career from '../assets/images/7.jpg';
import WorkStudy from '../assets/images/1.jpg'


export function Services() {
  return (
    // Updated the margin top to bring the services component closer to the top
    <Box sx={{ padding: '20px' }} marginTop={'-20px'}>
      <UnderlinedText
        text="Our Services"
      />


      <Grid container
        spacing={4}>
        <GridCard title="Student Affairs Office" imageUrl="https://via.placeholder.com/300x200" onClick={() => alert('Dean of students clicked!')} />
        <GridCard title="Student Clubs and Extracurricular Activities" imageUrl={Sports} onClick={() => alert('Clubs and societies clicked!')} />

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

      <Grid container spacing={3} sx={{ marginTop: '20px' }}>
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
    </Box>
  );
}
