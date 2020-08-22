/**
* @file air reducers
* @author gavinguo
* @date 2020/06/28
*/

import {getActionTypes} from '@/common/utils';

export const actionTypes = getActionTypes({
    AIR_TIPS: null
});

export default (state = '', action) => {
    switch (action.type) {
        case actionTypes.AIR_TIPS:
            return action.payload;
        default:
            return state;
    }
};
