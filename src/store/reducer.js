/*
 * @Author: 0927
 * @Date: 2023-04-27 17:45:31
 * @LastEditors: 0927
 * @LastEditTime: 2023-04-27 18:11:26
 * @Description: 初始化state数据
 */
import { INCREMENT, DECREMENT } from './constants.js';

// 初始化state数据
const initialState = {
  name: '0927',
  counter: 10
}

// 定义reducer函数：纯函数
function reducer(state = initialState, action) {
  switch (action.type) {
     case INCREMENT:
      return {
      ...state,
        counter: state.counter + action.counter
      }
     case DECREMENT: 
      return {
      ...state,
        counter: state.counter - action.counter
      }
    default:
      return state
  } 
}

export default reducer