import React from 'react';
import './Profile.css';

export class Profile extends React.Component {
    componentDidMount() {  
        let username = JSON.parse(localStorage.getItem('current-user')).username
        let logs = JSON.parse(localStorage.getItem('logs/'+ username))
        logs = logs ? logs : []
        let date =  new Date()
        logs.push({ action: "A consulté son profil", currenttime: date.toLocaleString("fr-fr")})
        localStorage.setItem('logs/'+ username, JSON.stringify(logs))
    }

    render() {
        let user = this.props.user
        return <div className="container">
            <h3>Profil</h3>
            <div className="row mb-3">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Nom</h5>
                            {user.username}
                        </div>
                    </div>
                </div>
                
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Prénom</h5>
                            {user.firstname}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Adresse</h5>
                            {user.profile.adresse}
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Code postal</h5>
                            {user.profile.codepostal}
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Ville</h5>
                            {user.profile.ville}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}