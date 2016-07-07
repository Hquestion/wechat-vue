/**
 * Created by Administrator on 2016/7/5.
 */
export default {
    deepCopy: function(arr){
        "use strict";
        return JSON.parse(JSON.stringify(arr));
    },
    pluck: function(arr, key){
        "use strict";
        return arr.map(function(item){
            return item[key];
        });
    }
}