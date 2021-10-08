import { MenuItem, Select } from '@material-ui/core';
import React, { useContext } from 'react';
import { CustomColorThemeContext } from '../../themes/CustomThemeProvider';

const MultipleTheme = () => {
    const { currentColorTheme, setColorTheme } = useContext(CustomColorThemeContext);

    const handleThemeChange = (event) => {
        setColorTheme(event.target.value);
    };

    return (
        <>
            <Select
                value={currentColorTheme}
                onChange={handleThemeChange}
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

export default MultipleTheme;
