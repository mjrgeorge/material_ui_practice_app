import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import CustomThemeProvider from './themes/CustomThemeProvider';
import { CssBaseline } from '@mui/material';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { Typography, Box } from "@mui/material";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'bn', 'hi'],
    fallbackLng: "en",
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

const loadingMarkup = (
  <Box mt={3}>
    <Typography variant="h3" color="red" align="center" gutterBottom> Loading. . .</Typography>
  </Box>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <CustomThemeProvider>
          <CssBaseline />
          <App />
        </CustomThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);