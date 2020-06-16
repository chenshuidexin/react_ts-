import { AnyAction } from 'redux';
import { ProfileState, LOGIN_TYPES } from '@/typings/state'


//默认ProfileState的初始值
const initialState: ProfileState = {
    loginSate: LOGIN_TYPES.UN_VALIDATE,//默认为未验证登录状态
    user:null,
    error:null
};
export default function (state: ProfileState = initialState, action: AnyAction): ProfileState {
    return state;
}