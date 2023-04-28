import React, { PureComponent } from 'react'
import store from '../store/index';
import { increment } from '../store/actionsCeators'

export class home extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: store.getState().counter
    }
  }

  changeCounter = (counter) => {
    store.dispatch(increment(counter))
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
        <h2>Home Counter: {counter}</h2>
        <div>
          <button onClick={e => this.changeCounter(1)}>+1</button>
          <button onClick={e => this.changeCounter(5)}>+5</button>
          <button onClick={e => this.changeCounter(8)}>+8</button>
        </div>
      </div>
    )
  }
}

export default home