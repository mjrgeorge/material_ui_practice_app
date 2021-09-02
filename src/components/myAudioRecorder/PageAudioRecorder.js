import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import AudioRecorder from './AudioRecorder';

const useStyles = makeStyles(() => ({
    linkStyle: {
        textDecoration: 'none',
    },
}));
const PageAudioRecorder = () => {
    const classes = useStyles();

    return (
        <Box m={3} p={3}>
            <AudioRecorder />
            <Typography variant="h5" color="primary" gutterBottom>
                Recently Added
            </Typography>
            <Link to="/student/studyContent/audioRecordView" className={classes.linkStyle}>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                    #Audio Test Record-1
                </Typography>
            </Link>
        </Box>
    );
};

export default PageAudioRecorder;
