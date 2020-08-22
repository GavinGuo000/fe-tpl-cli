/**
 * @file 路由入口
 * @author gavinguo
 * @date 2020/6/28
 **/

import React, {Component, Suspense} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

const Home = React.lazy(() => import('../Home/index.jsx'));

export default class Router extends Component {
    render() {
        return (
            <Suspense fallback={<div>loading...</div>}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' component={Home} />
                    </Switch>
                </BrowserRouter>
            </Suspense>
        );
    }
}
