import React, { Component } from 'react';
import bio0 from '../images/bio0.jpg'
import bio1 from '../images/bio1.jpg'
import bio3 from '../images/bio3.jpg'
import ion from '../images/ion.jpg'
import { List,Grid,Segment,Image} from 'semantic-ui-react'

class Clean extends Component {

  render() {
    return (
      <div className="container">
        <div id='hs1' className='KGN'>
        <br></br>
        <br></br>
            Here at Planet Play, we prioritize health and safety. Please see our cleaning protocol, along with information regarding the products we have chosen to use to protect our facility.
          <br></br>
          <br></br>
          <br></br>
            Planet Play is protected by BIOPROTECTUs™ System. This hospital-grade, non-toxic disinfectant is a highly efficient and effective preventative program to help reduce and control the spread of microorganisms.
          <br></br>
          <br></br>
          <br></br>
          <Segment id='card4' attached>
            <Grid stackable>
              <Grid.Row centered columns={3}>
                <Grid.Column>
                  <Image src={bio0}/>
                </Grid.Column>
                <Grid.Column>
                  <Image src={bio1}/>
                </Grid.Column>
                <Grid.Column>
                  <Image src={bio3}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <br></br>
          <br></br>
          BIOPROTECT ™ is…

          <List>

          <List.Item>Water based</List.Item>
          <List.Item>Non-toxic to humans and animals</List.Item>
          <List.Item>Contains no harmful chemicals or heavy metals</List.Item>
          <List.Item>Bound to the surface (substrate) meaning it cannot leach into the surrounding
          environment and is foggable in interior environments</List.Item>

          </List>

          Planet Play is treated every 90 days with the Bio Protect 90 Day Shield.
          <br></br>
          <br></br>
          <br></br>
          Planet Play is also protected by ScentAir Ion Defend.
          <br></br>
          <br></br>
          <Image fluid centered size='medium' src={ion}/>
          <br></br>
          ScentAir Ion Defend is…
          <br></br>

          <List>

          <List.Item>EPA registered</List.Item>
          <List.Item>Eliminates pathogens such as the Flu, MERSA, E. Coli and COVID 19</List.Item>
          <List.Item>Removes malodors & VOC’s (Volatile Organic Compounds)</List.Item>
          <List.Item>Reduces airborne particles like dust, pollen & smoke</List.Item>
          <List.Item>Saves on energy consumption</List.Item>
          <List.Item>UL Certified for Zero Ozone emissions</List.Item>
          <List.Item>Installed in our HVAC system and works invisibly 24/7 cleaning the air</List.Item>

          </List>
          <br></br>
          <br></br>
          <br></br>
          Health and Safety Protocol
          <br></br>
          <br></br>
          -The entire facility is sprayed in between each open play session and party with our BIOPROTECTUs™ Disinfectant. This includes, but is not limited to, the front prize counter, arcade games, toddler section, cafe, jungle gym, all doorknobs, and bathrooms.
          <br></br>
          <br></br>
          -Hand sanitizing stations are available all over the facility. Here at Planet Play, we prioritize health and safety. Please see our cleaning protocol, along with information regarding the products we have chosen to use to protect our facility.

        </div>
      </div>
    );
  }

}

export default Clean;
