import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AudioRecorder from './components/audioRecorder/AudioRecorder';
import Home from './components/Home';
import PageAudioRecorder from './components/myAudioRecorder/PageAudioRecorder';
import MyTextEditor from './components/myTextEditor/MyTextEditor';
import Header from './components/Header';
import './style.css';
import Container from '@mui/material/Container';

function App() {

  return (
    <Container maxWidth="md">
      <Router>
        <Header />
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
          <Route exact path="/textEditor">
            <MyTextEditor />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
