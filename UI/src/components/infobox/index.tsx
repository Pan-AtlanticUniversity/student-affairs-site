import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { grey } from '../../context/theme';

interface InfoBoxProps {
  title: string;
  content: string;
  listItems?: string[];
  footerText?: string; // New prop for text after the list
  buttonText?: string;
  onClick?: () => void;
  height?: string | number;
  titleFontSize?: string | object;
  contentFontSize?: string | object;
}

/**
 * Custom reusable InfoBox component
 */
const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  content,
  listItems,
  footerText, // Use new footerText prop
  buttonText,
  onClick,
  height = '100%',
  titleFontSize = { xs: '1.25rem', md: '1.5rem' },
  contentFontSize = { xs: '1rem', md: '1.15rem' },
}) => (
  <Card sx={{ height: height, borderRadius: '8px', backgroundColor: grey }}>
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
        sx={{ fontSize: titleFontSize }}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        color="text.secondary"
        gutterBottom
        sx={{ fontSize: contentFontSize, paddingLeft: 1 }}
      >
        {content}
      </Typography>
      <Typography
        component="ul"
        color="text.secondary"
        gutterBottom
        sx={{
          fontSize: contentFontSize,
          paddingLeft: 3,
          margin: 0,
          listStyleType: 'disc',
        }}
      >
        {listItems && listItems.map((item, index) => (
          <Typography component="li" key={index} sx={{ marginBottom: 0.5 , fontSize: contentFontSize}}>
            {item}
          </Typography>
        ))}
      </Typography>
      {footerText && (
        <Typography
          component="p"
          color="text.secondary"
          sx={{ fontSize: contentFontSize, paddingTop: 1 }}
        >
          {footerText}
        </Typography>
      )}
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
