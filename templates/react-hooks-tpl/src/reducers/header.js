/**
* @file 导航 reducers
* @author gavinguo
* @date 2020/06/28
*/

import {getActionTypes} from '@/common/utils';

export const actionTypes = getActionTypes({
    HEADER_ROUTE: null
});

export default (state = 'home', action) => {
    switch (action.type) {
        case actionTypes.HEADER_ROUTE:
            return action.payload;
        default:
            return state;
    }
};
