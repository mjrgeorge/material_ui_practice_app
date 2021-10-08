import { ThemeProvider } from '@material-ui/core/styles';
import React, { useState, createContext } from 'react';
import getTheme from './base';

export const CustomColorThemeContext = createContext({
    currentColorTheme: 'light',
    setColorTheme: null,
});

const CustomThemeProvider = (props) => {
    const { children } = props;

    const currentColorTheme = localStorage.getItem('appTheme') || 'light';

    const [colorThemeName, setColorThemeName] = useState(currentColorTheme);

    const theme = getTheme(colorThemeName);

    const setColorTheme = (name) => {
        localStorage.setItem('appTheme', name);
        setColorThemeName(name);
    };

    const contextValue = {
        currentColorTheme: colorThemeName,
        setColorTheme: setColorTheme,
    };

    return (
        <CustomColorThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </CustomColorThemeContext.Provider>
    );
};

export default CustomThemeProvider;
