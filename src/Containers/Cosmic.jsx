import React, { Component } from 'react';
import {Grid, Image, Card, Icon, Segment} from 'semantic-ui-react'
import logo from '../images/logo-round.jpg'
import cosmic1 from '../images/cosmic1.jpg'
import cosmic2 from '../images/cosmic2.jpg'
import coffee from '../images/coffe.jpg'

class Cosmic extends Component {


  render() {
    const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)
    return (
      <React.Fragment className="cards">
      <div>
        <h1 className=" neon3h smoothb w3-text-white">Cosmic Cafe</h1>
      </div>
      <br></br>
      <p className='KGNb'>Cosmic Cafe is a space for caregivers to sit, relax, and enjoy a treat or two, while their children play. Choose from a selection of carefully brewed coffees, espressos or teas. Our menu changes from day to day but it typically includes a variety of baked goods, healthy snack options, and some guilty pleasures! We are a nut-free facility, so everything here is free of peanuts and tree nuts.</p>
      <Segment id='card9' attached>

        <Grid.Row centered columns={3}>
          <div className="col-md-4">
            <Image src={cosmic1} />
          </div>
          <div className="col-md-4">
          <Image src={coffee} />
          </div>
          <div className="col-md-4">
            <Image src={cosmic2}/>
          </div>
        </Grid.Row>

      </Segment>
      </React.Fragment>







    );
  }

}

export default Cosmic ;
