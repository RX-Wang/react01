/**
 * Created by wangxuquan on 2017/8/10.
 */
import { GROWING_UP, GROWED_UP ,GROW_UP_SYNC ,GROW_UP_ASYNC,CHANGE_ADDRESS,CHANGE_HOMEADDRESS} from '../actions'

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
    isGrowing : false,
    homeAddress : '地球'
};
export function person(state = defaultState, action) {
    switch (action.type) {
        case GROWING_UP:
            return {
                ...state,
                isGrowing : true
            };
        case GROWED_UP:
            return {
                ...state,
                isGrowing : false
            };
        case GROW_UP_SYNC:
            return {
                ...state,
                age : state.age + action.age
            }
        case GROW_UP_ASYNC:
            return {
                ...state,
                age : state.age + action.age
            }
        //监听了重名的 action.type
        case CHANGE_ADDRESS:
            return {
                ...state,
                homeAddress : action.address
            }
        //监听 家庭地址变更 Action    
        case CHANGE_HOMEADDRESS:
            return {
                ...state,
                homeAddress : action.homeAddress
            }    
        default:
            return state
    }
}


//export default person;