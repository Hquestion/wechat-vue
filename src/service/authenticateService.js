/**
 * Created by Administrator on 2016/7/1.
 */
// import VueResource from 'vue-resource'
import httpService from './httpService';
var isAuth;
export default {
    isAuth : function(id){
        console.log('authenticate...');
        return new Promise(function(resolve, reject){
            if(typeof isAuth !== 'undefined') {
                isAuth ? resolve(true) : reject(false);
            }else {
                httpService.post('/WX_Login.ashx', {
                    key: id
                }).then(function(res){
                    isAuth = true;
                    resolve(true);
                }, function(res){
                    isAuth = false;
                    reject(false);
                });
            }
        });
    }
}