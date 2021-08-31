import React from 'react';
import './Profile.css';
import { Redirect } from 'react-router-dom';

export class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    redirect = () => {
        if (this.isAuthentificate) {
            return <Redirect to="/profile" />
        }
    }

    render() {
        this.isAuthentificate = this.props.isAuthentificate
        return <div className="container">
            {this.redirect()}
            <h3>Profil</h3>
            <div className="row mb-3">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Nom</h5>
                            Michou
                        </div>
                    </div>
                </div>
                
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Prénom</h5>
                            Michel
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Adresse</h5>
                            3 rue des chouchoux
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Code postal</h5>
                            14123
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Ville</h5>
                            Mondeville-sur-Mer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}