import React from "react";
import './Login.css';

export class Login extends React.Component {
    
    render() {
        return <div class="mt-5">
            <form className="w-50 m-auto">
                <div className="mb-3">
                    <label htmlFor="user" className="form-label">Utilisateur</label>
                    <input type="email" className="form-control" id="user" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Valider</button>
            </form>
        </div>
    }
}