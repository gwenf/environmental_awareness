import React, { Component } from 'react'
import TopMenuLoggedIn from './Navigation/TopMenuLoggedIn'
import { Jumbotron, Button } from 'react-bootstrap'

class Dashboard extends Component {
  render(){
    return (
      <div>
        <TopMenuLoggedIn />
        <h1>User Dashboard</h1>
      </div>
    )
  }
}

export default Dashboard
