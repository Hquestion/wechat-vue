/**
 * Created by Administrator on 2016/7/1.
 */
// import VueResource from 'vue-resource'
import httpService from './httpService';
import { cache } from './feCache';
var isAuth;
export default {
    isAuth : function(id){
        var that = this;
        return new Promise(function(resolve, reject){
            if(typeof isAuth !== 'undefined') {
                isAuth ? resolve(true) : reject(false);
            }else {
                httpService.post('/WX_Login.ashx', {
                    key: id
                }).then(function(res){
                    isAuth = true;
                    that.cacheUserInfo(res.msg).then(function(){
                        resolve(true);
                    });
                }, function(res){
                    isAuth = false;
                    reject(false);
                });
            }
        });
    },
    updateAuth: function(boo){
        isAuth = boo;
    },
    cacheUserInfo: function(id){
        return httpService.post('/WXInterface011.ashx', {
            userid: id
        }).then(function(res){
            cache.userInfo = res;
        });
    }
}