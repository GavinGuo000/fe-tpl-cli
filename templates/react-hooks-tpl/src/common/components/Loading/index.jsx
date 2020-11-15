/**
* @file 加载中
* @author gavinguo
* @date 2020-6-28
*/

import React from 'react';
import {Loading} from '@baidu/one-ui';
import './style.less';

const loading = () => {
    return (
        <div className="dev-loading">
            <Loading size="large" type="strong" />
        </div>
    );
};

export default React.memo(loading);
