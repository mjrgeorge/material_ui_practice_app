import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './style.css';
import About from './components/About';
import Extra from './components/Extra';
import Home from './components/Home';
import MyBreadcrumb from './components/MyBreadcrumb';
import MyComponent from './components/MyComponent';
import MyMenuBar from './components/myMenuBar/MyMenuBar';
import mySidebar from './components/mySidebar';
import MyVideoPlayer from './components/myVideoPlayer/MyVideoPlayer';
import MyReactVideoPlayer from './components/myReactVideoPlayer/MyReactVideoPlayer';
import VideoSidebar from './components/videoSidebar/VideoSidebar';
import AudioRecorder from './components/audioRecorder/AudioRecorder';
import PageAudioRecorder from './components/myAudioRecorder/PageAudioRecorder';

function App() {
  return (
    <Router>
      <MyBreadcrumb />
      <Switch>
        <Route exact path="/"component={Home} />
        <Route exact path="/pageAudioRecorder"component={PageAudioRecorder} />
        <Route exact path="/audioRecorder"component={AudioRecorder} />
        <Route exact path="/myVideoPlayer"component={MyVideoPlayer} />
        <Route exact path="/myComponent"component={MyComponent} />
        <Route exact path="/myReactVideoPlayer"component={MyReactVideoPlayer} />
        <Route exact path="/videoSidebar"component={VideoSidebar} />
        <Route exact path="/about"component={About} />
        <Route exact path="/extra"component={Extra} />
        <Route exact path="/myMenuBar"component={MyMenuBar} />
        <Route exact path="/mySidebar"component={mySidebar} />
      </Switch>
    </Router>
  );
}

export default App;
