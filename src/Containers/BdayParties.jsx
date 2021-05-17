import React from 'react'
import {Table, Icon, Segment, Image, Grid, Card, List} from 'semantic-ui-react'
import bdaypic from '../images/bdaypic.jpeg'
import bdaypic1 from '../images/bdaypic1.jpg'
import bdaypic2 from '../images/bdaypic2.jpg'

const BdayParties = () => {

    return (
        <React.Fragment>
        <div className="container">
            <br/>
            <br/>
            <div id='Para'>
                <div className="container">
                <p className='w3-text-white KGN'>Our slogan isn’t “An Out of this World Adventure” for no reason. Here
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
            </div>
            <div id="Packages">
                <Grid className="ui stackable three column grid smooth bday-list" columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <Card className="sm-img-100" id="card8"
                                  image={bdaypic1}
                                  header=<p className='smooth16, neonRedh'>Birthday Blast Off</p>
                            meta=<List className="neon1h">
                            <List.Item>$599 plus tax & gratuity</List.Item>
                            <List.Item>10 Children plus the Birthday Star</List.Item>

                        </List>

                            description=
                            <List className="w3-left-align, KGN1">
                                <List.Item>-90 Minute Private Party</List.Item>
                                <List.Item>-$10 Arcade Playing Card Per Child</List.Item>
                                <List.Item>-250 Bonus Tickets for the Birthday Star</List.Item>
                                <List.Item>-Free Ticket Blaster Experience for the Birthday Star</List.Item>
                                <List.Item>-Planet Play Shirt Signed by Guests for the Birthday Star</List.Item>
                                <List.Item>-15-minute appearance from our very own Astro the Alien</List.Item>
                                <List.Item>-Galaxy Themed Paper Goods</List.Item>
                                <List.Item>-Pizza, Juice, and Cupcakes (nut-free) for Each Child</List.Item>
                                <List.Item>-Goody Bags for Each Child</List.Item>
                                <List.Item>-Two Out of This World Party Hosts</List.Item>

                            </List>

                            />
                        </Grid.Column>
                        <br></br><br></br><br></br><br></br>
                        <Grid.Column>
                            <Card className="sm-img-100" id="card8"
                                  image={bdaypic}
                                  header=<p className="smooth, neonPink">Explore the Universe</p>
                            meta=<List className="neon1h">
                            <List.Item>$799 plus tax & gratuity</List.Item>
                            <List.Item>15 children plus the Birthday Star</List.Item>

                        </List>

                            description=
                            <List className="w3-left-align KGN1">
                                <List.Item>-90 Minute Private Party</List.Item>
                                <List.Item>-$15 Arcade Playing Card Per Child</List.Item>
                                <List.Item>-750 Bonus Tickets for the Birthday Star</List.Item>
                                <List.Item>-Free Ticket Blaster Experience for the Birthday Star</List.Item>
                                <List.Item>-Planet Play Shirt Signed by Guests for the Birthday Star</List.Item>
                                <List.Item>-15-minute appearance from our very own Astro the Alien</List.Item>
                                <List.Item>-Galaxy Themed Paper Goods</List.Item>
                                <List.Item>-Pizza, Juice, and Cupcakes (nut-free) for Each Child</List.Item>
                                <List.Item>-Goody Bags for Each Child</List.Item>
                                <List.Item>-Two Out of This World Party Hosts</List.Item>
                                <List.Item>-Temporary Tattoo Station</List.Item>
                                <List.Item>-Free Open Play Pass for Each Child to Use at a Later Date</List.Item>

                            </List>
                            />
                        </Grid.Column>
                        <br></br><br></br><br></br><br></br>
                        <Grid.Column>
                            <Card className="sm-img-100" id="card8"
                                  image={bdaypic2}
                                  header=<p className="smooth, neon3">Sky’s the Limit</p>
                            meta=<List className="neon1h">
                            <List.Item>$999 plus tax & gratuity</List.Item>
                            <List.Item>18 children plus the Birthday Star</List.Item>

                        </List>

                            description=
                            <List className="w3-left-align, KGN1">
                                <List.Item>-120 Minute Private Party</List.Item>
                                <List.Item>-$20 Arcade Playing Card Per Child</List.Item>
                                <List.Item>-1,000 Bonus Tickets for the Birthday Star</List.Item>
                                <List.Item>-Free Ticket Blaster Experience for the Birthday Star</List.Item>
                                <List.Item>-Planet Play Shirt Signed by Guests for the Birthday Star</List.Item>
                                <List.Item>-15-minute appearance from our very own Astro the Alien</List.Item>
                                <List.Item>-Galaxy Themed Paper Goods</List.Item>
                                <List.Item>-Pizza, Juice, and Cupcakes (nut-free) for Each Child</List.Item>
                                <List.Item>-Goody Bags for Each Child</List.Item>
                                <List.Item>-Three Out of This World Party Hosts</List.Item>
                                <List.Item>-Temporary Tattoo Station</List.Item>
                                <List.Item>-Free Open Play Pass for Each Child to Use at a Later Date</List.Item>
                                <List.Item>-Picture Package Add-On Included for Free</List.Item>
                            </List>

                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

            <br></br>
            <br></br>
            <Grid className='KGN margin justify-content-center' columns='equal'>
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
            <div className='smooth' id='Add'>
                <Table id='card3' unstackable>
                    <Table.Header>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell colspan="4" id='card3'>Add-Ons</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>DELUXE GOODY BAG</Table.Cell>
                            <Table.Cell>$5 EACH</Table.Cell>
                            <Table.Cell>UNLIMITED VIRTUAL REALITY</Table.Cell>
                            <Table.Cell>$100</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>PERSONALIZED TUMBLER GOODY BAG</Table.Cell>
                            <Table.Cell>$8 EACH</Table.Cell>
                            <Table.Cell>CHARACTER APPERANCE</Table.Cell>
                            <Table.Cell>$100</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>PICTURE PACKAGE</Table.Cell>
                            <Table.Cell>$50</Table.Cell>
                            <Table.Cell>GLOW PARTY</Table.Cell>
                            <Table.Cell>$100</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>TATTOO STATION</Table.Cell>
                            <Table.Cell>$50</Table.Cell>
                            <Table.Cell>EXTRA HALF HOUR</Table.Cell>
                            <Table.Cell>$150</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Regular Pie</Table.Cell>
                            <Table.Cell>$15</Table.Cell>
                            <Table.Cell>Sicilian Pie</Table.Cell>
                            <Table.Cell>$16</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Pepperoni Pie</Table.Cell>
                            <Table.Cell>$19</Table.Cell>
                            <Table.Cell>Bruschetta Pie</Table.Cell>
                            <Table.Cell>$22</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Veggie Pie</Table.Cell>
                            <Table.Cell>$35</Table.Cell>
                            <Table.Cell>2 Liter of Soda</Table.Cell>
                            <Table.Cell>$4</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Garlic Knots-half tray</Table.Cell>
                            <Table.Cell>$50</Table.Cell>
                            <Table.Cell>Garlic Knots- full tray</Table.Cell>
                            <Table.Cell>$45</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>House/Caesar Salad half tray</Table.Cell>
                            <Table.Cell>$25</Table.Cell>
                            <Table.Cell>House/Caesar Salad full tray </Table.Cell>
                            <Table.Cell>$40</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Chicken Fingers half tray</Table.Cell>
                            <Table.Cell>$50</Table.Cell>
                            <Table.Cell>Chicken Fingers full tray</Table.Cell>
                            <Table.Cell>$85</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Stuffed Knots: Either spinach, sausage, or pepperoni (each)</Table.Cell>
                            <Table.Cell>$1.50</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
        </React.Fragment>
    )
}

export default BdayParties
