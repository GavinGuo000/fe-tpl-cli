/**
 * @file mock数据 - 首页
 * @author gavinguo
 *
 */

import Mock from 'mockjs';

Mock.mock('home/serinfo/get.ajax', 'post', {
    data: {
        username: 'searchlab123456',
        admin: false,
        loginSuccess: true,
        userId: 630152
    }
});
