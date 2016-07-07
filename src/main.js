import Vue from 'vue';
import Main from './MainEntry';
import MintUI from 'mint-ui';
import 'animate.css/animate.min.css';
import 'mint-ui/lib/style.css';
import './assets/css/app.css';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { sync } from 'vuex-router-sync';
import store from './vuex/store';
import httpInterceptor from './service/httpInterceptor';
import { configRouter } from './routerConfig';
import WyFilter from './filter/wyFilter';

Vue.config.debug = true;

Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(WyFilter);
/* eslint-disable no-new */
Vue.config.devtools = true;

Vue.transition('bounce', {
    enterClass: 'fadeIn',
    leaveClass: 'fadeOut'
});

var myApp = Vue.extend(Main);
var router = new VueRouter({
    history: true,
    saveScrollPosition: false,
    transitionOnLoad: true
});

configRouter(router);
// sync(store, router);

Vue.http.interceptors.push(httpInterceptor);

router.start(myApp, '#App');
