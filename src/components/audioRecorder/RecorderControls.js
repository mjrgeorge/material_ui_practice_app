import { Box, Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import MicIcon from '@material-ui/icons/Mic';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { formatMinutes, formatSeconds } from './utils/format-time';

const RecorderControls = ({ recorderState, handlers }) => {
    const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
    const { startRecording, saveRecording, cancelRecording } = handlers;

    return (
        <Container maxWidth="xs">
            <Grid container>
                <Grid item container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4" color="primary" align="center" gutterBottom>
                            Audio Recorder
                        </Typography>
                        <TextField fullWidth required label="Title here" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth required label="Description here" variant="outlined" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" justifyContent="center" alignItems="center">
                    <Grid item>
                        <Box mt={3}>
                            {initRecording && <div />}
                            <Typography variant="h3" color="secondary" display="inline">
                                {formatMinutes(recordingMinutes)}
                            </Typography>
                            <Typography variant="h3" color="secondary" display="inline">
                                :
                            </Typography>
                            <Typography variant="h3" color="secondary" display="inline">
                                {formatSeconds(recordingSeconds)}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        {initRecording && (
                            <IconButton
                                style={{ color: 'red' }}
                                title="Cancel recording"
                                onClick={cancelRecording}
                            >
                                <CancelIcon fontSize="large" />
                            </IconButton>
                        )}
                        {initRecording ? (
                            <IconButton
                                edge="end"
                                title="Save recording"
                                disabled={recordingSeconds === 0}
                                onClick={saveRecording}
                            >
                                <SaveIcon fontSize="large" />
                            </IconButton>
                        ) : (
                            <IconButton
                                color="primary"
                                edge="end"
                                title="Start recording"
                                onClick={startRecording}
                            >
                                <MicIcon fontSize="large" />
                            </IconButton>
                        )}
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <Button variant="outlined" color="secondary" style={{ width: '100px' }}>
                            Clear
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" color="primary" style={{ width: '100px' }}>
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
export default RecorderControls;
