import React from 'react';
import { Grid, Card, CardMedia, Typography, Box, Stack } from '@mui/material';
import { grey } from '../../context/theme';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
  <Grid item xs={12} sm={6} lg={4} xl={3}>
    <Card
      onClick={onClick}
      sx={{
        position: 'relative',
        borderRadius: 3, // Rounded corners for the card

        backgroundColor: grey,
        padding: 1.5,

        aspectRatio: "1/1",


        overflow: 'hidden',
        width: '100%', // Ensures responsiveness
        cursor: 'pointer',
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        image={imageUrl}
        loading="lazy"
        alt={title}
        sx={{
          borderRadius: '8px', // Rounded corners for the image
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
          marginInline: 1.5,
          marginBottom: 1.5,
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
          backdropFilter: 'blur(10px)', // Frosted glass effect
          color: grey,
          padding: '15px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          borderRadius: '8px',
          transition: 'background-color 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.4)', // Lightens overlay on hover
          },
        }}
      >
        {/* Title and Arrow Icon in a Row */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            '&:hover .chevron-icon': {
              transform: 'translateX(5px)', // Move icon slightly to the right on hover
            },
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: '1rem',
              fontWeight: '500',
              letterSpacing: '0.5px',
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)', // Adds slight shadow for readability
              flexGrow: 1, // Ensures title takes up remaining space
            }}
          >
            {title}
          </Typography>

          {/* Right Arrow Icon beside the title */}
          <ChevronRightIcon
            className="chevron-icon" // Add a class to the icon to target it
            sx={{
              fontSize: '2rem', // Increase the size of the arrow icon
              transition: 'transform 0.3s ease-in-out',
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
