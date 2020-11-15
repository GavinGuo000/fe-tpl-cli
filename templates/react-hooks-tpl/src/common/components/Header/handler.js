/**
 * @file home action creators
 * @author gavinguo
 */

import {actionTypes as ACTION_TYPES} from '@/reducers';
import services from '@/common/services/home';
import {flatten} from '@/common/utils';
import {MENU_ROUTES} from '@/router/config.js';
import $ from 'jquery';

// 获取数据
export const getUserinfo = ({dispatch, getState}) => {
    services.getUserinfo().then(res => {
        dispatch({
            type: ACTION_TYPES.USERINFO_ADMIN,
            payload: res.data.data.admin
        });
        dispatch({
            type: ACTION_TYPES.USERINFO_LOGIN,
            payload: res.data.data.loginSuccess
        });
        dispatch({
            type: ACTION_TYPES.USERINFO_USERID,
            payload: res.data.data.userId
        });
        dispatch({
            type: ACTION_TYPES.USERINFO_USERNAME,
            payload: res.data.data.username
        });
    })
    .catch(function (error) {
        dispatch({
            type: ACTION_TYPES.USERINFO_LOGIN,
            payload: false
        });
    });
};

// 初始化路由
export const initRouter = ({dispatch, getState}) => {
    let active = 'home';
    const routerInfo = flatten(MENU_ROUTES).filter(item => location.pathname.indexOf(item.key) > -1);
    if (routerInfo.length > 0) {
        active = routerInfo[0].key;
    }
    dispatch({
        type: ACTION_TYPES.HEADER_ROUTE,
        payload: active
    });

    if (window.history && window.history.pushState) {
        // 监听浏览器前进后退事件
        $(window).off('popstate').on('popstate', function () {
            const routerPopInfo = flatten(MENU_ROUTES).filter(
                item => location.pathname.indexOf(item.key) > -1
            );
            dispatch({
                type: ACTION_TYPES.HEADER_ROUTE,
                payload: Array.isArray(routerPopInfo)
                && routerPopInfo.length > 0
                && routerPopInfo[0].key || 'home'
            });
        });
    }
};
