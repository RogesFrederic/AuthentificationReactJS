import React from "react";
import './Login.css';

export class Login extends React.Component {
    
    render() {
        return <div >
            <form class="w-50 m-auto">
                <div class="mb-3">
                    <label for="user" class="form-label">Utilisateur</label>
                    <input type="email" class="form-control" id="user" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Mot de passe</label>
                    <input type="password" class="form-control" id="password" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    }
}