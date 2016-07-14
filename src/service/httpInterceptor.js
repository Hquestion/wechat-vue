/**
 * Created by Administrator on 2016/7/1.
 */
import { Indicator } from 'mint-ui';
var loadingTimer = null;

export const request = function(req, next){
    Indicator.open({
        text: '拼命加载中...',
        spinnerType: 'fading-circle'
    });
    next();
};

export const response = function(res, next){
    clearTimeout(loadingTimer);
    loadingTimer = setTimeout(()=>{
        Indicator.close();
    }, 300);
    next();
};