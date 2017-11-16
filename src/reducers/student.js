/**
 * Created by wangxuquan on 2017/8/10.
 */
import { CHANGE_ADDRESS,CHANGE_SCHOOLADDRESS} from '../actions'

/**
 * 这是一个Reducer,用于初始化 store中的state的结构和默认值。
 * @param state
 * @param action
 * @returns {NodeFilter|*}
 */
const defaultState = {
    grade   : 6,
    name    : 'Diana',
    sex     : 'girl',
    schoolAddress : '月亮'
};
export function student(state = defaultState, action) {
    switch (action.type) {
        //监听了重名的 action.type
        case CHANGE_ADDRESS:    // eslint-disable-next-line
            return {
                ...state,
                schoolAddress : action.address
            }
        //监听 学校地址变更 Action    
        case CHANGE_SCHOOLADDRESS:
            return {
                ...state,
                schoolAddress : action.schoolAddress
            }     
        default:
            return state
    }
}


//export default person;