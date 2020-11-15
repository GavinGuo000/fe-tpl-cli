/**
* @file 首页UI
* @author gavinguo
* @date 2020-6-28
*/

import React from 'react';
import {useSelector} from 'react-redux';
import {flatten} from '@/common/utils';
import {MENU_ROUTES} from '@/router/config';
import './style.less';

const entry = (props) => {
    const header = useSelector(state => state.header);
    const active = flatten(MENU_ROUTES).filter(item => header === item.key);
    let Component = null;

    if (active.length > 0) {
        Component = active[0].component;
    }

    return (
        <div className="dev-content">
            {Component && <Component {...props} />}
        </div>
    );
};

export default React.memo(entry);
