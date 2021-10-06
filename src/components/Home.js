import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Typography } from '@material-ui/core';

const Home = () => {

    return (
        <>
            <Box m={5}>
                <Typography variant="h3" color="secondary" align="center">This is a Home Page!</Typography>
            </Box>
            <Stack spacing={2} direction="row">
                <Button variant="contained" fullWidth>Continue</Button>
            </Stack>
        </>
    )
}

export default Home
