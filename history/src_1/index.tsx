// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(<h1>欢迎来到这个项目的实战</h1>,document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigProvider} from 'antd';
import store from './store';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import './assets/style/common.less';
import Home from './routes/Home';//routes 路由组件  一个组件对应着一个页面 页面组件
import Mine from './routes/Mine';
import Profile from './routes/Profile';
import {ConnectedRouter} from 'connected-react-router';
import history from '@/history';
ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <ConfigProvider locale={zh_CN}>
            <main className="main-container">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/mine" exact component={Mine} />
                    <Route path="/profile" exact component={Profile} />
                </Switch>
            </main>
        </ConfigProvider>
    </ConnectedRouter>
</Provider>, document.getElementById('root'));