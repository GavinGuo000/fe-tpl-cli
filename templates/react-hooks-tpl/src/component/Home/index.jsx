/**
* @file 首页UI
* @author gavinguo
* @date 2020-6-28
*/

import React from 'react';
import {useSelector, useDispatch, useStore} from 'react-redux';
import {onChangeNumber, getUserinfo} from './handler.js';

const home = () => {
    const dispatch = useDispatch();
    const getState = useStore().getState;
    const {number, air} = useSelector(state => state.home);
    return (
        <div>
            <div className='home'>
                Home
            </div>
            <button onClick={() => onChangeNumber({dispatch, getState})}>add</button>
            <p>{number}</p>
            <button onClick={() => getUserinfo({dispatch, getState})}>获取api接口</button>
            <p>{air}</p>
        </div>
    );
};

export default React.memo(home);
