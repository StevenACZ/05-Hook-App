import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Link
} from "react-router-dom";

import NavBar from './NavBar';

import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

const AppRouter = () => {
  return (
    <div>
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route exact path="/" component={ HomeScreen } />
            <Route exact path="/about" component={ AboutScreen } />
            <Route exact path="/login" component={ LoginScreen } />

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>      
    </div>
  )
}

export default AppRouter
