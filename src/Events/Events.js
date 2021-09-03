import React from 'react';
import { Event } from './Event';

export class Events extends React.Component {
    render() {
        let user = this.props.user
        const logs = JSON.parse(localStorage.getItem("logs/"+ user.username))
        console.log(logs)
        return (
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Action</th>
                        <th>Horaire</th>
                    </tr>
                </thead>
                <tbody>
                    { logs.map(element => {
                        return <Event log= {element} />;
                    }) }
                </tbody>
            </table>
        )
    }
}