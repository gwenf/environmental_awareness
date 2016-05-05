import React, { Component } from 'react'
import TopMenuLoggedIn from './Navigation/TopMenuLoggedIn'
import { Jumbotron, Button, Col } from 'react-bootstrap'
import UserSidebar from './Sidebar/UserSidebar'
import $ from 'jquery'

class Dashboard extends Component {
  // getInitialState() {
  //   return {name: ''};
  // }
  constructor() {
    super();
    this.state = {name: ''};
   }
  componentDidMount() {
    this.serverRequest = $.get('/data', function (result) {
      console.log(result.data.name)
      this.setState({
        name: result.data.name
      });
    }.bind(this));
  }
  render(){
    return (
      <div>
        <TopMenuLoggedIn />
        <Col xs={7} xsOffset={1}>
          <h1>{this.state.name} Dashboard</h1>
        </Col>
        <Col xs={3}>
          <UserSidebar />
        </Col>
      </div>
    )
  }
}

export default Dashboard
