import React, { Component } from 'react'
import TopMenu from './TopMenu'
import { Jumbotron, Button } from 'react-bootstrap'

class Dashboard extends Component {
  render(){
    return (
      <div>
        <TopMenu />
        <h1>User Dashboard</h1>
      </div>
    )
  }
}

export default Dashboard
