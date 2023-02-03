import './LoginRouter.css';

import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Router from '../Router';
import LoginPage from './LoginPage';

export default class LoginRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div style={{ height: '100%' }}>
                    <Route path="/login" exact component={LoginPage} />
                    <Route path='/*' exact component={Router} />
                </div>
            </BrowserRouter>

        )
    }
}
