import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./fonts.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from './context/theme.ts';
import { AuthProvider } from './context/AuthProvider.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(

  //wrap in auth provider later to enable auth tokens 
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
