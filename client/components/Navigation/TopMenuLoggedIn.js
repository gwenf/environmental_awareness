import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import NavHeader from './NavHeader'
import NavLeft from './NavLeft'
import NavRightLoggedIn from './NavRightLoggedIn'

class TopMenu extends Component {
  render(){
    return (
      <div>
      <Navbar>
        <NavHeader />
          <Navbar.Collapse>
            <NavLeft />
            <NavRightLoggedIn />
          </Navbar.Collapse>
      </Navbar>
      </div>
    )
  }
}

export default TopMenu
