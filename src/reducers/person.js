/**
 * Created by wangxuquan on 2017/8/10.
 */
import { GROWING_UP, GROWED_UP ,GROW_UP_SYNC ,GROW_UP_ASYNC} from '../actions'

/**
 * 这是一个Reducer,用于初始化 store中的state的结构和默认值。
 * @param state
 * @param action
 * @returns {NodeFilter|*}
 */
const defaultState = {
    age     : 10,
    name    : 'Diana',
    sex     : 'girl',
    books   : ['语文','数学','英语'],
    isGrowing : false
};
export function person(state = defaultState, action) {
    switch (action.type) {
        case GROWING_UP:
            return {
                ...state,
                isGrowing : true
            };
            break;
        case GROWED_UP:
            return {
                ...state,
                isGrowing : false
            };
            break;
        case GROW_UP_SYNC:
            return {
                ...state,
                age : state.age + action.age
            }
            break;
        case GROW_UP_ASYNC:
            return {
                ...state,
                age : state.age + action.age
            }      
        default:
            return state
    }
}


//export default person;