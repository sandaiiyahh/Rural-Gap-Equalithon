import React from 'react';
// import { Router, Redirect, Route, Switch } from 'react-router-dom';
// import Webcam from 'react-webcam';
import Permissions from './components/Permissions';
import './App.css';

function App() {
  return (
    <div className="App">
      {
        /* <Webcam /> */
        <Permissions />
      }
    </div>
  );
}

export default App;
