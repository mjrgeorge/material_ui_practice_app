import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import AudioRecorder from './components/audioRecorder/AudioRecorder';
import Home from './components/Home';
import PageAudioRecorder from './components/myAudioRecorder/PageAudioRecorder';
import './style.css';

function App() {
  return (
    <Router>
      <div>
        <ButtonGroup color="primary" >
          <Button>
            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
          </Button>
          <Button>
            <Link to="/audioRecorder" style={{ textDecoration: 'none' }}>Audio Recorder</Link>
          </Button>
          <Button>
            <Link to="/pageAudioRecorder" style={{ textDecoration: 'none' }}>Page Audio Recorder</Link>
          </Button>
        </ButtonGroup>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/audioRecorder">
            <AudioRecorder />
          </Route>
          <Route exact path="/pageAudioRecorder">
            <PageAudioRecorder />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
