import { Box, Container, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import useRecorder from './hooks/useRecorder';
import RecorderControls from './RecorderControls';
import RecordingsList from './RecordingsList';

const useStyles = makeStyles((theme) => ({
    recorderPaper: {
        padding: theme.spacing(3),
    },
    listPaper: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(3),
    },
}));

const AudioRecorder = () => {
    const classes = useStyles();

    const { recorderState, ...handlers } = useRecorder();
    const { audio } = recorderState;
    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Paper elevation={3} className={classes.recorderPaper}>
                    <RecorderControls recorderState={recorderState} handlers={handlers} />
                </Paper>
                <Box mt={3}>
                    <RecordingsList audio={audio} />
                </Box>
            </Box>
        </Container>
    );
};

export default AudioRecorder;
