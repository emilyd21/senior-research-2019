import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {render} from 'react-dom';

import './index.css';
import Home from "./components/Home";
import Profile from "./components/Profile";
import Team from "./components/Team";
import Stats from "./components/Stats";
import Login from "./components/Login";
import Navigation from "./components/Navigation";


class App extends Component {
  
render () {
    return (
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/profile" component={Profile} />
            <Route path="/team" component={Team} />
            <Route path="/stats" component={Stats} />
            <Route path="/login" component={Login} />
          </Switch>
      </Router>
    );
  }
}

render(<App />, window.document.getElementById('app'));
export default App; 