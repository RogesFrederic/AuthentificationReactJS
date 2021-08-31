import React from "react";
import './Login.css';
import Users from '../users.json';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {      
            username: 'defaut',
            password: '',
            loginError: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeUsername(event) {
        this.setState({username: event.target.value})
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value})
    }

    handleSubmit(event) {
        Users.forEach((user) => {
           if (user.username === this.state.username && user.password === this.state.password ) {
               localStorage.setItem('current-user', user.username)
               this.props.handleConnexion()
           }
           this.setState({loginError: true})
        });
        event.preventDefault()
    }

    displayLoginError = () => {
        if (this.state.loginError) {
            return <div className="alert alert-danger" role="alert">
                Erreur d'authentification
            </div>
        }
    }

    render() {
        return <div className="mt-5">
            <form className="w-50 m-auto" onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    {this.displayLoginError()}
                </div>
                <div className="mb-3">
                    <label htmlFor="user" className="form-label">Utilisateur</label>
                    <input type="text" value={this.state.username} onChange={this.handleChangeUsername} className="form-control" id="user" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input type="password" value={this.state.password} onChange={this.handleChangePassword} className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Valider</button>
            </form>
        </div>
    }   
}