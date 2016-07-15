import Vue from 'vue';
import Main from './MainEntry';
import MintUI from 'mint-ui';
import 'animate.css/animate.min.css';
import 'mint-ui/lib/style.css';
import './assets/css/app.css';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueTouch from 'vue-touch';
import {request, response} from './service/httpInterceptor';
import { configRouter } from './routerConfig';
import WyFilter from './filter/wyFilter';

require('es6-promise').polyfill();

Vue.config.debug = true;

Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueTouch);
Vue.use(WyFilter);
/* eslint-disable no-new */
Vue.config.devtools = true;
Vue.http.options.emulateJSON = true;
Vue.http.options.crossOrigin = true;
// Vue.http.options.xhr = {withCredentials: true};
Vue.http.options.emulateHTTP = true;
Vue.http.interceptors.push(request, response);

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
router.start(myApp, '#App');