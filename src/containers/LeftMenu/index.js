import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import './index.css';

import * as lmacs from '../../actions/leftMenuActions';
import * as tab from '../../actions/tabsActions';

import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;


class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }
    componentDidMount() {
        this.props.dispatch(lmacs.getLmenus(this.props.dispatch));
    }
    addTab(menu) {
        let tabs = this.props.tabs, can = true;
        tabs.tabsList.forEach((item, index) => {
            if (item.title === menu.title) {
                can = false;
            }
        })
        if (can) {
            this.props.dispatch(tab.setTabList(menu, tabs.tabsList, menu.id + ""));
        } else {
            //this.props.history.push(menu.url)
            this.props.dispatch(tab.changeActive(menu.id + ""));
        }
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        let menus = this.props.lmenu.menus;
        const _loop = (data) => data.map((item) => {
            if (item.children.length > 0) {
                return (
                    <SubMenu
                        key={item.id}
                        className='leftmenu-item'
                        style={{ paddingLeft: 0 }}
                        title={<span>
                            <Icon type={item.icon} />
                            <span>
                                {item.title}
                            </span>
                        </span>}>
                        {_loop(item.children)}
                    </SubMenu>
                );
            }
            return <Item key={item.id}>
                <Link
                    onClick={this.addTab.bind(this, item)}
                    to=''>
                    {<span>
                        <Icon type={item.icon} />
                        <span>
                            {item.title}
                        </span>
                    </span>}
                </Link>
            </Item>;
        })
        return (
            <Sider width={216} className='app-sider' collapsed={this.state.collapsed}>
                {/* <div className='leftmenu-control' onClick={this.toggle}>
                    <Icon type={this.state.collapsed ? 'right' : 'left'} />
                </div> */}
                <Menu className='leftmenu' mode='inline' theme="dark" defaultSelectedKeys={['1']}>
                    {_loop(menus)}
                </Menu>
            </Sider>
        )
    }
}

function mapStateToProps(state) {
    return {
        lmenu: state.lmenu,
        tabs: state.tabs,
    }
}

export default connect(mapStateToProps)(LeftMenu);