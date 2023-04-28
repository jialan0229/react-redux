/*
 * @Author: 0927
 * @Date: 2023-04-26 17:42:09
 * @LastEditors: 0927
 * @LastEditTime: 2023-04-27 17:55:42
 * @Description:  store入口
 */
import { createStore } from 'redux';
import reducer from './reducer.js';

// 创建store
const store = createStore(reducer);

export default store;