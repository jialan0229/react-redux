/*
 * @Author: 0927
 * @Date: 2023-04-27 18:16:25
 * @LastEditors: 0927
 * @LastEditTime: 2023-04-27 18:18:47
 * @Description: 
 */
import { INCREMENT, DECREMENT } from './constants.js';

export const increment = ((counter) => ({
  type: INCREMENT,
  counter
}))

export const decrement = ((counter) => ({
  type: DECREMENT,
  counter
}))