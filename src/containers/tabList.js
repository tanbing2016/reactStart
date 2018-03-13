import React, { Component } from 'react';
import { Tabs, Menu, Dropdown } from 'antd';
import { connect } from 'react-redux';
import * as tab from '../actions/tabsActions';

import { Route } from 'react-router-dom';
import '../css/app.css';
const TabPane = Tabs.TabPane

class tabList extends Component {
    onChange = (e) => {
        this.props.dispatch(tab.changeActive(e))
    }
    onEdit = (e) => {
        let $this = this;
        let tabs = this.props.tabs;
        this.props.dispatch(tab.delTabList(tabs.tabsList, e, $this.props.dispatch))
    }
    handleClick(item, e) {
        e.domEvent.stopPropagation();
        this.props.dispatch(tab[e.key](item.id));
    }
    render() {
        const tabs = this.props.tabs;
        const tabContextMenu = (obj) => (
            <Menu
                onClick={obj.onClick}>
                <Menu.Item key='closeItem'>关闭</Menu.Item>
                <Menu.Item key='closeRight'>关闭右侧标签</Menu.Item>
                <Menu.Item key='closeLeft'>关闭左侧标签</Menu.Item>
                <Menu.Item key='closeOther'>关闭其他</Menu.Item>
                <Menu.Item key='closeAll'>关闭全部</Menu.Item>
                <Menu.Divider />
                <Menu.Item key='toggleBlock'>{!obj.tab.closable ? '锁定': '解锁'}</Menu.Item>
            </Menu>
        );
        let tabList = tabs.tabsList.map((tab, index) => {
            return (
                <TabPane
                    className="tixing"
                    tab={
                        <Dropdown overlay={
                            tabContextMenu({onClick: this.handleClick.bind(this, tab), tab})
                        } trigger={['contextMenu']}>
                            <span style={{ userSelect: 'none' }}>{tab.title}</span>
                        </Dropdown>
                    }
                    closable={!tab.closable}
                    key={tab.id}>
                    <div className="tabcontent"><Route component={require('' + tab.url).default} /></div>
                </TabPane>
            )
        });
        return (
            <div style={{ height: '100%', background: '#fff' }}>
                <Tabs
                    className='rootTab'
                    hideAdd
                    onChange={this.onChange}
                    activeKey={tabs.activeKey}
                    type="editable-card"
                    onEdit={this.onEdit}
                >
                    {tabList}
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tabs: state.tabs,
    }
}
export default connect(mapStateToProps)(tabList);