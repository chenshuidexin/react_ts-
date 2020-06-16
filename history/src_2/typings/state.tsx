import { RouterState } from 'connected-react-router';

//各个接口类型的总和
export interface HomeState {
    currentCategory: string,

}; export interface MineState {


};


interface User {//当前用户信息
    username: string;
    email: string;
    avatar: string
}
export enum LOGIN_TYPES {//枚举
    UN_VALIDATE = 'UN_VALIDATE',//还没有验证登录状态
    LOGINED = 'LOGINED',//已经登录
    UN_LOGINED = 'UN_LOGINED',//的确没有登录
}
export interface ProfileState {
    loginSate: LOGIN_TYPES;
    user: User | null;
    error: string | null
};
//自己构建RootState  根状态-->合并后的状态
export interface CombinedState {
    home: HomeState;
    mine: MineState;
    profile: ProfileState;
    router: RouterState;
}