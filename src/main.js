import Vue from 'vue';
import App from './App';
import Main from './MainEntry';
import MintUI from 'mint-ui';
import 'animate.css/animate.min.css';
import 'mint-ui/lib/style.css';
import './assets/css/app.css';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import httpInterceptor from './service/httpInterceptor';
import { configRouter } from './routerConfig';

Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(VueResource);
/* eslint-disable no-new */

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
Vue.http.interceptors.push(httpInterceptor);

router.start(myApp, '#App');
