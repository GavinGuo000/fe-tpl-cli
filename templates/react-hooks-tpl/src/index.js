/**
 * @file 入口文件
 * @author gavinguo
 * @date 2020/6/28
 **/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// reducer合集
import Reducers from './reducers';
// createStore 构造 项目唯一的store, applyMiddleware用来拓展thunk 中间件
import {createStore, applyMiddleware} from 'redux';
// 中间件，用来处理异步请求获得的数据
import thunk from 'redux-thunk';
// Provider 用于结合react和redux;
import {Provider} from 'react-redux';

// 如果是本地开发，引入mock数据
if (process.env.PROXY_TO === 'dev') {
    require('../mock');
}

// 创建store
const store = createStore(Reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
