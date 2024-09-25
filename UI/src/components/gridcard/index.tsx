import React from 'react';
import { Grid, Card, CardMedia, Typography, Box, Stack } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'; // Icon for the arrow

interface GridCardProps {
  title: string;
  imageUrl: string;
  content?: string;
  date?: string;
  extraInfo?: string;

  /**
   * The onclick prop is optional
   */
  onClick?: () => void;
}

/**
 * Custom reusable grid card component with a glassy overlay and enhanced styling.
 * This grid card component also has an optional onClick prop.
 */
const GridCard: React.FC<GridCardProps> = ({ title, imageUrl, content, date, extraInfo, onClick }) => (
  <Grid item xs={12} sm={6} lg={4}>
    <Card
      onClick={onClick}
      sx={{
        position: 'relative',
        borderRadius: '25px', // Rounded corners for the card
        overflow: 'hidden',
        width: '100%', // Ensures responsiveness
        cursor: 'pointer',
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Adds depth to the card
      }}
    >
      <CardMedia
        component="img"
        height="400"
        image={imageUrl}
        alt={title}
        sx={{
          borderRadius: '12px', // Rounded corners for the image
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)', // Image zoom effect on hover
          },
        }}
      />

      {/* Frosted glass overlay with title, content, date, extraInfo and arrow icon */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
          backdropFilter: 'blur(10px)', // Frosted glass effect
          color: 'white',
          padding: '15px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          transition: 'background-color 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.4)', // Lightens overlay on hover
          },
        }}
      >
        {/* Title and Arrow Icon in a Row */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: '1.2rem',
              fontWeight: '500',
              letterSpacing: '0.5px',
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)', // Adds slight shadow for readability
              flexGrow: 1, // Ensures title takes up remaining space
            }}
          >
            {title}
          </Typography>
          {/* Right Arrow Icon beside the title */}
          <ArrowRightAltIcon
            sx={{
              fontSize: '2rem', // Increase the size of the arrow icon
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateX(5px)', // Move icon slightly to the right on hover
              },
            }}
          />
        </Stack>

        {/* Conditionally render the content */}
        {content && (
          <Typography
            variant="body2"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2, // Limit text lines to 2
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            {content}
          </Typography>
        )}

        {/* Conditionally render extraInfo and date if either exists */}
        {(extraInfo || date) && (
          <Stack direction="row" justifyContent="space-between">
            {extraInfo && (
              <Typography
                variant="caption"
                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                {extraInfo}
              </Typography>
            )}
            {date && (
              <Typography
                variant="caption"
                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                {date}
              </Typography>
            )}
          </Stack>
        )}
      </Box>
    </Card>
  </Grid>
);

export default GridCard;
