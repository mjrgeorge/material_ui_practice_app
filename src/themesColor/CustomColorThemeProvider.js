import { ThemeProvider } from '@material-ui/core/styles';
import React, { useState, createContext } from 'react';
import getColorTheme from './base';

export const CustomColorThemeContext = createContext({
    currentColorTheme: 'light',
    setColorTheme: null,
});

const CustomColorThemeProvider = (props) => {
    const { children } = props;

    const currentColorTheme = localStorage.getItem('appColorTheme') || 'light';

    const [colorThemeName, setColorThemeName] = useState(currentColorTheme);

    const theme = getColorTheme(colorThemeName);

    const setColorTheme = (name) => {
        localStorage.setItem('appColorTheme', name);
        setColorThemeName(name);
    };

    const contextValue = {
        currentColorTheme: colorThemeName,
        setColorTheme: setColorTheme,
    };

    // console.log(theme);

    return (
        <CustomColorThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </CustomColorThemeContext.Provider>
    );
};

export default CustomColorThemeProvider;
