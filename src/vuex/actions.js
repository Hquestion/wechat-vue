/**
 * Created by Administrator on 2016/7/5.
 */
import { INIT_TITLE, SET_USER_CARD , USER_SIGN_FAIL, USER_SIGN_SUCCESS, GET_USER_ACHIEVEMENT,
    GET_SUBJECTS, GET_ERROR_QUESTIONS_SUCCESS,GET_ERROR_QUESTIONS_FAIL,REMOVE_QST_SUCCESS, REMOVE_QST_FAIL} from './types';
import api from '../api';

export const initTitle = ({dispatch}, title) => {
    dispatch(INIT_TITLE, title);
};

export const setUserCard = ({dispatch}, user) => {
    dispatch(SET_USER_CARD, user);
};

export const userSign = ({dispatch}, user) =>{
    return api.userSign(user).then((res)=>{
        dispatch(USER_SIGN_SUCCESS, res);
    },(res)=>{
        dispatch(USER_SIGN_FAIL, res);
    });
};

export const getUserAchievement = ({dispatch}) => {
    api.getUserUseInfo().then(function(res){
        dispatch(GET_USER_ACHIEVEMENT, res);
    });
};

export const getSubjectList = ({dispatch}) => {
    return api.getSubjects().then(function(res){
        dispatch(GET_SUBJECTS, res.msg);
    });
};

export const getErrorQuestions = ({dispatch}, subjectId) => {
    return api.getErrorQuestionsBySubject(subjectId).then(function(res){
        dispatch(GET_ERROR_QUESTIONS_SUCCESS, res);
    }, function(res){
        dispatch(GET_ERROR_QUESTIONS_FAIL, res);
    });
};

export const removeQstFromErrorNote = ({dispatch}, questionId) => {
    return api.removeQstFromErrorQustions(questionId).then(function(res){
        dispatch(REMOVE_QST_SUCCESS, res);
    }, function(res){
        dispatch(REMOVE_QST_FAIL, res);
    });
};