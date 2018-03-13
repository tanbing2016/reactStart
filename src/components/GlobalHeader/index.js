import React, { Component } from 'react';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import img from '../../images/anran.png';
import './index.css';

const { Header } = Layout;

export default class GlobalHeader extends Component {
    render() {
        const { login, onMenuClick } = this.props;
        const menu = (
            <Menu onClick={onMenuClick}>
                <Menu.Item key='resetPassword'><Icon type='lock' />修改密码</Menu.Item>
                <Menu.Divider />
                <Menu.Item key='logout'><Icon type='logout' />退出登录</Menu.Item>
            </Menu>
        );
        return (
            <Header className='app-header'>
                <div className='logo'>便e批商户管理系统</div>
                <div className='right'>
                    <Dropdown overlay={menu}>
                        <span className="action">欢迎光临:&nbsp;{login.workername} <Icon type='down' /></span>
                    </Dropdown>
                </div>
            </Header>
        )
    }
}