import React, { Component } from 'react'
import TopMenu from './Navigation/TopMenu'
import { Jumbotron, Button } from 'react-bootstrap'

class SettingGoals extends Component {
  render(){
    return (
      <div>
        <TopMenu />
        <h1>Setting Goals</h1>
      </div>
    )
  }
}

export default SettingGoals
