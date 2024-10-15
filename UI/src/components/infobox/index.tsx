import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { grey } from '../../context/theme';

interface InfoBoxProps {
  title: string;
  content: string;
  buttonText?: string;
  onClick?: () => void;
  height?: string | number; // Adjustable height prop
  titleFontSize?: string | object; // Adjustable title font size, with responsive support
  contentFontSize?: string | object; // Adjustable content font size, with responsive support
}

/**
 * Custom reusable InfoBox component
 */
const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  content,
  buttonText,
  onClick,
  height = '100%', // Default height is 100%
  titleFontSize = { xs: '1.25rem', md: '1.5rem' }, // Responsive title font size
  contentFontSize = { xs: '1rem', md: '1.15rem' }, // Responsive content font size
}) => (
  <Card sx={{ height: height, borderRadius: '8px', backgroundColor: grey}}>
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        gap: 1.5,
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ fontSize: titleFontSize }} // Use responsive titleFontSize prop
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        gutterBottom
        sx={{ fontSize: contentFontSize }} // Use responsive contentFontSize prop
      >
        {content}
      </Typography>
      {buttonText && (
        <Button
          variant="outlined"
          sx={{
            width: 'fit-content',
            borderColor: 'secondary.main',
            textTransform: 'none',
            paddingY: 1,
            fontWeight: 300,
          }}
          onClick={onClick}
        >
          {buttonText}
        </Button>
      )}
    </CardContent>
  </Card>
);

export default InfoBox;
