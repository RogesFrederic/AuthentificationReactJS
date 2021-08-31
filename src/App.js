import './App.css';
import {Login} from './Login/Login';
import { Profile } from './Profile/Profile';
import { Navbar } from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthentificate: false
    }
    this.handleDeconnexion = this.handleDeconnexion.bind(this)
    this.handleConnexion = this.handleConnexion.bind(this)
  }
  
  handleDeconnexion() {
    this.setState({isAuthentificate: false})
  }

  handleConnexion() {
    console.log("connexion")
    this.setState({isAuthentificate: true})
  }

  render() {
    return (
      <Router>
        <Navbar isAuthentificate={this.state.isAuthentificate} handleDeconnexion={this.handleDeconnexion} />
        <Switch>
          <Route path="/login">
            <Login isAuthentificate={this.state.isAuthentificate} handleConnexion={this.handleConnexion} />
          </Route>
          <Route path="/profile">
            <Profile isAuthentificate={this.state.isAuthentificate} />
          </Route>
          <Route>
            Non mais c'est quoi cet URL
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;