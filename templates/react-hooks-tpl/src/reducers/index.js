/**
* @file rootReducer
* @author gavinguo
* @date 2020-6-28
*/

import {createBrowserHistory as createHistory} from 'history';
import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import {combinActionTypes} from '@/common/utils';
import header, {actionTypes as headerActionTypes} from './header';
import home, {actionTypes as homeActionTypes} from './home';

// 创建历史对象
const history = createHistory();

// 供其他地方使用全部的actionTypes
export const actionTypes = combinActionTypes({
    headerActionTypes,
    homeActionTypes
});

export default combineReducers({
    router: connectRouter(history),
    header,
    home
});
