import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import CustomThemeProvider from './themes/CustomThemeProvider';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CustomThemeProvider>
        <CssBaseline />
        <App />
      </CustomThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);