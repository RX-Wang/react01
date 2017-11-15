/**
 * Created by wangxuquan on 2017/8/10.
 */
/*
 * action 类型
 */

export const ADD_TODO               = 'ADD_TODO';
export const COMPLETE_TODO          = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER  = 'SET_VISIBILITY_FILTER';

export const GROWING_UP  = 'GROWING_UP';
export const GROWED_UP  = 'GROWED_UP';
export const GROW_UP_SYNC  = 'GROW_UP_SYNC';
export const GROW_UP_ASYNC  = 'GROW_UP_ASYNC';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ALL        : 'SHOW_ALL',
    SHOW_COMPLETED  : 'SHOW_COMPLETED',
    SHOW_ACTIVE     : 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */

/* export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function completeTodo(index) {
    return { type: COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
} */

export function growing_up(isGrowing) {
    return { type: GROWING_UP, isGrowing : isGrowing }
}

export function growed_up(isGrowing) {
    return { type: GROWED_UP, isGrowing : isGrowing }
}

export function grow_up_sync(growed_age){
    return {type : GROW_UP_SYNC, age : growed_age }
}

export function grow_up_async(growed_age){
    return (dispatch) => {
        dispatch(growing_up(true));
        setTimeout(() => {
            dispatch(growed_up(false));
            dispatch({type : GROW_UP_ASYNC, age : growed_age });
        }, 3000);
    }
}