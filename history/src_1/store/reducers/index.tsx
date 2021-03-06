import { combineReducers, ReducersMapObject, AnyAction, Reducer } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import home from './home';
import mine from './mine';
import profile from './profile';
import history from '@/history';
import { CombinedState } from '@/store/typings/state';
//自己构建RootState  根状态-->合并后的状态
let reducers: ReducersMapObject<CombinedState, AnyAction> = {
    home,
    mine,
    profile,
    router: connectRouter(history)
}
const rootReducer: Reducer<CombinedState, AnyAction> = combineReducers<CombinedState>(reducers);


export default rootReducer;







// export type RootState = {
//     //迭代reducers所有的key reducers[key]是reducer类型  ReturnType返回此函数类型的返回值类型
//     [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
// }