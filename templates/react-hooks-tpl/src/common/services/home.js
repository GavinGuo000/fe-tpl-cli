/**
 * @file home - service层
 * @author gavinguo
 */
import axios from 'axios';

const services = {};

/**
 * 获取用户信息
 *
 * @param {Object} params 请求参数
 * @param {Object} extraOpts 配置参数
 * @return {Object} response Promise
 */
services.getUserinfo = (params = {}) => {
    const path = '/home/serinfo/get.ajax';
    return axios.post(path);
};

export default services;
