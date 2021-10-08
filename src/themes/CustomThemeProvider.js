import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import React, { useState, createContext } from 'react';
import getFontTheme from './themesFont/base';
import getColorTheme from './themesColor/base';

export const CustomColorThemeContext = createContext({
    currentColorTheme: 'light',
    setColorTheme: null,
});


export const CustomFontThemeContext = createContext({
    currentFontTheme: 'medium',
    setFontTheme: null,
});

const CustomThemeProvider = (props) => {
    const { children } = props;

    const currentColorTheme = localStorage.getItem('appColorTheme') || 'light';

    const [colorThemeName, setColorThemeName] = useState(currentColorTheme);

    const myColorTheme = getColorTheme(colorThemeName);

    const setColorTheme = (name) => {
        localStorage.setItem('appColorTheme', name);
        setColorThemeName(name);
    };

    const colorContextValue = {
        currentColorTheme: colorThemeName,
        setColorTheme: setColorTheme,
    };

    const currentFontTheme = localStorage.getItem('appFontTheme') || 'medium';

    const [fontThemeName, setFontThemeName] = useState(currentFontTheme);

    const myFontTheme = getFontTheme(fontThemeName);

    const setFontTheme = (name) => {
        localStorage.setItem('appFontTheme', name);
        setFontThemeName(name);
    };

    const fontContextValue = {
        currentFontTheme: fontThemeName,
        setFontTheme: setFontTheme,
    };

    const theme = createMuiTheme(myColorTheme, myFontTheme);

    return (
        <CustomColorThemeContext.Provider value={colorContextValue}>
            <CustomFontThemeContext.Provider value={fontContextValue}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </CustomFontThemeContext.Provider>
        </CustomColorThemeContext.Provider>
    );
};

export default CustomThemeProvider;
