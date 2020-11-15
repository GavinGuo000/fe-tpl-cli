/**
 * @file 路由入口
 * @author gavinguo
 * @date 2020/6/28
 **/

import React, {Component, Suspense} from 'react';
import {BrowserRouter, Switch, Route, Redirect, withRouter} from 'react-router-dom';

import Entry from '@/component/Entry/index.jsx';
import Loading from '@/common/components/Loading/index';
import {flatten} from '@/common/utils';
import {MENU_ROUTES} from './config';

class Router extends Component {
    render() {
        return (
            <div className='dev-wrap'>
                <Suspense fallback={<Loading />}>
                    <BrowserRouter>
                        <Route
                            path="/"
                            component={props => (
                                <Entry {...props}>
                                    <Switch>
                                        {
                                            flatten(MENU_ROUTES).map((item, key) => (
                                                <Route
                                                    key={item.key}
                                                    path={item.path}
                                                    component={item.component}
                                                    {...props}
                                                />
                                            ))
                                        }
                                    </Switch>
                                </Entry>
                            )}
                        />
                    </BrowserRouter>
                </Suspense>
            </div>
        );
    }
}

export default withRouter(Router);
