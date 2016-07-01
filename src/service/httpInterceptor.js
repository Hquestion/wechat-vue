/**
 * Created by Administrator on 2016/7/1.
 */
export default function(){
    return {
        request: function(req){
            console.log('request send...');
            return req;
        },

        response: function(res){
            setTimeout(function(){
                console.log('request end...');
            }, 500);
            return res;
        }
    }
}