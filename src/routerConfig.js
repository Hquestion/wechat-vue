/**
 * Created by Administrator on 2016/6/27.
 */
import Vue from 'vue';
import AuthenticateService from './service/authenticateService';
export function configRouter(router) {
    router.map({
        '/bind': {
            name: 'bind',
            component: function(resolve){
                require(['./components/bind/Bind.vue'], resolve)
            }
        },
        '/': {
            component: function(resolve){
                require(['./App.vue'], resolve);
            },
            subRoutes: {
                '/': {
                    name: 'home',
                    title: '主页',
                    hideTitle: true,
                    component: require('./components/Home')
                },
                '/action': {
                    name: 'action',
                    title: '我的动态',
                    component: require('./components/Action.vue')
                },
                '/klass': {
                    name: 'klass',
                    title: '我的班级',
                    component: require('./components/Klass.vue')
                },
                '/analysis': {
                    name: 'analysis',
                    title: '分析',
                    component: require('./components/Analysis.vue')
                },
                '/exercise': {
                    name: 'exercise',
                    title: '练习',
                    component: require('./components/Exercise')
                },
                '/mine': {
                    name: 'mine',
                    title: '我的',
                    component: require('./components/Mine.vue')
                }
            }
        }
    });

    //没找到匹配路径，进入首页
    router.redirect({
        '*': '/'
    });

    router.beforeEach(function(transition){
        if(transition.to.query.id) {
            window.openId = transition.to.query.id;
        }
        if(window.openId) {
            transition.to.query.id = window.openId;
            AuthenticateService.isAuth(openId).then(function(){
                transition.next();
            }, function(){
                router.go({
                    name: 'bind',
                    query: {
                        id: window.openId
                    }
                });
                transition.next();
            });
        }else {
            router.go({
                name: 'bind',
                query: {
                    id: window.openId
                }
            });
            transition.next();
        }
    });
}