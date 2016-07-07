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

Vue.use(Vuex);

export default new Vuex.Store({
    // 组合各个模块
    modules: {
        // cart,
        // products
        app,
        userCard
    },
    strict: true,
    plugins: []
})