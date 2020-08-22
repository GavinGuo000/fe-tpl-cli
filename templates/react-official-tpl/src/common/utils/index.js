/**
 * @file util/index
 * @author gavinguo
 **/

import keymirror from 'keymirror';

export const getActionTypes = actionTypes => {
    return keymirror(actionTypes);
};

/**
 * 合并不同层级的actionTypes，如果有相同的则直接抛错
 * 不用把所有actionTypes的定义都放在一起，导致文件太长
 * @param {Object} actionTypes actionTypes
 * @return {Object} actionTypeMap
 */
export const combinActionTypes = actionTypes => {
    const actionTypeMap = {};
    Object.keys(actionTypes).forEach(key => {
        Object.keys(actionTypes[key]).forEach(actionTypeName => {
            if (actionTypeMap.hasOwnProperty(actionTypeName)) {
                throw new Error(`${key} is repeated! please name actionType by module name`);
            }
            actionTypeMap[actionTypeName] = actionTypes[key][actionTypeName];
        });
    });
    return actionTypeMap;
};
