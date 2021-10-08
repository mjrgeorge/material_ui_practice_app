import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import CustomColorThemeProvider from './themesColor/CustomColorThemeProvider';
// import CustomFontThemeProvider from './themesFont/CustomFontThemeProvider';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CustomColorThemeProvider>
        {/* <CustomFontThemeProvider> */}
          <CssBaseline />
          <App />
        {/* </CustomFontThemeProvider> */}
      </CustomColorThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);