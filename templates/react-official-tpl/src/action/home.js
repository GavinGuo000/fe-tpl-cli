/**
 * @file home action creators
 * @author gavinguo
 */

import {actionTypes as ACTION_TYPES} from '@/reducer';
import services from '@/common/services/home';

// 数字每次递增+1
export const onChangeNumber = () => (dispatch, getState) => {
    let number = getState().home.number;
    dispatch({
        type: ACTION_TYPES.NUMBER_ADD,
        payload: ++number
    });
};

// 获取数据
export const getUserinfo = () => (dispatch, getState) => {
    services.getUserinfo().then(res => {
        console.log(res.data.data.username);
        dispatch({
            type: ACTION_TYPES.AIR_TIPS,
            payload: res.data.data.username
        });
    })
    .catch(function (error) {
        console.log(error);
    });
};
