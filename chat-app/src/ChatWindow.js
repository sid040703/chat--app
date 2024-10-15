import { useSelector, useDispatch } from 'react-redux';
import { sendMessage, receiveMessage } from './redux/chatSlice';
import { useState, useEffect } from 'react';
import { Box, Button, TextField } from '@mui/material';
import Message from './Message';

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(receiveMessage('This is a mock message from User2!'));
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  const handleSend = () => {
    if (input.trim() !== '') {
      dispatch(sendMessage(input));
      setInput('');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '80vh' }}>
      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </Box>
      <Box sx={{ display: 'flex', p: 2 }}>
        <TextField
          fullWidth
          label="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={handleSend} variant="contained" sx={{ ml: 2 }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatWindow;
