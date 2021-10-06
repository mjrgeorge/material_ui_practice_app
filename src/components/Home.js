import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Typography } from '@material-ui/core';
import Demo from './Demo';

const Home = () => {

    return (
        <>
            <Box m={5}>
                <Typography variant="h2" color="primary" align="center" gutterBottom>This is a Home Page!</Typography>
            </Box>
            <Typography variant="h4" color="secondary" gutterBottom>Nesting Theme Test</Typography>
            <Demo />
            <Stack spacing={2} direction="row">
                <Typography color="textSecondary" align="center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates velit sunt culpa recusandae harum pariatur iste unde facilis animi totam possimus, ea, blanditiis aspernatur laborum sed laudantium, reprehenderit veniam inventore? </Typography>
                <Button variant="contained" fullWidth>Continue</Button>
            </Stack>
        </>
    )
}

export default Home
