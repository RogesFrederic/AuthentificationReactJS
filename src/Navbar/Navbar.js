import React from "react";
import {Link} from "react-router-dom";

export class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.deconnexion = this.deconnexion.bind(this)
    }

    deconnexion = () => {
        let username = JSON.parse(localStorage.getItem('current-user')).username
        let logs = JSON.parse(localStorage.getItem('logs/'+ username))
        logs = logs ? logs : []
        let date =  new Date()
        logs.push({ action: "Deconnexion", currenttime: date.toLocaleString("fr-fr")})
        localStorage.setItem('logs/'+ username, JSON.stringify(logs))
        localStorage.removeItem("current-user");
        this.props.handleDeconnexion()
    }

    render() {
        let contentNavBar 
        this.isAuthentificate = this.props.isAuthentificate
        if (this.isAuthentificate) {
            contentNavBar = <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/profile">Profil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/event">Journal</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" onClick={this.deconnexion} to="/login">Déconnexion</Link>
                </li>
            </ul>
        }
        else {
            contentNavBar = <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                </li>
            </ul>;
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Projet Encadré</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                            { contentNavBar }
                        
                    </div>
                </div>
            </nav>
        )
    }
}