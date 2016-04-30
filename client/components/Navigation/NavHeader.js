import React, { Component } from 'react'
import { MenuItem, Navbar, NavItem, Nav, NavDropdown } from 'react-bootstrap'

class NavHeader extends Component {
  render(){
    return (
      <div>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Enviro1</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        
      </div>
    )
  }
}

export default NavHeader
