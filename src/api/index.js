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
    },
    getSubjects: function(){
        return httpService.post('/WXInterface031.ashx');
    },
    getErrorQuestionsBySubject: function(subjectId, page){
        return httpService.post('/WXInterface002.ashx', {
            CurPage: page || 1,
            SubjectId: subjectId
        });
    },
    removeQstFromErrorQustions: function(id){
        return new Promise(function(resolve, reject){
            resolve(id);
        });
    }
}