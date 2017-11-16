/**
 * Created by wangxuquan on 2017/8/10.
 */
/*
 * 一、下面是 action 类型
 */

export const ADD_TODO               = 'ADD_TODO';
export const COMPLETE_TODO          = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER  = 'SET_VISIBILITY_FILTER';

export const GROWING_UP  = 'GROWING_UP';
export const GROWED_UP  = 'GROWED_UP';
export const GROW_UP_SYNC  = 'GROW_UP_SYNC';
export const GROW_UP_ASYNC  = 'GROW_UP_ASYNC';
export const CHANGE_ADDRESS  = 'CHANGE_ADDRESS';    //改变地址，如果家庭地址和学校地址都监听它的话会导致两者都发生改变
export const CHANGE_SCHOOLADDRESS  = 'CHANGE_SCHOOLADDRESS';
export const CHANGE_HOMEADDRESS  = 'CHANGE_HOMEADDRESS';


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

//二、下面是 Action 创建函数
export function growing_up(isGrowing) {
    return { type: GROWING_UP, isGrowing : isGrowing }
}

export function growed_up(isGrowing) {
    return { type: GROWED_UP, isGrowing : isGrowing }
}

//改变通用地址的 action creator
export function changeAddress(newAddress){
    return {type : CHANGE_ADDRESS, address : newAddress }
}
//仅改变家庭地址的 action creator
export function changeHomeAddress(newAddress){
    return {type : CHANGE_HOMEADDRESS, homeAddress : newAddress }
}
//仅改变学校地址的 action creator
export function changeSchoolAddress(newAddress){
    return {type : CHANGE_SCHOOLADDRESS, schoolAddress : newAddress }
}

// 同步增长方法
export function grow_up_sync(growed_age){
    return {type : GROW_UP_SYNC, age : growed_age }
}

//异步成长方法
export function grow_up_async(growed_age){
    return (dispatch) => {
        dispatch(growing_up(true));
        setTimeout(() => {
            dispatch(growed_up(false));
            dispatch({type : GROW_UP_ASYNC, age : growed_age });
        }, 3000);
    }
}