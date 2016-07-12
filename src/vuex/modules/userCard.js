/**
 * Created by Administrator on 2016/7/7.
 */
import { SET_USER_CARD, USER_SIGN_FAIL, USER_SIGN_SUCCESS } from '../types';
import api from '../../api';

// 该模块的初始状态
const state = {
    user: {}
};

// 相关的 mutations
const mutations = {
    [SET_USER_CARD] (state, user) {
        state.user = Object.assign({}, state.user, user);
    },
    [USER_SIGN_SUCCESS](state, user) {
        state.user = {...state.user, signDays: (state.user.signDays || 0) + 1, isSign: true};
    }
};

export default {
    state,
    mutations
}