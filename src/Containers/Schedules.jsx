import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import {Table, Icon, Segment, Image, Button, List, Grid} from 'semantic-ui-react'
import Events from "../Components/Events"
import Classes from '../Components/Classes'
import Calendar from '../Components/Calendar'



class Schedules extends Component {

  render() {
    return (
      <div id='OpenPlay'>
        <div className="container">
          <br></br>
          <br></br>
          <Grid id="card3" centered className="KGN" divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
                <h3 className="neon3h smooth w3-text-white">Open Play Schedule</h3>
              </Grid.Column>
            </Grid.Row>
            <div className="row">
              <div className="col-12 col-md-4">
                <p><b className='smooth'>Mini Milky Way</b></p>
              </div>
              <div className="col-12 col-md-4">
                <b className=" KGN w3-left-align">(Up to 7 years old)</b>
              </div>
              <div className="col-12 col-md-4 KGN">
                <List.Item>
                  <b>Mon </b><Icon color='gold' name='star' size='small'/> <b> 12pm-2pm </b><Icon color='gold' name='star' size='small'/><b>2pm-4pm</b>
                </List.Item>
                <List.Item>
                  <b>Wed </b><Icon color='gold' name='star' size='small'/> <b> 10am-12pm </b><Icon color='gold' name='star' size='small'/><b>12:15pm-2:15pm</b>
                </List.Item>
                <List.Item>
                  <b>Thurs </b><Icon color='gold' name='star' size='small'/> <b> 12pm-2pm </b><Icon color='gold' name='star' size='small'/><b>2pm-4pm</b>
                </List.Item>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-4">
                <p className='smooth'><b>All Age Astronauts</b></p>
              </div>
              <div className="col-12 col-md-4">
                <b>(For all ages)</b>
              </div>
              <div className="col-12 col-md-4">
                <List>
                  <b>
                  <List.Item>
                    <b>Mon </b> <Icon color='gold' name='star' size='small'/><b> 4pm-6pm </b><Icon color='gold' name='star' size='small'/>
                  </List.Item>
                  <List.Item>
                    <b>Wed</b> <Icon color='gold' name='star' size='small'/><b> 2:30pm-4:30pm </b><Icon color='gold' name='star' size='small'/>
                  </List.Item>
                  <List.Item>
                    <b>Thurs </b><Icon color='gold' name='star' size='small'/><b> 4pm-6pm </b><Icon color='gold' name='star' size='small'/><b>6pm-8pm </b><Icon color='gold' name='star' size='small'/>
                  </List.Item>
                  <List.Item>
                    <b>*Fri </b> <Icon color='gold' name='star' size='small'/><b> 2:30pm-4:30pm </b><Icon color='gold' name='star' size='small'/>
                  </List.Item>
                  <List.Item>
                    <b>*Sat </b>  <Icon color='gold' name='star' size='small'/><b> 6pm-8pm </b><Icon color='gold' name='star' size='small'/>
                  </List.Item>
                  <List.Item>
                    <b>*Sun </b>  <Icon color='gold' name='star' size='small'/><b> 4pm-6pm </b><Icon color='gold' name='star' size='small'/>
                  </List.Item>
                  <br></br>


                  <List.Item>
                  <b>Fri Night </b> <Icon color='gold' name='star' size='small'/><b> 7pm-9pm </b><Icon color='gold' name='star' size='small'/>
                  </List.Item>
                  <List.Item>
                    <b>Arcade only (tweens welcome)</b>
                  </List.Item>
                  <br></br>
                    <List.Item>
                    <Icon color='gold' name='star' size='small'/>
                          <b className="KGN3">Fri,Sat,Sun</b>
                    <Icon color='gold' name='star' size='small'/>
                      <br></br>
                    </List.Item>
                    <List.Item>
                      *Additional open play times vary based on party bookings. Please check our schedule!
                  </List.Item>
                  </b>
                </List>
              </div>
              <br></br>
              <br></br>
            </div>

            <div className="row">
              <div className="col-12 col-md-4">
                <p className='smooth'><b>Sensitive Space</b></p>
              </div>
              <div className="col-12 col-md-4">
                <b>(For all ages)</b>
              </div>
              <div className="col-12 col-md-4">
                <b>*Sensitive Space will be held the 1st and 3rd Wednesday of every month from 4:45-6:45
  *</b>
              </div>
            </div>
          </Grid>
          <br></br>
          <br></br>
          <p className="KGN">*Schedule is subject to change due to holidays and school breaks. Always check our calendar prior to coming for open play.*</p>
          <p className="KGN">*Reservations are required for all sessions. Book your spot by phone or online.*</p>
          <p className="KGN">*Walk-ins permitted based on availabity!*</p>



          <br></br>
          <br></br>
          <Grid id="card2" columns='equal'>
            <Grid.Column>
              <h3 className="neon3h smooth w3-text-white">Open Play Pricing</h3>
            </Grid.Column>
            <Grid.Column>
              <h3 className=" KGN w3-text-white"><b>Open play includes 2 hours of play in the entire facility plus a $5 arcade game card</b></h3>
            </Grid.Column>
          </Grid>

          <Grid className="KGN" columns='equal'>
            <Grid.Column>
              <b>Regular Admission</b>
            </Grid.Column>
            <Grid.Column>
              <b>$20 per child, includes a $5 arcade card</b>
            </Grid.Column>
          </Grid>

          <Grid className="KGN" columns='equal'>
            <Grid.Column>
              <b>Crawlers</b>
            </Grid.Column>
            <Grid.Column>
              <b>$15</b>
            </Grid.Column>
          </Grid>
          <Grid className="KGN" columns='equal'>
            <Grid.Column>
              <b>Adults</b>
            </Grid.Column>
            <Grid.Column>
              <b>Free*</b>
            </Grid.Column>
          </Grid>

          <br></br>
          <div id="VIP">
            <h1 className="neon3h smooth16">BUY A PLANET PASS AND SAVE!</h1>
            <h2 className="neon3h smooth16" ><b>$200</b></h2>
            <p className="KGN">Buy 10 open play sessions and get 2 free
  *Includes a $60 arcade game card*</p>
            <Button as={Link} to='/Coming#top' id='card5'> <p className='neon1 smooth'>Buy Your Planet Pass Now !</p></Button>
          </div>
          <br></br><br></br>
          <div>
            <h1 className='neon3h smooth w3-text-white'> Mini Milky Way Playtime</h1>
            <p className="w3-left-align KGN">
              Mini Milky Way Playtime offers 2 hours where children 7 years of age and younger can have the facility to themselves to play, climb, explore and more! Our youngest cadets will be full of smiles while they socialize and get some exercise.
            <br></br>
              <p className='w3-center'><i>Please be advised that we will not allow children over the age of 7 in the facility at this time,</i>
              </p>
            </p>
            <br></br>
            <h1 className='neon3h smooth w3-text-white'> All Age Astronauts Playtime</h1>
            <p className="w3-left-align KGN">
              All Age Astronauts offers 2 hours where children of all ages can come and play in our facility. With a variety of attractions, we have something for everyone. A toddler section, arcade, bounce house, and jungle gym, are sure to keep your entire family entertained!
          </p>
            <br></br>
            <h1 className='neon3h smooth w3-text-white'>Sensitive Space Playtime</h1>
            <p className="w3-left-align KGN"> Sensitive Space offers 2 hours where peers with similar abilities can engage in functional play, have fun, and just be themselves without judgement. Children of all ages can strengthen their social skills and explore in sensory fun, whether it’s climbing through our 700 square foot jungle gym, or bouncing on our inflatable. Noise reduction headphones will be offered along with lower music, dimmed lights, and no loud ball blaster. Experienced staff will help to engage our special children and their siblings to have a BLAST in our clean and safe environment!
          </p>
          </div>
          <br></br><br></br>
          <div id='Classes'>
            <h1 className="neon3h smooth w3-text-white">Class Information</h1>
            <Classes />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div id='Calendar'>
          <Calendar />
          </div>
        </div>
      </div>
    );
  }

}

export default Schedules;
