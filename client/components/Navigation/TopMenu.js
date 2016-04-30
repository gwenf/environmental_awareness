import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import NavHeader from './NavHeader'
import NavLeft from './NavLeft'
import NavRight from './NavRight'

class TopMenu extends Component {
  render(){
    return (
      <div>
      <Navbar>
        <NavHeader />
        <Navbar.Collapse>
          <NavLeft />
          <NavRight />
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
  }
}

export default TopMenu
