/**
 * @file 入口文件
 * @author gavinguo
 * @date 2020/6/28
 **/

import React from 'react';
import ReactDOM from 'react-dom';
// createStore 构造 项目唯一的store, applyMiddleware用来拓展thunk 中间件
import {
    compose,
    createStore,
    applyMiddleware
} from 'redux';
// Provider 用于结合react和redux;
import {Provider} from 'react-redux';
import {createBrowserHistory as createHistory} from 'history';
import {
    routerMiddleware,
    ConnectedRouter
} from 'connected-react-router';
// 中间件，用来处理异步请求获得的数据
import thunk from 'redux-thunk';
// reducer合集
import reducers from './reducers';
// 主jsx文件
import App from './App.jsx';

// 创建历史对象
const history = createHistory();

// 调试工具
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 生成store
const store = createStore(
    reducers,
    composeEnhancer(
        applyMiddleware(
            thunk,
            routerMiddleware(history),
        )
    )
);

// 如果是本地开发，引入mock数据
if (process.env.PROXY_TO === 'dev') {
    require('../mock');
}

// 渲染组件
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    );
};

render();

// 热加载
if (module.hot) {
    module.hot.accept('../src', () => {
        console.log('[HMR] Webpack Hot Module Replacement SUCCESS');
        render();
    });
}
