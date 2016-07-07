/**
 * Created by hexiaolei on 2016/7/4.
 */
import Vue from 'vue';
export default {
    post: function(url, data){
        "use strict";
        return Vue.http.post(url, data).then(function(res){
            console.log(res.json());
        }, function(res){
            console.log(res.json());
        });
    },
    get: function(url, data){
        "use strict";

    }
}