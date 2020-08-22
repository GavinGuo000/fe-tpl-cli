/**
* @file homeReducer
* @author gavinguo
* @date 2020-6-28
*/

import {combineReducers} from 'redux';
import {combinActionTypes} from '@/common/utils';
import number, {actionTypes as numberActionTypes} from './number';
import air, {actionTypes as airActionTypes} from './air';

// 供其他地方使用全部的actionTypes
export const actionTypes = combinActionTypes({
    numberActionTypes,
    airActionTypes
});

export default combineReducers({
    number,
    air
});
