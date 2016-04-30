import React, { Component } from 'react'
import { Navbar, NavItem, Nav } from 'react-bootstrap'

class NavRightLoggedIn extends Component {
  render(){
    return (
      <div>

        <Nav pullRight>
          <NavItem eventKey={1} href="logout">Logout</NavItem>
        </Nav>

      </div>
    )
  }
}

export default NavRightLoggedIn
