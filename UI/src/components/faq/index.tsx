import { Box, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { grey } from '../../context/theme';

const faqs = [
  {
    question: "What services does the Student Affairs Office provide?",
    answer: "The Student Affairs Office supports your holistic development, offering guidance on academic, personal, and career matters. Services include medical assistance, counseling, extracurricular activities, career support, mentoring, and more."
  },
  {
    question: "How can I join a student club at PAU?",
    answer: "To join any of the approved student clubs, simply send an email to the club's official address. More information about the clubs and their email addresses can be found on our Student Affairs website."
  },
  {
    question: "What sports facilities are available at PAU?",
    answer: "PAU offers a variety of sports, including football, basketball, volleyball, tennis, and aerobics. We also host inter-hostel and inter-university competitions to encourage physical activity and teamwork."
  },
  {
    question: "What is the FIG Programme, and who is it for?",
    answer: "The Freshman Integration and Guidance (FIG) Programme is designed for first-year students to help ease their transition into university life. Senior students provide guidance and support through regular activities and mentorship."
  },
  {
    question: "How can I find internship opportunities at PAU?",
    answer: "PAU’s Career and Internship Unit provides resources and guidance for internship placements."
  },
  {
    question: "What is the role of the Guidance Counselor at PAU?",
    answer: "The Guidance Counselor provides academic, personal, and emotional support to students."
  },
  {
    question: "How can I participate in the Work-Study Programme?",
    answer: "PAU offers a Work-Study Programme for students interested in gaining work experience while studying. To apply, reach out to the Student Affairs Office for available opportunities and guidelines."
  },
  {
    question: "What mental health resources are available for students?",
    answer: "The Health and Wellness Team works with the Guidance Counselor to provide mental health support and ensure students' psychological well-being throughout their time at PAU."
  },
  {
    question: "What are PAU’s policies on alcohol, smoking, and dress code?",
    answer: "PAU has specific policies regarding alcohol consumption, smoking, and dress code, which students are expected to follow. Detailed information is available in the PAU Student Handbook."
  },
  {
    question: "What is the purpose of Town Hall Meetings?",
    answer: "Town Hall Meetings are organized to give students a platform to voice their concerns, suggestions, and grievances. The Student Affairs Office addresses these issues to improve the student experience."
  },
  {
    question: "Can I start my own student business?",
    answer: "Yes, contact the Student Affairs Office for guidelines and approval."
  }
];

const Faq = () => {
  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4, md: 6 },
        backgroundColor: grey,
        borderRadius: '15px',
        margin: { xs: 1, sm: 2, md: 3 },
        width: '100%',
        maxWidth: { xs: '100%', sm: '90%', md: '100%' },
        mx: 'auto',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: '1.5rem', md: '1.95rem' },
          position: 'relative',
          display: 'inline-block',
          textAlign: 'center',
          '::after': {
            content: '""',
            display: 'block',
            width: '50%',
            height: '3px',
            backgroundColor: 'primary.main',
            margin: '5px auto 0',
            borderRadius: '2px',
          },
        }}
      >
        Frequently Asked Questions
      </Typography>

      {/* FAQ section */}
      <Grid container spacing={2} sx={{ mt: 4 }}>
        {faqs.map((faq, index) => (
          <Grid item xs={12} key={index}>
            <Accordion sx={{backgroundColor: grey}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 'bold' }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Faq;
