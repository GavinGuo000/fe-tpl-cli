/**
* @file rootReducer
* @author gavinguo
* @date 2020-6-28
*/

import {combineReducers} from 'redux';
import {combinActionTypes} from '@/common/utils';
import home, {actionTypes as homeActionTypes} from './home';

// 供其他地方使用全部的actionTypes
export const actionTypes = combinActionTypes({
    homeActionTypes
});

export default combineReducers({
    home
});
