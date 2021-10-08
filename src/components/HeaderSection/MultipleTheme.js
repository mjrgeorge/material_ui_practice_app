import { MenuItem, Select } from '@material-ui/core';
import React, { useContext } from 'react';
import { CustomThemeContext } from '../../themes/CustomThemeProvider';

const MultipleTheme = () => {
    const { currentTheme, setTheme } = useContext(CustomThemeContext);

    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    };

    return (
        <>
            <Select
                value={currentTheme}
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
