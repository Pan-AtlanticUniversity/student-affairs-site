import React from 'react';
import { Box, Card, Typography, Avatar } from '@mui/material';

interface ProfileCardProps {
  imageUrl: string;
  name: string;
  role: string;
  contact?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, role, contact }) => {
  return (
    <Card
      sx={{
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        textAlign: 'center',
        maxWidth: '350px',
        margin: 'auto',
        height: "100%",
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {/* Circular image */}
        <Avatar
          alt={name}
          src={imageUrl}
          sx={{
            width: 150,
            height: 150,
            marginBottom: '16px',
            border: '5px solid #fff',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        />
      </Box>
      <Typography variant="h6" component="div" sx={{ fontWeight: '600', marginBottom: '8px' }}>
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '8px' }}>
        {role}
      </Typography>
      <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>
        {contact}
      </Typography>
    </Card>
  );
};

export default ProfileCard;
