import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./fonts.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from './context/theme.ts';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthProvider>

  </Router>
)
