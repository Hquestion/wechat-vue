/**
 * Created by Administrator on 2016/7/7.
 */
import httpService from '../service/httpService';
export default {
    userSign: function(user){
        return new Promise(function(resolve, reject){
            resolve(user);
        });
    },
    getUserUseInfo: function(){
        return httpService.post('/WXInterface037.ashx');
    }
}