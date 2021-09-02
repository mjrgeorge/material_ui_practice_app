/* eslint-disable jsx-a11y/media-has-caption */
import {
    Avatar,
    Box,
    Container,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    Typography
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import GradeIcon from '@material-ui/icons/Grade';
import React from 'react';
import useRecordingsList from './hooks/use-recordings-list';

const RecordingsList = ({ audio }) => {
    const { recordings, deleteAudio } = useRecordingsList(audio);

    return (
        <Container maxWidth="xs">
            {recordings.length > 0 ? (
                <>
                    <Box mt={3}>
                        <Typography variant="h5" color="textSecondary" align="center" gutterBottom>
                            Your recordings
                        </Typography>
                    </Box>
                    <List>
                        {recordings.map((record) => (
                            <ListItem key={record.key}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <GradeIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <audio controls src={record.audio} />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        style={{ color: 'red' }}
                                        edge="end"
                                        aria-label="delete"
                                        title="Delete this audio"
                                        onClick={() => deleteAudio(record.key)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </>
            ) : (
                <Box mt={3}>
                    <Typography variant="h5" color="error" align="center" gutterBottom>
                        You don't have records
                    </Typography>
                </Box>
            )}
        </Container>
    );
};
export default RecordingsList;
