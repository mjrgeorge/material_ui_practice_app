import { MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';

const FontSize = () => {
    const [currentTheme, setCurrentTheme] = useState('normalFont');

    const handleFontThemeChange = (event) => {
        setCurrentTheme(event.target.value);
    };

    return (
        <>
            <Select
                value={currentTheme}
                onChange={handleFontThemeChange}
                autoWidth
                disableUnderline
            >
                <MenuItem value="normalFont">Default</MenuItem>
                <MenuItem value="smallFont">SMALL</MenuItem>
                <MenuItem value="largeFont">LARGE</MenuItem>
            </Select>
        </>
    );
};

export default FontSize;
