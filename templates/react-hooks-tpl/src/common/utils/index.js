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

// 数组扁平化
export const flatten = arr => {
    if (!Array.isArray(arr)) {
        return [];
    }
    let res = [];
    arr.map(item => {
        if (Array.isArray(item)) {
            res = res.concat(flatten(item));
        }
        else if (item.children) {
            res = res.concat(flatten(item.children));
        }
        else {
            res.push(item);
        }
    });
    return res;
};

/**
 * create a random GUID legal string of given length
 *
 * @param  {number} len string length
 * @return {string}
 */
const rand16Num = (len = 0) => {
    const result = [];
    for (let i = 0; i < len; i++) {
        result.push('0123456789abcdef'.charAt(Math.floor(Math.random() * 16)));
    }
    return result.join('');
};


/**
 * 生成一个全局唯一的guid，且格式符合guid规范
 * GUID 的格式为“xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx”
 * 其中每个 x 是 0-9 或 a-f 范围内的一个32位十六进制数
 * 第四版的GUID使用了新的算法，其产生的数字是一个伪随机数。
 * 它生成的GUID的第三组数字的第一位是4
 *
 * @return {string} 符合guid格式的字符串
 */
export const guid = () => {
    const current = (new Date()).valueOf().toString();
    return [
        '4b534c46',
        rand16Num(4),
        `4${rand16Num(3)}`,
        rand16Num(4),
        current.substring(0, 12)
    ].join('-');
};
