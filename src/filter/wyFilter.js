/**
 * Created by Administrator on 2016/7/5.
 */
;(function(){
    "use strict";
    var wyFilter = {};
    wyFilter.install= function(vue){
        vue.filter('arrayToStr', function(input, key, splitor){
            if(Array.isArray(input)) {
                var pluck = input.map(function(item){
                    return typeof key === 'undefined' ? item : item[key];
                });
                return pluck.join(splitor);
            }else {
                return input;
            }
        });
    };
    if (typeof exports == "object") {
        module.exports = wyFilter;
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ 
            return wyFilter 
        });
    } else if (window.Vue) {
        window.VueTouch = wyFilter;
        Vue.use(wyFilter)
    }
})();