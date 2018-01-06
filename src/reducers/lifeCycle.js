/**
 * Created by wangxuquan on 2017/8/10.
 */
import { CHANGE_NAME } from '../actions'

/**
 * 这是一个Reducer,用于初始化 store中的state的结构和默认值。
 * @param state
 * @param action
 * @returns {NodeFilter|*}
 */
const defaultState = {
    name  : 'Diana'
};
export function lifeCycle(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            console.log('reducer监听到了changeName事件:',action.name);
            return {
                ...state,
                name : action.name
            };
        default:
            return state
    }
}