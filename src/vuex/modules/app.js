/**
 * Created by Administrator on 2016/7/5.
 */
import { INIT_TITLE } from '../types'

// 该模块的初始状态
const state = {
    title: '云智教育服务'
};

// 相关的 mutations
const mutations = {
    [INIT_TITLE] (state, title) {
        state.title = title;
    }
};

export default {
    state,
    mutations
}