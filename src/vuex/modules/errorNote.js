/**
 * Created by 贺小雷 on 2016/7/16.
 */
import { GET_SUBJECTS, GET_ERROR_QUESTIONS_SUCCESS,GET_ERROR_QUESTIONS_FAIL, REMOVE_QST_SUCCESS, REMOVE_QST_FAIL } from '../types';

// 该模块的初始状态
const state = {
    subjects: [],
    questions: []
};

// 相关的 mutations
const mutations = {
    [GET_SUBJECTS] (state, subject) {
        state.subjects = subject;
    },
    [GET_ERROR_QUESTIONS_SUCCESS] (state, questions){
        state.questions = questions.msg;
    },
    [GET_ERROR_QUESTIONS_FAIL] (state, res){
        state.questions = [];
    },
    [REMOVE_QST_SUCCESS] (state, id) {
        var index = -1;
        index = state.questions.findIndex(function(item){
            return item.questionId === id;
        });
        if(index >= 0) {
            state.questions.splice(index, 1);
        }
    }
};

export default {
    state,
    mutations
}