import React, { Component } from 'react'
import TopMenu from './TopMenu'
import { Button, Col } from 'react-bootstrap'

class Login extends Component {
  render(){
    return (
      <div>
        <TopMenu />
        <Col xs={10} xsOffset={1}>
          <h1>Login</h1>
        </Col>
      </div>
    )
  }
}

export default Login
