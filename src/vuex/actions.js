/**
 * Created by Administrator on 2016/7/5.
 */
import { INIT_TITLE, SET_USER_CARD } from './types';

export const initTitle = ({dispatch}, title) => {
    dispatch(INIT_TITLE, title);
};

export const setUserCard = ({dispatch}, user) => {
    dispatch(SET_USER_CARD, user);
};