/**
 * Created by Administrator on 2016/7/7.
 */
import { SET_USER_CARD } from '../types'

// 该模块的初始状态
const state = {
    user: {
       userName: '张涵予',
       schoolName: '南京市九龙中学',
       className: '初三一班',
       isVip: true,
       points: '468',
       vipLevel: '3',
       isSign: false,
       signDays: '50'
    }
};

// 相关的 mutations
const mutations = {
    [SET_USER_CARD] (state, user) {
        if(!user.isSign) {
            user.isSign = true;
        }
        state.user = user;
    }
};

export default {
    state,
    mutations
}