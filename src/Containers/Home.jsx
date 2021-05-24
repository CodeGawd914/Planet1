import React from 'react';
import logo from '../images/logoLong.jpg'
import {Image,Grid, Segment, Button, Card} from 'semantic-ui-react'
import { HashLink as Link } from 'react-router-hash-link';
import BlurAdd from '../Components/blurAdd'

const Home = (props) => {

  return (
    <React.Fragment>

      {props.user=== '' ? <BlurAdd email={props.user} onSubmit={props.onSubmit} l/> : null }

      <div id='home' className="smooth">
    <Image centered src={logo} size='huge'/>
      <Grid stackable columns={3}>
        <Grid.Column textAlign='center'>
          <Link to="/Attractions#Cosmic">
            <Segment size='large' id='card1' textAlign='center'><br></br><br></br><h1 className='neonRed smooth16'>Cosmic Cafe</  h1><br></br><br></br>
            </Segment>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/Attractions#Jungle">
          <Segment size='large' id='card2' textAlign='center'><br></br><br></br><h1 className='neonGreen smooth16'>Jungle Gym</h1><br></br><br></br></Segment>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/Attractions#Arcade">
          <Segment size="large" id='card3' textAlign='center'><br></br><br></br><h1 className='neonPink smooth16'>Arcade</h1><br></br><br></br></Segment>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/Schedules#Open">
          <Segment size='large' id='card8' textAlign='center'><br></br><br></br><h1 className='neon3 smooth16'>Sensitive Space</h1><br></br><br></br></Segment>
          </Link>
        </Grid.Column>
        <Grid.Column>
        <Link to="/BdayParties#Packages">
          <Segment size='large' id='card5' textAlign='center'><br></br><br></br><h1 className='neonLime smooth16'>Party Packages</h1><br></br><br></br></Segment>
        </Link>
        </Grid.Column>
        <Grid.Column>
        <Link to="/Schedules#Classes">
          <Segment size='large' id='card6' textAlign='center'><br></br><br></br><h1 className='neonSilver smooth16'>Class Schedule</h1><br></br><br></br></Segment>
          </Link>
        </Grid.Column>
        <Grid.Column>
        <Link to="/Schedules#OpenPlay">
          <Segment size='large'id='card7' textAlign='center'><br></br><br></br><h1 className='neon3 smooth16'>Open Play</h1><br></br><br></br></Segment>
          </Link>
        </Grid.Column>
        <Grid.Column>
        <Link to="/Attractions#Toddler">
          <Segment size='large' id='card9' textAlign='center'><br></br><br></br><h1 className='neonAqua smooth16'>Toddler Time</h1><br></br><br></br></Segment>
          </Link>
        </Grid.Column>
        <Grid.Column>
        <Link to="/Schedules#VIP">
          <Segment size='large' id='card4' textAlign='center'><br></br><br></br><h1 className='neon3 smooth16'>VIP Club</h1><br></br><br></br></Segment>
          </Link>
        </Grid.Column>
      </Grid>
    </div>
      </React.Fragment>
  );
}

export default Home ;
