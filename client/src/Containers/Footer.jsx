
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

      <Grid divided='vertically'>
        <Grid.Row>
          <div className="myClass" style={{width: '100%',float : 'left', paddingRight : '5px'}} > <img src={star}/> <img src={star}/><img src={star}/></div>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>
              <Link to="/Coming#top"><Image className="" centered size='medium' src={rocket}/></Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/Coming#top"><Image className="" centered size='medium' src={space}/></Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/Coming#top"><Image className="" centered size='medium' src={astro}/></Link>
          </Grid.Column>
        </Grid.Row>
      <Grid.Row columns={5}>
        <Grid.Column width={2}>
        <Link to="/Schedules#Calendar">
        <br></br><br></br><br></br><br></br>
          <Icon name='calendar' size='large' />
        </Link>
        </Grid.Column>
        <Grid.Column width={2}>
        <br></br><br></br><br></br><br></br>
        <Link to='/Contact#Start'>
          <Icon name='envelope' size='large' />
        </Link>
        </Grid.Column>
        <Grid.Column width={8}>
         <Image centered src={logo} size='large'/>
        </Grid.Column>
        <Grid.Column width={2}>
        <br></br><br></br><br></br><br></br>
          <a href="https://www.facebook.com/planetplayny" target="_blank">
          <Icon name="facebook" size='large'/></a>
        </Grid.Column>
        <Grid.Column width={2}>
        <br></br><br></br><br></br><br></br>
          <a href="https://www.instagram.com/planetplayny" target="_blank">
          <Icon name="instagram" size='large'/></a>
        </Grid.Column>
      </Grid.Row>






      <Grid.Row className='w3-text-pink' relaxed='very' columns={4}>
       <Grid.Column className='KGN' >
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
       </Grid.Column>
       <Grid.Column className='KGN'>
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
       </Grid.Column>
       <Grid.Column className='KGN'>
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
        </Grid.Column>

       <Grid.Column className='smooth w3-text-white neon1h'>
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


       </Grid.Column>
      </Grid.Row>
      </Grid>
      </footer>
    </React.Fragment>
    );
  }

}

export default Footer;
