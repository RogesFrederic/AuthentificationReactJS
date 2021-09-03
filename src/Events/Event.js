import React from 'react';

export class Event extends React.Component {
    render() {
        return (<tr key={this.props.log.currenttime}>
            <td>{this.props.log.action}</td>
            <td>{this.props.log.currenttime}</td>
        </tr>)
    }
}