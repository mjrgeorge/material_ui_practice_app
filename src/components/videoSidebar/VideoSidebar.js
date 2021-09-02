import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AddBoxIcon from '@material-ui/icons/AddBox';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 240,
        backgroundColor: theme.palette.grey[100],
        borderRadius: 5,
    },
    sidebar: {
        backgroundColor: theme.palette.grey[100],
    },
    listStyle: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        borderRadius: 5,
    },
}));

const VideoSidebar = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion className={classes.sidebar} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel1' ? <RemoveCircleIcon color="secondary" /> : <AddBoxIcon color="secondary" />}
                >
                    <Typography>Subject-1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.listStyle}>
                        <List dense>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Video title-1"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Video title-2"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Video title-3"
                                />
                            </ListItem>
                        </List>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.sidebar} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel2' ? <RemoveCircleIcon color="secondary" /> : <AddBoxIcon color="secondary" />}
                >
                    <Typography>Subject-2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.listStyle}>
                        <List dense>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Video title-1"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Video title-2"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Video title-3"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Video title-4"
                                />
                            </ListItem>
                        </List>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.sidebar} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel3' ? <RemoveCircleIcon color="secondary" /> : <AddBoxIcon color="secondary" />}
                >
                    <Typography>Subject-3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.listStyle}>
                        <List dense>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Video title-1"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Video title-2"
                                />
                            </ListItem>
                        </List>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
export default VideoSidebar;
