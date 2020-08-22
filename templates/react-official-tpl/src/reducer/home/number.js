/**
* @file home reducers
* @author gavinguo
* @date 2020/06/28
*/

import {getActionTypes} from '@/common/utils';

export const actionTypes = getActionTypes({
    NUMBER_ADD: null
});

export default (state = 0, action) => {
    switch (action.type) {
        case actionTypes.NUMBER_ADD:
            return action.payload;
        default:
            return state;
    }
};
