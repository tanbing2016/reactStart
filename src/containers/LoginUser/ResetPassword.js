import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Form, message, Input } from 'antd'
import request from '../../utils/request';
import * as dk from '../../utils/darkTools';
import * as cont from '../../config/constant';
import * as loginUserActions from '../../actions/loginUserActions'

const FormItem = Form.Item;

const _OBJ = {
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: ''
}

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        props.loginUser.that = this;
        this.state = {
            confirmLoading: false,  //modal保存按钮的loading
        }
        this._keys = [];  //modal表单填写项的key
        
    }
    componentDidMount() {
        this._keys = Object.keys(this.props.form.getFieldsValue());
    }
    handleModalVisible(flag) {
        this.props.dispatch(loginUserActions.setPasswordModalVisible(!!flag));
    }
    setFieldsValue() {
        this.props.form.setFieldsValue(dk._gets(_OBJ, this._keys));
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let _this = this;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log(values);
                if (values.newPassword !== values.repeatNewPassword) {
                    message.error('两次密码不一致！');
                    return;
                }
                let body = dk._gets(values, ['oldPassword', 'newPassword']);
                this.setState({ confirmLoading: true });
                request(cont.changePassword, {
                    body: body
                }).then((data) => {
                    this.setState({ confirmLoading: false });
                    if (data.code === 0) {
                        message.success('重置密码成功！');
                        _this.handleModalVisible();
                    }
                    if (data.code >= 1) {
                        message.error(data.errmsg);
                    }
                })
            }
        });
    }
    render() {
        const { confirmLoading } = this.state;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 10 },
                md: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
                md: { span: 16 },
            },
        };
        return (
            <Modal
                title='重置密码'
                visible={this.props.loginUser.passwordModalVisible}
                okText='保存'
                cancelText='取消'
                onOk={this.handleSubmit}
                onCancel={this.handleModalVisible.bind(this, false)}
                confirmLoading={confirmLoading}
                maskClosable={false}
            >
                <Form
                    onSubmit={this.handleSubmit}
                >
                    <FormItem
                        {...formItemLayout}
                        label='旧密码'
                    >
                        {getFieldDecorator('oldPassword', {
                            rules: [{
                                required: true, message: '请输入旧密码',
                            }],
                        })(
                            <Input type="password" placeholder="请输入旧密码" />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='新密码'
                    >
                        {getFieldDecorator('newPassword', {
                            rules: [{
                                required: true, message: '请输入新密码',
                            }, {
                                min: 6, message: '至少6位'
                            }],
                        })(
                            <Input type="password" placeholder="请输入新密码" />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='确认密码'
                    >
                        {getFieldDecorator('repeatNewPassword', {
                            rules: [{
                                required: true, message: '请再次输入新密码',
                            }, {
                                min: 6, message: '至少6位'
                            }],
                        })(
                            <Input type="password" placeholder="请再次输入新密码" />
                            )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    return {
        loginUser: state.loginUser
    }
}

export default Form.create()(connect(mapStateToProps)(ResetPassword))