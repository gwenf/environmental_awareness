import React, { Component } from 'react'
import { Navbar, NavItem, Nav } from 'react-bootstrap'

class NavRight extends Component {
  render(){
    return (
      <div>
        <Nav pullRight>
          <NavItem eventKey={1} href="register">Sign Up</NavItem>
          <NavItem eventKey={2} href="login">Login</NavItem>
        </Nav>
      </div>
    )
  }
}

export default NavRight
