import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { green, orange } from '@mui/material/colors';

const outerTheme = createTheme({
    palette: {
        secondary: {
            main: orange[500],
        },
    },
});

const innerTheme = createTheme({
    palette: {
        secondary: {
            main: green[500],
        },
    },
});

const Demo = () => {
    return (
        <ThemeProvider theme={outerTheme}>
            <Checkbox defaultChecked color="secondary" />
            <ThemeProvider theme={innerTheme}>
                <Checkbox defaultChecked color="secondary" />
                <Checkbox defaultChecked color="secondary" />
            </ThemeProvider>
        </ThemeProvider>
    );
}
export default Demo;
