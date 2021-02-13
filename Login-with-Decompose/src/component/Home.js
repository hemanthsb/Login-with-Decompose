import React, { Component } from 'react';
import Login from './pages/login';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1> Home Page </h1>
                <Login />
            </div>
            
        );
    }

}