/**
 * @file routes config
 * @author gavinguo
 **/

import React from 'react';
import Home from '@/component/Home/index.jsx';
import Demo1 from '@/component/Demo1/index.jsx';

// 路由配置文件
export const MENU_ROUTES = [
    {
        key: 'home',
        label: '首页',
        path: '/home',
        component: Home
    },
    {
        key: 'demo1',
        label: 'Demo1',
        path: '/search',
        component: Demo1
    }
];
