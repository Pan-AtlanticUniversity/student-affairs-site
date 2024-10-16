import React from 'react';
import { Avatar, Card, Link, Typography } from '@mui/material';
import { disabled, grey } from '../../context/theme';

interface ProfileCardProps {
  imageUrl: string;
  name: string;
  role?: string;
  contact?: string;
  mail?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, role, contact, mail }) => {
  return (
    <Card
      sx={{
        borderRadius: '8px',
        padding: 2,
        textAlign: 'center',
        width: 'clamp(250px, 100%, 350px)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: grey,
        alignItems: 'center',
        gap: 0.5,
        height: "100%",
      }}
    >
      <Typography variant="body2" color="text.secondary" >
        {role}
      </Typography>
      {/* Circular image */}
      < Avatar
        alt={name}
        src={imageUrl}
        sx={{
          width: 150,
          height: 150,
          marginBottom: 3,
          border: `1px solid ${grey}`,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        }
        }
      />
      <Typography variant="h6" sx={{ fontWeight: '500' }}>
        {name}
      </Typography>

      <Typography variant="body2" color={disabled}>
        <Link
          href={`mailto:${mail}?subject=Meeting Request&body=Hi, I would like to schedule a meeting.`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          {mail}
        </Link>

      </Typography>

      <Typography variant="body2" color={disabled}>
        {contact}
      </Typography>
    </Card >
  );
};

export default ProfileCard;
