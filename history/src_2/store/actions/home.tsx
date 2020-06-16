import * as actionTypes from '@/store/action-types';

export default {
    setcurrentCategory(currentCategory: string) {
        return {
            type:actionTypes.SET_CURRRNT_CATEGORY,
            payload:currentCategory
        }
    }
}