import React, { Component } from 'react'
import TopMenu from './Navigation/TopMenu'
import { Button, Col } from 'react-bootstrap'
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const margStyle = {
  margin: '20px'
}

class Login extends Component {
  render(){
    return (
      <div>
        <TopMenu />
        <Col xs={10} xsOffset={1}>
          <h1 style={margStyle}>Login</h1>
        </Col>
        <Col xs={5} xsOffset={1}>
        <Form method='post' action='login' horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Username
            </Col>
            <Col sm={10}>
              <FormControl name="username" type="text" placeholder="Username" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl name="password" type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit" bsStyle="primary">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
        </Col>
      </div>
    )
  }
}

export default Login
