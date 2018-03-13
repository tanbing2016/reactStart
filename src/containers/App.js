import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, message,DatePicker } from 'antd'
import GlobalHeader from '../components/GlobalHeader';
import LeftMenu from './LeftMenu';
import TabList from './tabList'
import ResetPassword from './LoginUser/ResetPassword'
import * as loginUserActions from '../actions/loginUserActions'
import request from '../utils/request';
import * as cont from '../config/constant';

import '../css/app.css';
import moment from 'moment';

// 推荐在入口文件全局设置 locale
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class App extends Component {
    handleMenuClick = ({ key }) => {
        if (key === 'resetPassword') {
            this.props.dispatch(loginUserActions.setPasswordModalVisible(true));
        }
        if (key === 'logout') {
            request(cont.logout, {
                body: {}
            }).then((data) => {
                if (data.code === 0) {
                    window.location.href = "/";
                }
                if (data.code >= 1) {
                    message.error(data.errmsg);
                }
            })
        }
    }
    render() {
        const { login, dispatch } = this.props;
        return (
            <Layout className='app'>
                <GlobalHeader
                    login={login}
                    dispatch={dispatch}
                    onMenuClick={this.handleMenuClick}
                />
                <Layout className='app-container' id='appContainer'>
                    <LeftMenu />
                    <Layout className='app-content'>
                        <TabList history={this.props.history} />
                    </Layout>
                </Layout>
                {/* <Footer>Footer</Footer> */}
                <ResetPassword />
            </Layout>
        )
    }
}

export default connect(state => ({
    login: state.login.login
}))(App);