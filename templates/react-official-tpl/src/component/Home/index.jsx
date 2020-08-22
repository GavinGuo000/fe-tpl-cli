/**
* @file 首页UI
* @author gavinguo
* @date 2020-6-28
*/

import React, {PureComponent} from 'react';
import './style.less';

export default class Home extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrap">
                <div className="home">
                    Home
                </div>
                <button onClick={this.props.onChangeNumber}>add</button>
                <p>{this.props.number}</p>
                <button onClick={this.props.getUserinfo}>获取api接口</button>
                <p>{this.props.air}</p>
            </div>
        );
    }
}
