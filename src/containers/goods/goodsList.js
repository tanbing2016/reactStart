import React, { Component } from 'react';
import {} from 'antd';
import {PropTypes} from 'prop-types';
import { connect } from 'react-redux';
import * as lacs from '../../actions/loginActions';
import * as tab from '../../actions/tabsActions';
import request from '../../utils/request';
import '../../css/common.css';
import {
  Link,
} from 'react-router-dom';
import * as cont from '../../config/constant';
class goodsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource:[],//数据源
        }
        this.columns = [
            {
                title: '序号',
                dataIndex: 'bianhao',
                key: 'bianhao',
            }
        ]
    }
    componentDidMount() {
        
    }
    componentWillUnmount(){
    }
    changePage(value){
        this.setState({page:value-1},()=>{
            // this.getList();
        })
    }
    render() {
        let pagination={
            total:this.state.count,
            pageSize:20,
            defaultCurrent:1,
            onChange:(value)=>this.changePage.call(this,value)
        };
        return (
           <div style={{color:'#333',padding:'0 15px'}}>
               商品列表
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        tabs:state.tabs,
    }
}
export default connect(mapStateToProps)(goodsList);