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
                    title: '云智教育服务',
                    hideBack: true,
                    belong: 'home',
                    component: require('./components/Home')
                },
                '/action': {
                    name: 'action',
                    title: '我的动态',
                    belong: 'action',
                    component: require('./components/Action.vue')
                },
                '/klass': {
                    name: 'klass',
                    title: '我的班级',
                    belong: 'klass',
                    component: require('./components/Klass.vue')
                },
                '/analysis': {
                    name: 'analysis',
                    title: '分析',
                    belong: 'analysis',
                    component: require('./components/Analysis.vue')
                },
                '/exercise': {
                    name: 'exercise',
                    title: '练习',
                    belong: 'exercise',
                    component: require('./components/Exercise')
                },
                '/mine': {
                    name: 'mine',
                    title: '我的个人中心',
                    belong: 'home',
                    component: require('./components/Mine.vue')
                },
                '/error-note': {
                    name: 'errorNote',
                    title: '我的错题本',
                    belong: 'exercise',
                    component: require('./components/errorNote/ErrorNote.vue')
                },
                '/same-qst-test/:questionId': {
                    name: 'sameQuestionTest',
                    title: '同题检测',
                    belong: 'exercise',
                    component: require('./components/exercise/SameQuestionTest.vue')
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