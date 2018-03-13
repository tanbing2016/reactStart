import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import request from '../utils/request';
import * as cont from '../config/constant';
import * as lacs from '../actions/loginActions';
import App from './App';
import Login from './Login';
import {
    Route,
    withRouter,
} from 'react-router-dom';

class RootApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            login: false
        }
    }
    componentDidMount() {
        const { dispatch } = this.props;
        let _this = this;
        request(cont.logininfo, {}).then((data) => {
            if (data.code >= 1) {
                dispatch(lacs.loginSuccess(null));
            }
            if (data.code === 0) {
                let obj = {};
                obj.workername = data.item.username;
                obj.id=data.item.id;
                obj.name=data.item.name;
                dispatch(lacs.loginSuccess(obj));
            }
            _this.setState({ loading: false })
        })
    }
    render() {
        return this.state.loading ? <div style={{ textAlign: 'center', paddingTop: '300px' }}><Spin size='large' /></div> : (
            this.props.login.login == null
                ? <Login />
                : (
                    <div style={{ width: '100%', height: '100%' }}>
                        <Route path="/" component={App} />
                    </div>
                )
        )
    }
}

function mapStateToProps(state) {
    return {
        login: state.login,
        print: state.print,
    }
}
export default withRouter(connect(mapStateToProps)(RootApp));