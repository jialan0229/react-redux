/*
 * @Author: 0927
 * @Date: 2023-04-26 17:37:42
 * @LastEditors: 0927
 * @LastEditTime: 2023-04-28 09:23:18
 * @Description: 
 */
import React, { PureComponent } from 'react'
import Home from './pages/home';
import Profile from './pages/profile';
import './App.css'
import store from './store';

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      pages: '',
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({
        counter: state.counter
      })
    })
  }

  changePage(status) {
    this.setState({ pages: status})
  }

  render() {
    const {  pages, counter } = this.state;
    let contentMessage;
    if(pages === 'basic') {
      contentMessage = (
        <div>
          <h2>App: Counter: { counter }</h2>
          <div className='pages'>
            <Home />
            <Profile />
          </div>
        </div>
      )
    }
    return (
      <div>
        <h2 onClick={e => this.changePage('basic')}>redux基本使用</h2>
        <h2 onClick={e => this.changePage('optimize')}>redux优化使用</h2>
        { contentMessage  }
      </div>
    )
  }
}

export default App