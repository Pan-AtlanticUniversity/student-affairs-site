import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { dark, disabled } from '../../context/theme';

interface ProfileCardProps {
  imageUrl: string;
  name: string;
  role: string;
  contact?: string;
  mail?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, role, contact, mail }) => {
  return (
    <>
      <Typography variant="h6" color={dark} noWrap>
        {role}
      </Typography>
      <Box
        component={'img'}
        src={imageUrl}
        alt={name}
        sx={{
          width: { xs: "35%", sm: "150px", lg: '200px' },
          aspectRatio: '1/1',
          borderRadius: '50%',
          backgroundColor: 'info.main'
        }}

      />
      <Stack direction={'column'} alignItems={'center'} sx={{ gap: 0.5 }}>
        <Typography variant="body1" color={disabled}>
          {name}
        </Typography>
        <Typography variant="body2" color={disabled}>
          {mail}
        </Typography>
        <Typography variant="body2" color={disabled}>
          {contact}
        </Typography>
      </Stack>
    </>
  );
};

export default ProfileCard;
