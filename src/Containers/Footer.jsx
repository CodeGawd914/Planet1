
import React, { Component } from 'react';
import {Grid,Segment, Image, List,Icon, Header, Container } from 'semantic-ui-react'
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/logoLong.jpg'
import space from '../images/Space.png'
import rocket from '../images/Rocket.png'
import astro from '../images/Astro.png'
import star from '../images/StarBorder.png'



class Footer extends Component {

  render() {
    return (
      <React.Fragment>

      <footer id="footer" className="w3-container w3-text-pink w3-padding-64 w3-center w3-xlarge" >
        <div className="container">
          <Grid.Row className="myClass sm-col-margin mb-30">
            <div className="col-md-4 text-center star"> 
              <img src={star}/>
            </div>
            <div className="col-md-4 text-center star">  
              <img src={star}/>
            </div>
            <div className="col-md-4 text-center star"> 
              <img src={star}/>
            </div>
          </Grid.Row>

          <Grid.Row className="sm-col-margin">
            <div className="col-md-4">
                <Link to="/Coming#top"><Image className="" centered size='medium' src={rocket}/></Link>
            </div>
            <div className="col-md-4">
              <Link to="/Coming#top"><Image className="" centered size='medium' src={space}/></Link>
            </div>
            <div className="col-md-4">
              <Link to="/Coming#top"><Image className="" centered size='medium' src={astro}/></Link>
            </div>
          </Grid.Row>
          <Grid.Row className="align-items-center social-wrap">
            <div className="col-md-2 social-item">
            <Link to="/Schedules#Calendar">
            
              <Icon name='calendar' size='large' />
            </Link>
            </div>
            <div className="col-md-2 social-item">
            
            <Link to='/Contact#Start'>
              <Icon name='envelope' size='large' />
            </Link>
            </div>
            <div className="col-md-4">
            <Image centered src={logo} size='large'/> 
            </div>
            <div className="col-md-2 social-item">
            
              <a href="https://www.facebook.com/planetplayny" target="_blank">
              <Icon name="facebook" size='large'/></a>
            </div>
            <div className="col-md-2 social-item">
            
              <a href="https://www.instagram.com/planetplayny" target="_blank">
              <Icon name="instagram" size='large'/></a>
            </div>
          </Grid.Row>


     








        <Grid.Row className='w3-text-pink sm-col-margin' relaxed='very'>
        <div className='KGN col-md-3' >
          <List>
            <Link to="/AboutUs#about"><List.Item>About Us </List.Item> </Link>
            <Link to="/AboutUs#Policies"><List.Item>Policies</List.Item></Link>
            <Link to="/Waiver#wave"><List.Item>Waiver</List.Item></Link>
            <Link to="/Schedules#OpenPlay"><List.Item>Schedule</List.Item></Link>
            <Link to="/Schedules#OpenPlay"><List.Item>Open Play</List.Item></Link>
            <Link to="/Schedules#Calendar"><List.Item>Special Events</List.Item></Link>
            <Link to="/Schedules#Classes"><List.Item>Classes</List.Item></Link>
            <Link to="/Schedules#Calendar"><List.Item>Calendar</List.Item></Link>
          </List>
        </div>
        <div className='KGN col-md-3'>
          <List>
          <Link to="/BdayParties#Para"><List.Item>Birthday Parties</List.Item></Link>
          <Link to="/BdayParties#Packages"><List.Item>Packages</List.Item></Link>
          <Link to="/BdayParties#Add"><List.Item>Add-ons</List.Item></Link>
          <Link to="/Attractions#attract"><List.Item>Attractions</List.Item></Link>
          <Link to="/Attractions#Jungle"><List.Item>Jungle Gym</List.Item></Link>
          <Link to="/Attractions#Bounce"><List.Item>Bounce House</List.Item></Link>
          <Link to="/Attractions#Arcade"><List.Item>Arcade</List.Item></Link>
          <Link to="/Attractions#Trading"><List.Item>Redeem Tickets</List.Item></Link>
          </List>
        </div>
        <div className='KGN col-md-3'>
          <List>
          <Link to="/Attractions#Toddler"><List.Item>Toddler Area</List.Item></Link>
          <Link to="/Attractions#Cosmic"><List.Item>Cosmic Cafe</List.Item></Link>
          <Link to="/Contact#Start"><List.Item>Connect With Us</List.Item></Link>
          <List.Item> <a href="https://www.facebook.com/planetplayny" target="_blank">Facebook</a></List.Item>
          <List.Item> <a href="https://www.instagram.com/planetplayny" target="_blank">Instagram</a></List.Item>
          <Link to="/Schedules#Sss"><List.Item>Sensitive Space Hours</List.Item></Link>
          <Link to="/home"><List.Item>Planet Play Home</List.Item></Link>
          <Link to='/Clean#hs1'><List.Item>Health & Saftey</List.Item></Link>
          </List>
          </div>

        <div className='smooth w3-text-white neon1h col-md-3'>
          <List>
          <List.Item textAlign='center' className='w3-text-white'> 418 Bedford Avenue </List.Item>
          <List.Item textAlign='center' className='w3-text-white'> Bellmore, NY 11710</List.Item>
          <List.Item>516-636-5622</List.Item>
    <br></br>
          <List.Item textAlign='center'>Hours</List.Item>
          </List>




      <List className=" smooth8,w3-left-align w3-padding">

      <List.Item>Monday 10am-4:30pm</List.Item>
      <List.Item>Tuesday 10am-4:30pm</List.Item>
      <List.Item>Wednesday 10am-4:30pm</List.Item>
      <List.Item>Thursday Closed</List.Item>
      <List.Item>Friday 3pm - 7pm</List.Item>
      <List.Item>Saturday 11am -7pm</List.Item>
      <List.Item>Sunday 11am -5pm</List.Item>
      </List>


        </div>
        </Grid.Row>
 
        </div>
      </footer>
    </React.Fragment>
    );
  }

}

export default Footer;
