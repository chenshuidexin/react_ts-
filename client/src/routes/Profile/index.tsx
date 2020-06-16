import React, { PropsWithChildren} from 'react';//{ PropsWithChildren } 用到children才写
import './index.less';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { CombinedState, ProfileState, LOGIN_TYPES } from '@/typings/state';
import mapDispatchToProps from '@/store/actions/home'
import Nav from '@/components/Nav';

type Props = PropsWithChildren<RouteComponentProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps>;//路由属性 函数返回值  对象类型
function Profile(props: Props) {
    let content;
    if (props.loginSate === LOGIN_TYPES.UN_VALIDATE) {
        content = null;
    }
    return (
        <>
            <Nav history={props.history}>个人中心</Nav>
            {content}
        </>
    )
}

const mapStateToProps = (state: CombinedState): ProfileState => state.profile;//传进去老状态就会返回新状态的值了

export default connect(mapStateToProps, mapDispatchToProps)(Profile)














// import React, { PropsWithChildren } from 'react';
// import { connect } from 'react-redux';
// import { RouteComponentProps } from 'react-router-dom';
// import './index.less';
// interface Params { }
// type Props = PropsWithChildren<RouteComponentProps<Params>>;
// function Profile(props: Props) {
//     return (
//         <div>
//             Profile
//         </div>
//     )
// }
// export default connect()(Profile);