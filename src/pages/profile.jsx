/*
 * @Author: 0927
 * @Date: 2023-04-27 17:35:12
 * @LastEditors: 0927
 * @LastEditTime: 2023-04-27 18:46:46
 * @Description: 
 */
import React, { PureComponent } from 'react'
import store from '../store/index';
import { decrement } from '../store/actionsCeators'

export class profile extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: store.getState().counter
    }
  }

  changeCounter = (counter) => {
    store.dispatch(decrement(counter))
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({
        counter: state.counter
      })
    })
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>Profile Counter: {counter}</h2>
        <div>
          <button onClick={e => this.changeCounter(1)}>-1</button>
          <button onClick={e => this.changeCounter(5)}>-5</button>
          <button onClick={e => this.changeCounter(8)}>-8</button>
        </div>
      </div>
    )
  }
}

export default profile