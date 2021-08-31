import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export class PrivateRoute extends Route {
    render() {
        return this.props.isAuthentificate ? super.render() : <Redirect to="/" /> 
    }
}