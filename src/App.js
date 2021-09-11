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
import { Provider, ErrorBoundary } from '@rollbar/react'; // <-- Provider imports 'rollbar' for us

function App() {
  const rollbarConfig = {
    accessToken: "968cb10b639e40a1b4b216bbb320280c",
    environment: 'production',
  };

  return (
    <Provider config={rollbarConfig}>
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
    </Provider>
  );
}

export default App;
