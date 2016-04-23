import React, { Component } from 'react'
import { Button, Navbar } from 'react-bootstrap'

class TopMenu extends Component {
  render(){
    return (
      <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Environment</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            Signed in as: <Navbar.Link href="#">Gwen F</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullRight>
            <Button bsStyle='info' bsSize='large' block>Login</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      </div>
    )
  }
}

export default TopMenu
