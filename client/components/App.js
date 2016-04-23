import React, { Component } from 'react'
import {render} from 'react-dom'
import TopMenu from './TopMenu'

class App extends Component {
  render(){
    return (
      <div>
        <TopMenu />
        <p>This is finally working!</p>

      </div>
    )
  }
}

export default App
// console.log('hello');
//
// render(<h1>Hello World</h1>, document.getElementById('react-container'));
