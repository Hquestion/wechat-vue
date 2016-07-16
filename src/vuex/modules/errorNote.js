/**
 * Created by 贺小雷 on 2016/7/16.
 */
import { GET_SUBJECTS, GET_ERROR_QUESTIONS } from '../types';

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
    [GET_ERROR_QUESTIONS] (state, questions){
        state.questions = questions.msg;
    }
};

export default {
    state,
    mutations
}