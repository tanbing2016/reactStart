import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from './containers/RootApp';
import { Provider } from 'react-redux';
import store from './store/index.js';
import {
    HashRouter  as Router,
} from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <Provider store={store}>
            <Router>
                <RootApp />
            </Router>
        </Provider>
    </LocaleProvider>,
    document.getElementById('root')
);