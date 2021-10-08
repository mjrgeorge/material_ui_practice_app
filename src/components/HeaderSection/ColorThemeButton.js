import { MenuItem, Select } from '@material-ui/core';
import React, { useContext } from 'react';
import { CustomColorThemeContext } from '../../themes/CustomThemeProvider';

const ColorThemeButton = () => {
    const { currentColorTheme, setColorTheme } = useContext(CustomColorThemeContext);

    const handleColorThemeChange = (event) => {
        setColorTheme(event.target.value);
    };

    return (
        <>
            <Select
                value={currentColorTheme}
                onChange={handleColorThemeChange}
                autoWidth
                disableUnderline
            >
                <MenuItem value="normal">LIGHT</MenuItem>
                <MenuItem value="dark">DARK</MenuItem>
                <MenuItem value="moon">MOON</MenuItem>
            </Select>
        </>
    );
};

export default ColorThemeButton;
