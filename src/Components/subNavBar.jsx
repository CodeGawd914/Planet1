import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import {Icon, Menu, Dropdown, Image, Segment, List } from 'semantic-ui-react'
import logo from '../images/logo-round.jpg'

const SubNavBar = () => {
  return (
      <React.Fragment className="ui stackable container menu" >
    <Menu compact className="ui stackable container menu" borderless fluid  inverted size='huge'>
      <Link to="/">
          <Menu.Item position='left'>
             <Image src={logo} size='small'/>
          </Menu.Item>
      </Link>
          <Menu.Menu unstackable position='right' className='smooth'>

            <Dropdown as={Link} item text='About Us' to="/AboutUs">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} text='Waiver' to='/Waiver'/>
                <Dropdown.Item as={Link} text='Health & Saftey'to='/Clean'/>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='Schedule'>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} text="Open Play" to="Schedules#Open"/>
                <Dropdown.Item as={Link} text="Classes" to="Schedules#Classes"/>
                <Dropdown.Item as={Link} text="Calendar" to='/Schedules#Calendar'/>
                <Dropdown.Item as={Link} text="Sensitive Space Hours" to='/Schedules#Sss'/>
              </Dropdown.Menu>
            </Dropdown>
          <Dropdown item text='Birthday Parties'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} text='Packages' to='/BdayParties#Packages'/>
              <Dropdown.Item as={Link} text='Add-ons' to='/BdayParties#Add'/>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown closeOnChange={true} item text='Attractions' to='/Attractions'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} text='Jungle Gym' to='/Attractions#Jungle'/>
              <Dropdown.Item as={Link} text='Bounce House' to='/Attractions#Bounce'/>
              <Dropdown.Item as={Link} text='Arcade' to='/Attractions#Arcade'/>
              <Dropdown.Item as={Link} text='Redeem Tickets ' to='/Attractions#Trading'/>
              <Dropdown.Item as={Link} text='Toddler Area' to='/Attractions#Toddler'/>
              <Dropdown.Item as={Link} text='Cosmic Cafe' to='/Attractions#Cosmic'/>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item as={Link} to='/Contact'  name='Connect With Us'/>
          </Menu.Menu>
        </Menu>
        </React.Fragment>
  )
}

export default SubNavBar
