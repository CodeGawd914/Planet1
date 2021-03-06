import React from 'react'
import {Table, Icon, Segment, Image, Grid, Card, List} from 'semantic-ui-react'
import bdaypic from '../images/bdaypic.jpeg'
import bdaypic1 from '../images/bdaypic1.jpg'
import bdaypic2 from '../images/bdaypic2.jpg'
import pn2 from '../images/pn2.jpeg'
import pn4 from '../images/pn4.jpeg'
import pn7 from '../images/pn7.jpeg'
import bd1 from '../images/Bdn01.jpeg'
import bd0 from '../images/bdn0.jpeg'
import bd01 from '../images/bdn010.jpeg'


const BdayParties = () => {

    return (
        <React.Fragment>
        <div className="container">
            <br/>
              <h1 className=" neon3h smoothb w3-text-white">Birthday Parties</h1>
            <br/>
            <div id='Para'>
                <div className="container">
                <p className='w3-text-white KGNb'>Our slogan isn’t “An Out of this World Adventure” for no reason. Here
                    at Planet Play, we are committed to providing children and families with the most memorable birthday
                    party of their lives. All you have to do is pick the date, and leave the rest up to us! Our trained
                    party professionals will take care of everything, including the behind the scenes necessities, day
                    of duties, and after party clean up. More importantly, we will work hard to ensure that all children
                    have a spectacular time, and that the birthday child feels like the star! All of our birthday
                    parties are private and cater specifically to your guest list. And with our extensive choice of
                    add-ons, you can truly customize the day as you please. Ready to book your party? Call us today so
                    we can save your date!
                </p>
                </div>
                <br></br>
                <Segment id='card6'  attached>

                    <Grid.Row centered>
                    <div className="col-md-4">
                      <Image src={pn2}/>
                    </div>
                    <div className="col-md-4">
                      <Image src={pn4}/>
                    </div>
                    <div className="col-md-4">
                      <Image src={pn7}/>
                    </div>
                    </Grid.Row>
                </Segment>
                <br></br>
                <br></br>
            </div>
            <div id="Packages">
                <Grid className="ui stackable three column grid smoothb bday-list" columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <Card className="sm-img-100" id="card8"
                                  image={bdaypic1}
                                  header=<p className='smooth, neonRedh'>Birthday Blast Off</p>
                            meta=<List className="neon1h">
                            <List.Item>$599 plus tax & gratuity</List.Item>
                            <List.Item>10 Children plus the Birthday Star</List.Item>
                            <List.Item className="smooth12">($25 per additional child)</List.Item>

                        </List>

                            description=
                            <List className="w3-center-align, KGN1"><b>
                                <List.Item>-90 Minute Private Party</List.Item>
                                <List.Item>-$10 Arcade Playing Card Per Child</List.Item>
                                <List.Item>(40 points)</List.Item>
                                <List.Item>-200 Bonus Tickets for the Birthday Star</List.Item>
                                <List.Item>-Free Ticket Blaster Experience for the Birthday Star</List.Item>
                                <List.Item>-Planet Play Shirt Signed by Guests for the Birthday Star</List.Item>
                                <List.Item>-15-minute appearance from our very own Astro the Alien</List.Item>
                                <List.Item>-Galaxy Themed Paper Goods</List.Item>
                                <List.Item>-Pizza, Juice, and Cupcakes (nut-free) for Each Child</List.Item>
                                <List.Item>-Goody Bags for Each Child</List.Item>
                                <List.Item>-Five Out of This World Party Hosts</List.Item>
                                </b>
                            </List>

                            />
                        </Grid.Column>
                        <br></br><br></br><br></br><br></br>
                        <Grid.Column>
                            <Card className="sm-img-100" id="card8"
                                  image={bdaypic2}
                                  header=<p className="smooth, neonPink">Explore the Universe</p>
                            meta=<List className="neon1h">
                            <List.Item>$799 plus tax & gratuity</List.Item>
                            <List.Item>15 children plus the Birthday Star</List.Item>
                            <List.Item className="smooth12">($27 per additional child)</List.Item>

                        </List>

                            description=
                            <List className="w3-center-align KGN1"><b>
                                <List.Item>-90 Minute Private Party</List.Item>
                                <List.Item><Icon color='gold' name='star' size='small'/>$15 Arcade Playing Card Per Child</List.Item>
                                <List.Item>(60 points)</List.Item>
                                <List.Item><Icon color='gold' name='star' size='small'/>400 Bonus Tickets for the Birthday Star</List.Item>
                                <List.Item>-Free Ticket Blaster Experience for the Birthday Star</List.Item>
                                <List.Item>-Planet Play Shirt Signed by Guests for the Birthday Star</List.Item>
                                <List.Item>-15-minute appearance from our very own Astro the Alien</List.Item>
                                <List.Item>-Galaxy Themed Paper Goods</List.Item>
                                <List.Item>-Pizza, Juice, and Cupcakes (nut-free) for Each Child</List.Item>
                                <List.Item>-Goody Bags for Each Child</List.Item>
                                <List.Item>-Five Out of This World Party Hosts</List.Item>
                                <List.Item><Icon color='gold' name='star' size='small'/>Temporary Tattoo Station</List.Item>
                                </b>

                            </List>
                            />
                        </Grid.Column>
                        <br></br><br></br><br></br><br></br>
                        <Grid.Column>
                            <Card className="sm-img-100" id="card8"
                                  image={bdaypic}
                                  header=<p className="smooth, neon3">Sky’s the Limit</p>
                            meta=<List className="neon1h">
                            <br></br>
                            <List.Item>$999 plus tax & gratuity</List.Item>
                            <List.Item>18 children plus the Birthday Star</List.Item>
                            <List.Item className="smooth12">($30 per additional child)</List.Item>

                        </List>

                            description=
                            <List className="w3-center-align, KGN1"><b>
                                <List.Item><Icon color='gold' name='star' size='small'/>120 Minute Private Party</List.Item>
                                <List.Item><Icon color='gold' name='star' size='small'/>$20 Arcade Playing Card Per Child</List.Item>
                                <List.Item>(80 points)</List.Item>
                                <List.Item><Icon color='gold' name='star' size='small'/>600 Bonus Tickets for the Birthday Star</List.Item>
                                <List.Item>-Free Ticket Blaster Experience for the Birthday Star</List.Item>
                                <List.Item>-Planet Play Shirt Signed by Guests for the Birthday Star</List.Item>
                                <List.Item>-15-minute appearance from our very own Astro the Alien</List.Item>
                                <List.Item>-Galaxy Themed Paper Goods</List.Item>
                                <List.Item>-Pizza, Juice, and Cupcakes (nut-free) for Each Child</List.Item>
                                <List.Item>-Goody Bags for Each Child</List.Item>
                                <List.Item>-Five Out of This World Party Hosts</List.Item>
                                <List.Item><Icon color='gold' name='star' size='small'/>Temporary Tattoo Station</List.Item>
                                <List.Item><Icon color='gold' name='star' size='small'/>Free Open Play Pass for Each Child to Use at a Later Date</List.Item>
                                <List.Item><Icon color='gold' name='star' size='small'/>Picture Package Add-On Included for Free</List.Item></b>
                            </List>

                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

            <br></br>
            <br></br>
            <Grid className='KGNb margin justify-content-center' columns='equal'>
                <Grid.Row>
                    <div className="col-md-4">
                        <p><Icon color='green' name='star' size='small'/> The birthday child is free</p>
                    </div>
                    <div className="col-md-4">
                        <p><Icon color='green' name='star' size='small'/> We are a nut free facility</p>
                    </div>
                    <div className="col-md-4">
                        <p><Icon color='green' name='star' size='small'/> All parties are private</p>
                    </div>
                </Grid.Row>
                <Grid.Row>
                    <div className="col-md-4">
                        <p><Icon color='green' name='star' size='small'/> We do not allow outside food or drinks inside
                            the facility</p>
                    </div>
                    <div className="col-md-4">
                        <p><Icon color='green' name='star' size='small'/> Additional food is available for purchase</p>
                    </div>
                    <div className="col-md-4">
                        <p><Icon color='green' name='star' size='small'/> Party planning services are available for
                            custom themes</p>
                    </div>
                </Grid.Row>
            </Grid>
            <br></br>
            <br></br>
            <Segment id='card6'  attached>

                <Grid.Row centered>
                <div className="col-md-4">
                  <Image src={bd1}/>
                </div>
                <div className="col-md-4">
                  <Image src={bd0}/>
                </div>
                <div className="col-md-4">
                  <Image src={bd01}/>
                </div>
                </Grid.Row>
            </Segment>
            <br></br>


            <br></br>
            <br></br>
            <div className='smooth' id='Add'>
                <Table id='card3' unstackable>
                    <Table.Header>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell colspan="4" id='card3'>Add-Ons</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>DELUXE TUMBLER FAVOR</Table.Cell>
                            <Table.Cell>$5 EACH</Table.Cell>
                            <Table.Cell>GLOW PARTY</Table.Cell>
                            <Table.Cell>$100</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>PERSONALIZED DELUXE TUMBLER FAVOR</Table.Cell>
                            <Table.Cell>$8 EACH</Table.Cell>
                            <Table.Cell>GLOW THEMED PARTY ROOM</Table.Cell>
                            <Table.Cell>$85</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>DELUXE DRAWSTRING BACKPACK FAVOR</Table.Cell>
                          <Table.Cell>$5 EACH</Table.Cell>
                          <Table.Cell>GLOW PARTY & GLOW THEME BUNDLE</Table.Cell>
                          <Table.Cell>$150</Table.Cell>
                      </Table.Row>
                        <Table.Row>
                            <Table.Cell>UNLIMITED VIRTUAL REALITY</Table.Cell>
                            <Table.Cell>$100</Table.Cell>
                            <Table.Cell>EXTRA HALF HOUR</Table.Cell>
                            <Table.Cell>$150</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>TATTOO STATION</Table.Cell>
                            <Table.Cell>$50</Table.Cell>
                            <Table.Cell>bALLON BOUQUETS</Table.Cell>
                            <Table.Cell>$20 EACH</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>pICTURE PACKAGE</Table.Cell>
                            <Table.Cell>$50</Table.Cell>
                            <Table.Cell>aDDITONAL LATEX BALLOONS</Table.Cell>
                            <Table.Cell>$1.50 EACH</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>CHARACTER APPEARANCE</Table.Cell>
                            <Table.Cell>$100</Table.Cell>
                            <Table.Cell>fOIL BALLOONS SMALL (16"-19")</Table.Cell>
                            <Table.Cell>$5 EACH</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Custom ThemeD EVENT</Table.Cell>
                            <Table.Cell>$85</Table.Cell>
                            <Table.Cell>fOIL BALLOONS Medium (20"-35")</Table.Cell>
                            <Table.Cell>$8 Each</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>CHARACTER & CUSTOM THEME BUNDLE</Table.Cell>
                            <Table.Cell>$150</Table.Cell>
                            <Table.Cell>fOIL BALLOONS LARGE (36" AND UP)</Table.Cell>
                            <Table.Cell>$12 EACH</Table.Cell>
                        </Table.Row>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell colspan="4" id='card3'> FOOD Add-Ons</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Regular pIZZA Pie</Table.Cell>
                            <Table.Cell>$18</Table.Cell>
                            <Table.Cell>House/Caesar Salad half tray (serves 6-8)</Table.Cell>
                            <Table.Cell>$25</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Pepperoni PIZZA Pie</Table.Cell>
                            <Table.Cell>$20</Table.Cell>
                            <Table.Cell>House/Caesar Salad full tray (serves 10-12) </Table.Cell>
                            <Table.Cell>$43</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Sicilian Pie</Table.Cell>
                            <Table.Cell>$19</Table.Cell>
                            <Table.Cell>Garlic Knots-half tray</Table.Cell>
                            <Table.Cell>$35</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>BRUSCHETTA Pie</Table.Cell>
                            <Table.Cell>$24</Table.Cell>
                            <Table.Cell>Garlic Knots- full tray</Table.Cell>
                            <Table.Cell>$47</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>VEGETABLE Pie</Table.Cell>
                            <Table.Cell>$24</Table.Cell>
                            <Table.Cell>Stuffed Knots: Either spinach, sausage, or pepperoni (each)</Table.Cell>
                            <Table.Cell>$1.50</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Chicken Fingers half tray</Table.Cell>
                            <Table.Cell>$50</Table.Cell>
                            <Table.Cell>2 Liter of Soda (cOKE,DIET COKE, SPRITE, GINGER ALE)</Table.Cell>
                            <Table.Cell>$4</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Chicken Fingers full tray</Table.Cell>
                            <Table.Cell>$85</Table.Cell>
                            <Table.Cell>Gallon of Water</Table.Cell>
                            <Table.Cell>$4</Table.Cell>
                        </Table.Row>
                          <Table.Row>
                            <Table.Cell>French Fries half tray</Table.Cell>
                            <Table.Cell>$20</Table.Cell>
                            <Table.Cell> Additional cupcakes</Table.Cell>
                            <Table.Cell> $1.50 each</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>French Fries full tray</Table.Cell>
                            <Table.Cell>$35</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <br></br>

            </div>
        </div>
        </React.Fragment>
    )
}

export default BdayParties
