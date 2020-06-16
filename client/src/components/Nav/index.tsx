import React, { PropsWithChildren } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {History} from 'history';
//从 4.0 开始，antd 不再内置 Icon 组件，请使用独立的包 @ant-design/icons。
import { LeftCircleOutlined } from '@ant-design/icons';
import './index.less';
type Props = PropsWithChildren<{history:History}>//路由仓库

function Nav(props: Props) {
    return (
        <nav className="nav-header">
            <LeftCircleOutlined  onClick={() => props.history.goBack()} />
            {props.children}
        </nav>
    )


}
export default Nav;