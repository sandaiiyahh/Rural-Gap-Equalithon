import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Webcam from 'react-webcam';
import Permissions from './components/Permissions';
import MediaSelect from './components/MediaSelect';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Webcam /> */}
          <Route exact path="/" component={Permissions} />
          <Route path="/start" component={MediaSelect} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
