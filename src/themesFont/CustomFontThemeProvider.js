import { ThemeProvider } from '@material-ui/core/styles';
import React, { useState, createContext } from 'react';
import getFontTheme from './base';

export const CustomFontThemeContext = createContext({
    currentFontTheme: 'medium',
    setFontTheme: null,
});

const CustomFontThemeProvider = (props) => {
    const { children } = props;

    const currentFontTheme = localStorage.getItem('appFontTheme') || 'medium';

    const [fontThemeName, setFontThemeName] = useState(currentFontTheme);

    const theme = getFontTheme(fontThemeName);

    const setFontTheme = (name) => {
        localStorage.setItem('appFontTheme', name);
        setFontThemeName(name);
    };

    const contextValue = {
        currentFontTheme: fontThemeName,
        setFontTheme: setFontTheme,
    };

    // console.log(theme);

    return (
        <CustomFontThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </CustomFontThemeContext.Provider>
    );
};

export default CustomFontThemeProvider;
