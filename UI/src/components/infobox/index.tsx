import React from 'react';
import { Card, CardContent, Typography, Button} from '@mui/material';


interface InfoBoxProps {
    title: string;
    content: string;
    buttonText: string;
    onClick?:() => void;
  }
  
  /**
   Custom reusable infobox component
   */
  const InfoBox: React.FC<InfoBoxProps> = ({ title, content, buttonText, onClick }) => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {content}
        </Typography>
        <Button variant="outlined" color="primary" onClick={onClick}>
          {buttonText}  
        </Button>
      </CardContent>
    </Card>
  );
  export default InfoBox