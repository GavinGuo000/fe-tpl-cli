/**
 * @file mock数据 - home
 * @author gavinguo
 *
 */

import Mock from 'mockjs';

Mock.mock('/newdev2/login/userinfo/get.ajax', 'post', {
    data: {
        'id|+1': 1,
        'userid|100-200': 1,
        'status|1': true, // 状态
        'username': '@cname', // 名称
        'createtime': '@datetime("yyyy-MM-dd HH:mm:ss")' // 创建日期
    }
});
