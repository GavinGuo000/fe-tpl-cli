/**
 * @file 主文件
 * @author gavinguo
 * @date 2020/6/28
 **/

import React, {Component} from 'react';
import Rounter from './router/index';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
               <Rounter />
            </div>
        );
    }
}
