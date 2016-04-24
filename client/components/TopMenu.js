import React, { Component } from 'react'
import { MenuItem, Navbar, NavItem, Nav, NavDropdown } from 'react-bootstrap'

class TopMenu extends Component {
  render(){
    return (
      <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Enviro1</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="about">About</NavItem>
          <NavDropdown eventKey={3} title="Learn" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} href="what-difference">What difference can I make?</MenuItem>
            <MenuItem eventKey={3.2} href="tutorials">Tutorials</MenuItem>
            <MenuItem eventKey={3.3} href="setting-goals">Setting Goals</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3} href="take-action">Take Action</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Sign Up</NavItem>
          <NavItem eventKey={2} href="#">Login</NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
  }
}

export default TopMenu
