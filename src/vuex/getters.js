/**
 * Created by Administrator on 2016/7/6.
 */
export const getAppTitle = function({state}){
    return state.app.title;
};

export const getUserCardInfo = ({state}) => state.userCard.user;