import React from 'react';
import App from '../App'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Post from './Post'
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={App} exact />
            <Route path='/post/:id' component={Post} />
        </Switch>
    </BrowserRouter>
)

export default Router