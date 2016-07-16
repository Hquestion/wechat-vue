/**
 * Created by Administrator on 2016/7/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
// 导入各个模块的初始状态和 mutations
// import cart from './modules/cart'
// import products from './modules/products'
import app from './modules/app';
import userCard from './modules/userCard';
import userAchievement from './modules/userAchievement';
import errorNote from './modules/errorNote';

Vue.use(Vuex);

export default new Vuex.Store({
    // 组合各个模块
    modules: {
        // cart,
        // products
        app,
        userCard,
        userAchievement,
        errorNote
    },
    strict: true,
    plugins: []
})