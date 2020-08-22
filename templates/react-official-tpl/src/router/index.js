/**
 * @file 路由入口
 * @author gavinguo
 * @date 2020/6/28
 **/

import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from '@/container/home';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}
