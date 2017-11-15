/**
 * Created by wangxuquan on 2017/8/10.
 */
import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions'
import { person } from './person';
const { SHOW_ALL } = VisibilityFilters;

/**
 * 这是一个Reducer
 * @param state
 * @param action
 * @returns {NodeFilter|*}
 */
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}

/**
 * 这是另一个Reducer
 * @param state
 * @param action
 * @returns {*}
 */
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ];
        default:
            return state
    }
}

/**
 * 这里通过 redux的combineReducers 将上述两个Reducer结合到一起。
 */
const todoApp = combineReducers({
    visibilityFilter,
    todos,
    person
});

export default todoApp