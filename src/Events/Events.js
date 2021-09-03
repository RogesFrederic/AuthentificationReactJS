import React from 'react';

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
                        return (<tr key={element.currenttime}>
                            <td>{element.action}</td>
                            <td>{element.currenttime}</td>
                        </tr>);
                    }) }
                </tbody>
            </table>
        )
    }
}