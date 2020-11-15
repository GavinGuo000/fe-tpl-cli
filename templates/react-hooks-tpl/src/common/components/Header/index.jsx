/**
* @file 头部导航
* @author gavinguo
* @date 2020-6-28
*/

import React, {useEffect} from 'react';
import {useSelector, useDispatch, useStore} from 'react-redux';
import {push} from 'connected-react-router';
import {Nav} from '@baidu/one-ui-pro';
import {actionTypes as ACTION_TYPES} from '@/reducers';
import {MENU_ROUTES} from '@/router/config.js';
import {initRouter} from './handler.js';
import './style.less';

const header = props => {
    const dispatch = useDispatch();
    const getState = useStore().getState;
    const header = useSelector(state => state.header);

    const menu = {
        dataSource: MENU_ROUTES,
        value: header, // 一级导航选中态
        subValue: header, // 二级导航选中态
        onClick: e => {
            dispatch(push(active));
            dispatch({
                type: ACTION_TYPES.HEADER_ROUTE,
                payload: active
            });
        },
        onSubListClick: e => {
            dispatch(push(`/${e.target.value}`));
            dispatch({
                type: ACTION_TYPES.HEADER_ROUTE,
                payload: `${e.target.value}`
            });
        }
    };

    const toolbox = {
        dataSource: []
    };

    const profile = {
        customContent: <div>Hello, World</div>
    };

    const navProps = {
        logo: {
            img: <div>logo</div>
        },
        menu,
        toolbox,
        profile
    };

    useEffect(() => {
        initRouter({dispatch, getState});
    }, []);

    return (
        <div className='dev-header'>
            <Nav {...navProps} />
        </div>
    );
};

export default React.memo(header);
