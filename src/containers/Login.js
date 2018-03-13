import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, message } from 'antd';
import request from '../utils/request';
import * as lacs from '../actions/loginActions';
import * as cont from '../config/constant';
import img from '../images/logo.png';

import '../css/app.css';

const FormItem = Form.Item;
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // request(cont.login, {body: {
                //     username: values.username,
                //     password: values.password
                // }}).then((data) => {
                //     if(data.code == 1){
                //         message.error(data.errmsg);
                //         dispatch(lacs.loginSuccess(null));
                //     }
                //     if(data.code === 0){
                //         let obj={};
                //         obj.workername=data.item.username;
                //         obj.id=data.item.id;
                //         obj.name=data.item.name;
                //         dispatch(lacs.loginSuccess(obj));
                //     }
                // })
                let obj={username:'谈兵',workername:'高富帅'};
                dispatch(lacs.loginSuccess(obj));
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-container">
                <div className="login-content">
                  <div className="login_logo">
                    <i></i>
                  </div>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <div className='logo1'>便e批商户管理系统</div>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13}} />} placeholder="请输入用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}
export default Form.create()(connect(mapStateToProps)(Login));