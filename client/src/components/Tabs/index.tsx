import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
//从 4.0 开始，antd 不再内置 Icon 组件，请使用独立的包 @ant-design/icons。
import { HomeOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import './index.less';
interface Props {

};
function Tabs(_props: Props) {
    return (
        <footer>
            <NavLink exact to="/"><HomeOutlined  /><span> 首页 </span></NavLink>
            <NavLink to="/mine"><ShoppingCartOutlined /><span> 购物车 </span></NavLink>
            <NavLink to="/profile"><UserOutlined  /><span> 个人中心 </span></NavLink>
        </footer>
    )


}
export default Tabs;