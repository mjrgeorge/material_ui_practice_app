import * as React from 'react';
import { Button, ButtonGroup } from "@material-ui/core";
import { Link } from "react-router-dom";
import FontSize from './FontSize';
import MultipleTheme from './MultipleTheme';

const HeaderSection = () => {

    return (
        <>
            <ButtonGroup color="primary" >
                <Button>
                    <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                </Button>
                <Button>
                    <Link to="/textEditor" style={{ textDecoration: 'none' }}>Text Editor</Link>
                </Button>
                <Button>
                    <Link to="/audioRecorder" style={{ textDecoration: 'none' }}>Audio Recorder</Link>
                </Button>
                <Button>
                    <Link to="/pageAudioRecorder" style={{ textDecoration: 'none' }}>Page Audio Recorder</Link>
                </Button>
            </ButtonGroup>
            <br />
            <br />
            <ButtonGroup color="secondary" >
                <Button>
                    <FontSize />
                </Button>
                <Button>
                    <MultipleTheme />
                </Button>
            </ButtonGroup>
        </>
    )
}

export default HeaderSection
