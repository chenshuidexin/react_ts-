import React, { PropsWithChildren } from 'react';
import './index.less';
import { RouteComponentProps } from 'react-router-dom';
import { connect, DispatchProp } from 'react-redux';
import HomeHeader from '@/routes/Home/components/HomeHeader/index';
import { CombinedState } from '@/typings/state';
import { HomeState } from '@/typings/state';
import mapDispatchToProps from '@/store/actions/profile';
import actions from '@/store/actions/home';



type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface Params { }
type Props = PropsWithChildren<RouteComponentProps<Params> & StateProps & DispatchProps>;//路由属性 函数返回值  对象类型
function Home(props: Props) {//不能把接口类型写死，灵活应用
    return (
        <>
            <HomeHeader currentCategory={props.currentCategory}
                setcurrentCategory={props.setcurrentCategory}
            />
        </>
    )
}

const mapStateToProps = (state: CombinedState): HomeState => state.home;//传进去老状态就会返回新状态的值了

export default connect(mapStateToProps, mapDispatchToProps)(Home)




/**
 *因为此组件是由路由渲染出来的
 * 所以属性对象会包括路由属性
 * 另外此组件需要连接仓库 connect
 */