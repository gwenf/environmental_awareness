import React, { Component } from 'react'
import TopMenu from './TopMenu'
import { Jumbotron, Button, Col } from 'react-bootstrap'

class App extends Component {
  render(){
    return (
      <div>
        <TopMenu />
        <Col xs={10} xsOffset={1}>
          <Jumbotron>
            <h1>Welcome to Enviro1!</h1>
            <p>This is a website intended to educate and promote
                environmental awareness and show that each
                individual has the power to make a difference.</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
          </Jumbotron>
        </Col>
      </div>
    )
  }
}

export default App
