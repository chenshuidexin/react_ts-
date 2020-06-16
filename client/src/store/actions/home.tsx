import * as actionTypes from '@/store/action-types';

export default {
    setCurrentCategory(currentCategory: string) {
        return {
            type:actionTypes.SET_CURRRNT_CATEGORY,
            payload:currentCategory
        }
    }
}