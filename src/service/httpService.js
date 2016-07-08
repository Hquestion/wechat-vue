/**
 * Created by hexiaolei on 2016/7/4.
 */
import config from '../config';
import Vue from 'vue';
import VueResource from 'vue-resource';
import {request, response} from '../service/httpInterceptor';

Vue.use(VueResource);

// Vue.http.options.emulateJSON = true;
Vue.http.options.crossOrigin = true;
// Vue.http.options.xhr = {withCredentials: true};
Vue.http.options.emulateHTTP = true;
Vue.http.interceptors.push(request, response);

export default {
    post: function(url, data){
        url = config.DOMAIN + config.ROUTER + url;
        return new Promise(function(resolve, reject){
            Vue.http({
                url: url,
                method: 'POST',
                body: JSON.stringify(data)
            }).then(function(res){
                res.data = JSON.parse(res.data);
                if(+res.data.code === 0) {
                    resolve(res);
                }else {
                    reject(res);
                }
            }, function(res){
                reject(res);
            });
        });
    },
    get: function(url, data){
        "use strict";

    }
}