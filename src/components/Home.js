import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Typography } from '@material-ui/core';

const Home = () => {

    return (
        <>
            <Box m={5}>
                <Typography variant="h2" color="primary" align="center" gutterBottom>This is a Home Page!</Typography>
            </Box>
            <Typography variant="h4" color="secondary" gutterBottom>Nesting Theme Test</Typography>
            <Typography variant="h6" align="center" gutterBottom> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates velit sunt culpa recusandae harum pariatur iste unde facilis animi totam possimus, ea, blanditiis aspernatur laborum sed laudantium, reprehenderit veniam inventore? </Typography>
            <Stack spacing={2} direction="row">
                <Button variant="contained" fullWidth>Continue</Button>
            </Stack>
        </>
    )
}

export default Home
