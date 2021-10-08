import { MenuItem, Select } from '@material-ui/core';
import React, { useContext } from 'react';
import { CustomFontThemeContext } from '../../themesColor/CustomColorThemeProvider';

const FontThemeButton = () => {
    const { currentFontTheme, setFontTheme } = useContext(CustomFontThemeContext);

    const handleFontThemeChange = (event) => {
        setFontTheme(event.target.value);
    };

    return (
        <>
            <Select
                value={currentFontTheme}
                onChange={handleFontThemeChange}
                autoWidth
                disableUnderline
            >
                <MenuItem value="medium">Default</MenuItem>
                <MenuItem value="small">SMALL</MenuItem>
                <MenuItem value="large">LARGE</MenuItem>
            </Select>
        </>
    );
};

export default FontThemeButton;
