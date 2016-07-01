/**
 * Created by Administrator on 2016/6/27.
 */
import AuthenticateService from './service/authenticateService';
export function configRouter(router) {
    router.map({
        '/bind': {
            name: 'bind',
            component: function(resolve){
                "use strict";
                require(['./components/bind/Bind.vue'], resolve)
            }
        },
        '/': {
            component: function(resolve){
                "use strict";
                require(['./App.vue'], resolve);
            },
            subRoutes: {
                '/': {
                    name: 'home',
                    component: require('./components/Home')
                },
                '/action': {
                    name: 'action',
                    component: require('./components/Action.vue')
                },
                '/analysis': {
                    name: 'analysis',
                    component: require('./components/Analysis.vue')
                },
                '/exercise': {
                    name: '',
                    component: require('./components/Exercise')
                },
                '/mine': {
                    name: 'mine',
                    component: require('./components/Mine.vue')
                }
            }
        }
    });

    router.beforeEach(function(transition){
        "use strict";
        if(AuthenticateService.isAuth()) {
            transition.next();
        }else {
            router.go('bind');
            transition.next();
        }
    });
}