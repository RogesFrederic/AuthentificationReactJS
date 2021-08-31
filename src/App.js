import './App.css';
import {Login} from './Login/Login';
import { Profile } from './Profile/Profile';
import { Navbar } from './Navbar/Navbar';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = localStorage.getItem('current-user') ? { isAuthentificate: true } : { isAuthentificate: false }
    this.handleDeconnexion = this.handleDeconnexion.bind(this)
    this.handleConnexion = this.handleConnexion.bind(this)
  }
  
  handleDeconnexion() {
    this.setState({isAuthentificate: false})
  }

  handleConnexion() {
    this.setState({isAuthentificate: true})
  }

  render() {
    let user = localStorage.getItem('current-user')
    return (
      <Router>
        <Navbar isAuthentificate={this.state.isAuthentificate} handleDeconnexion={this.handleDeconnexion} />
        <Switch>
          <PrivateRoute isAuthentificate={!this.state.isAuthentificate} path="/login">
            <Login handleConnexion={this.handleConnexion} />
          </PrivateRoute>
          <PrivateRoute isAuthentificate={this.state.isAuthentificate} path="/profile">
            <Profile  user={JSON.parse(user)} />
          </PrivateRoute>
          <Route>
            Home
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;