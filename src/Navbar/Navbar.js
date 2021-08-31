import React from "react";
import {Link} from "react-router-dom";

export class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.deconnexion = this.deconnexion.bind(this)
    }

    deconnexion = () => {
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