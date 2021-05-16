import React, { Component } from 'react';
import Cosmic from '../Containers/Cosmic'
import {Segment, Image, Grid } from 'semantic-ui-react'
import jungle1 from "../images/j1new.jpg"
import jungle3 from '../images/j2new.jpg'
import jungle4 from '../images/j3new.jpg'
import arcade1 from '../images/arcade1.jpg'
import arcade2 from '../images/arcade2.jpg'
import arcade3 from '../images/arcade3.jpg'
import bounce1 from '../images/bounce1.jpg'
import bounce2 from '../images/bounce2.jpg'
import bounce3 from '../images/bounce3.jpg'
import tickets1 from '../images/tickets1.jpg'
import tickets2 from '../images/tickets2.jpg'
import trade3 from '../images/trade3.jpg'
import vr1 from '../images/vr1new.jpg'
import vr2 from '../images/vr2new.jpg'
import vr3 from '../images/vr3new.jpg'
import toddler1 from '../images/toddler1.jpg'
import toddler2 from '../images/toddler2.jpg'
import toddler3 from '../images/toddler3.jpg'

class Attractions extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <br/><br/>
          <div>
          <h1 id="attract" className="neon3h smooth w3-text-white">Attractions</h1>
            <p className="KGN">
            Planet Play is not your typical indoor play space. We don’t focus on only one type of play, we focus on ALL types of play! From jungle gyms to games, Planet Play offers fun and activities like you’ve never seen before!
            </p>
          </div>
          <br></br><br></br>
          <div>
            <h1 className=" neon3h smooth w3-text-white" id='Jungle'> Jungle Gym</h1>
              <p className='KGN'>Our 700 square foot, two story jungle gym will catch your eye as soon as you enter Planet Play. Children will be amazed as they enter and realize just how much there is for them to do. Some of the things they will find inside include; racing slides, swirly slides, ball blaster area, plank bridge, ribbon tunnel, scaling ladder, rocket ship tunnel ladder, and more!
              </p>
          <Segment id='card3' attached>
            
                <Grid.Row centered>
                <div className="col-md-4">
                  <Image src={jungle1}/>
                </div>
                <div className="col-md-4">
                  <Image src={jungle3}/>
                </div>
                <div className="col-md-4">
                  <Image src={jungle4}/>
                </div>
                </Grid.Row>
            
          </Segment>
          </div>
          <br></br><br></br>
          <div>
            <h1 className=" neon3h smooth w3-text-white" id='VR Pods'> Virtual Reality Pods</h1>
            <p className='KGN'>Our Virtual Reality Pods combined with the virtual reality headset creates a completely immersive virtual reality adventure unlike anything you have ever experienced. With over 100 virtual reality experiences built in there is an experience for every age group and interest.
            </p>
          <Segment id='card6'  attached>
          
              <Grid.Row centered>
              <div className="col-md-4">
                <Image src={vr1}/>
              </div>
              <div className="col-md-4">
                <Image size='massive'src={vr2}/>
              </div>
              <div className="col-md-4">
                <Image src={vr3}/>
              </div>
              </Grid.Row>
          
          </Segment>
          </div>
          <br></br><br></br>
          <div>
          <h1 className=" neon3h smooth w3-text-white" id='Arcade'> Arcade </h1>
          <p className='KGN'> Planet Play has 30 arcade games that are sure to entertain the entire family. From the classics like skeeball to the new galactic space basketball, the choice is yours! Plus, no more annoying tokens to carry around and worry about losing. We have a cashless system that makes playing a breeze! The best part is, if you don’t use all of your points during today’s visit, you can simply save your card for another time.  And don’t forget to stop by and cash in your tickets for an awesome prize or two! Our redemption center is jam packed with goodies for families to choose from.
          </p>
          <Segment id='card8' attached>
         
              <Grid.Row centered>
              <div className="col-md-4">
                <Image src={arcade1}/>
              </div>
              <div className="col-md-4">
                <Image src={arcade3}/>
              </div>
              <div className="col-md-4">
                <Image src={arcade2}/>
              </div>
              </Grid.Row>
          
          </Segment>
          </div>
          <br></br><br></br>
          <div>
          <h1 className=" neon3h smooth w3-text-white" id='Bounce'> Bounce House</h1>
            <p className='KGN'>Who doesn’t love a bounce house? Kids will laugh and get their exercise for the day, while they bounce around in our custom made piece.
            </p>
          <Segment id='card2' attached>
          
              <Grid.Row centered>
              <div className="col-md-4">
                <Image src={bounce1}/>
              </div>
              <div className="col-md-4">
                <Image src={bounce2}/>
              </div>
              <div className="col-md-4">
                <Image src={bounce3}/>
              </div>
              </Grid.Row>
          
          </Segment>
          </div>
          <br></br><br></br>
          <div id='Trading'>
          <h1 className=" neon3h smooth w3-text-white">Redeem Tickets</h1>
          <p className='KGN'>Collect tickets after playing games and redeem them for awesome prizes! Our card reader technology allows you to save your tickets easily on your very own Planet Play card. You can use them right away or save them up for one of our BIGGER prizes!
          </p>
            <Segment id='card7' attached>
            
                <Grid.Row centered>
                <div className="col-md-4">
                  <Image src={tickets1}/>
                </div>
                <div className="col-md-4">
                  <Image src={trade3}/>
                </div>
                <div className="col-md-4">
                  <Image src={tickets2}/>
                </div>
                </Grid.Row>
            
            </Segment>
          </div>
          <br></br><br></br>
          <div id='Toddler'>
            <h1 className=" neon3h smooth w3-text-white"> Toddler Area</h1>
            <p className='KGN'>Calling all toddlernauts! Our toddler section is a secure gated in area that is sure to make your toddler smile. With a variety of soft blocks, wall games, magnet boards, and more, we have created a safe place for our youngest cadets to practice the art of play and socialization!</p>
          <Segment id='card4' attached>
          
              <Grid.Row centered>
              <div className="col-md-4">
                <Image src={toddler1}/>
              </div>
              <div className="col-md-4">
                <Image src={toddler2}/>
              </div>
              <div className="col-md-4">
                <Image src={toddler3}/>
              </div>
              </Grid.Row>
          
          </Segment>
          </div>
          <br></br><br></br>
          <div id='Cosmic'>
        <Cosmic/>
      </div>
        </div>
      </React.Fragment>
    );
  }

}

export default Attractions;
