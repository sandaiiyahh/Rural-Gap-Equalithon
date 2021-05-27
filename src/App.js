import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Permissions from './components/Permissions';
import MediaSelect from './components/MediaSelect';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Permissions} />
          <Route path="/start" component={MediaSelect} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
