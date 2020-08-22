/**
* @file entry container
* @author gavinguo
* @date 2020/06/28
*/

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '@/action/home.js';
import UI from '@/component/Home/index.jsx';

const mapStateToProps = state => {
    return {
        ...state.home
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UI);
