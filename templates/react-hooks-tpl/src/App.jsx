/**
 * @file 主文件
 * @author gavinguo
 * @date 2020/6/28
 **/

import React from 'react';
import Header from '@/common/components/Header/index';
import Footer from '@/common/components/Footer/index';
import Rounter from './router/index';
import '@baidu/one-ui/lib/index.css';
require('@baidu/one-ui-v4/es/index.css');
import '@baidu/one-ui-pro/lib/index.css';
import './resource/style/reset.less';
import 'antd/dist/antd.css';

export default () => (
    <div>
        <Header />
        <Rounter />
        <Footer />
    </div>
);
