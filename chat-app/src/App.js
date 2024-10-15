import { Provider } from 'react-redux';
import { store } from './redux/store';
import ChatWindow from './ChatWindow';
import { Container, Typography } from '@mui/material';
import './App.css'
function App() {
  return (
    <div class="grid-background">
  <div class="radial-background">
    <Provider store={store}>
      <Container sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Chat Application
        </Typography>
        <ChatWindow />
      </Container>
    </Provider>
    </div>
    </div>
  );
}

export default App;
