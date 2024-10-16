import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./fonts.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from './context/theme.ts';
import { BrowserRouter as Router } from 'react-router-dom';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>
)
