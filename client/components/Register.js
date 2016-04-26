import React, { Component } from 'react'
import TopMenu from './TopMenu'
import { Jumbotron, Button, Col } from 'react-bootstrap'

class Register extends Component {
  render(){
    return (
      <div>
        <TopMenu />
        <Col xs={10} xsOffset={1}>
          <h1>Sign Up</h1>
        </Col>
      </div>
    )
  }
}

export default Register
