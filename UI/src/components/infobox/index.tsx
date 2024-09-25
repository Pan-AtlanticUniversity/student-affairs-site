import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';


interface InfoBoxProps {
  title: string;
  content: string;
  buttonText: string;
  onClick?: () => void;
}

/**
 Custom reusable infobox component
 */
const InfoBox: React.FC<InfoBoxProps> = ({ title, content, buttonText, onClick }) => (
  <Card sx={{ height: '100%', borderRadius: '8px' }}>
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        gap: 1.5
      }}
    >
      <Typography variant="h6" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {content}
      </Typography>
      <Button
        variant="outlined"
        sx={{ width: 'fit-content', borderColor: 'secondary.main', textTransform: "none", paddingY: 1, fontWeight: 300 }}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </CardContent>
  </Card>
);

export default InfoBox