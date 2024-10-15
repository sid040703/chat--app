import { Box, Typography } from '@mui/material';

const Message = ({ message }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
      <Typography variant="caption" color="textSecondary">
        {message.user} - {message.timestamp}
      </Typography>
      <Typography variant="body1">{message.message}</Typography>
    </Box>
  );
};

export default Message;
