import React, { Component } from 'react'
import TopMenuLoggedIn from './Navigation/TopMenuLoggedIn'
import { Jumbotron, Button, Col } from 'react-bootstrap'
import UserSidebar from './Sidebar/UserSidebar'

class Dashboard extends Component {
  render(){
    return (
      <div>
        <TopMenuLoggedIn />
        <Col xs={7} xsOffset={1}>
          <h1>User Dashboard</h1>
        </Col>
        <Col xs={3}>
          <UserSidebar />
        </Col>
      </div>
    )
  }
}

export default Dashboard
