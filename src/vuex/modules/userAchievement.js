/**
 * Created by Administrator on 2016/7/12.
 */
import { GET_USER_ACHIEVEMENT } from '../types';
import api from '../../api';

// 该模块的初始状态
const state = {
    achievement: {}
};

// 相关的 mutations
const mutations = {
    [GET_USER_ACHIEVEMENT] (state, achievement) {
        state.achievement = achievement;
    }
};

export default {
    state,
    mutations
}