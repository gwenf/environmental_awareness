import React, { Component } from 'react'
import TopMenu from './Navigation/TopMenu'
import { Button, Col } from 'react-bootstrap'

class About extends Component {
  render(){
    return (
      <div>
        <TopMenu />
        <Col xs={10} xsOffset={1}>
          <h1>About Eviro1</h1>
        </Col>
      </div>
    )
  }
}

export default About
