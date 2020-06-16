import { RouterState } from 'connected-react-router';
import { HomeState } from '@/store/reducers/home';
import { MineState } from '@/store/reducers/mine';
import { ProfileState } from '@/store/reducers/profile';
//自己构建RootState  根状态-->合并后的状态
export interface CombinedState {
    home: HomeState;
    mine: MineState;
    profile: ProfileState;
    router: RouterState;
}