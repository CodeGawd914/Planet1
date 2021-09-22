import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import {Grid, Card, Image,Table, Button, Segment} from 'semantic-ui-react'
import class1 from '../images/class1.jpeg'
import messy from '../images/MessyPlay.jpeg'
import story from '../images/Storytime.jpeg'
import cosmickids from '../images/CosmicKids.jpeg'
import special from '../images/Special.jpeg'
import header from '../images/Header.jpeg'
import cl1 from '../images/cl1.jpeg'
import cl2 from '../images/cl2.jpeg'
import cl3 from '../images/cl3.jpeg'
import cl4 from '../images/cl4.jpeg'
import cl5 from '../images/cl5.jpeg'
import cl6 from '../images/cl6.jpeg'

class Classes extends Component {

    render() {
        return (
            <React.Fragment>
                <div id='Classes'>
                <h1 className="neon3h smoothb w3-text-white">Class Information</h1>
                <br></br>
                    <Image size="large" src={header}  verticalAlign='top'/>
                </div>
                <br></br><br></br>
                <div>
                    <p className='w3-text-white KGNb'>Planet Play is proud to say that all of their toddler and preschool classes have been carefully designed and created by Michelle Vasilescu, a New York State certified teacher. With over ten years of early childhood general and special education teaching experience, Michelle has the knowledge and passion necessary to create classes that foster growth and development in babies, toddlers and preschoolers. Our classes help to ignite the senses and creativity of our children, while being hands-on and  promoting academic and social growth. They also provide parents with an opportunity to learn and play with their young ones. Still not convinced that Planet Play is right for your child? We offer drop-in classes, so you can attend and experience Planet Play’s take on learning before commiting to a course.
                    </p>
                    <br></br><br></br>
                    <p className="KGNb">Classes run for 3 month long semesters. We meet once a week for 45 minutes each class. All of Planet Play’s classes have been designed by a certified teacher. </p>
                    <br></br>
                    <p className="KGNb">Drop in option available, call in advance to book your class. $35 per drop-in class.</p>
                    <br></br>
                    <Segment id='card8' attached>

                        <Grid.Row centered>
                        <div className="col-md-4">
                          <Image src={cl1}/>
                        </div>
                        <div className="col-md-4">
                          <Image src={cl3}/>
                        </div>
                        <div className="col-md-4">
                          <Image src={cl2}/>
                        </div>
                        </Grid.Row>

                        <Grid.Row centered>
                        <div className="col-md-4">
                          <Image src={cl5}/>
                        </div>
                        <div className="col-md-4">
                          <Image src={cl4}/>
                        </div>
                        <div className="col-md-4">
                          <Image src={cl6}/>
                        </div>
                        </Grid.Row>

                    </Segment>



                    <br></br><br></br>
                    <h1 className="smooth16 neonRedh w3-text-orange" >Fall Class Schedule</h1>
                    <div className="row classes-grid">
                        <div className="col-12 col-xl-4 my-4">
                            <Card id='card3' className="mx-auto">
                                <Card.Content>
                                    <Card.Header><h3 className="smoothb w3-text-white">Messy Play</h3></Card.Header>
                                    <Card.Meta>
                                        <span className='KGNb date'><b>2-5 years old</b></span>
                                    </Card.Meta>
                                    <Image src={messy}/>
                                    <br></br><br></br>
                                    <Card.Content extra><span className='KGNb date'><b></b></span></Card.Content>
                                    <Card.Description>
                                        <p className="KGNb"><b>Messy play is a dress for mess kind of class! Children will explore a selection of tactical and messy play materials. We will engage their senses, encourage creativity, and and have a blast all while getting messy. There is shaving cream, paint, play douh, glitter, stickers, and more! The best part, the staff at planet play will do all of the cleaning afterwords.</b></p>
                                        <h4 className="smoothb w3-text-white">Mondays</h4>
                                        <h4 className="smoothb w3-text-white">4:45pm-5:30pm</h4>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>

                        <div className="col-12 col-xl-4 my-4">
                        <br></br>
                            <br></br>
                                <br></br>
                                    <br></br>

                        <Button as={Link} to='/Coming#top' id='card5'> <p className='neon1 smoothb'>Just $325 Schedule now!</p></Button>
                            <br></br>
                                <br></br>
                                    <br></br>
                                    <h3 className="neon1q smoothb w3-text-orange">Classes run September through November</h3>
                                    <br></br>
                                        <br></br>
                                            <br></br>
                                            <h3 className="neon1q smoothb w3-text-orange">Call 516-636-5622 to register!</h3>




                        </div>

                        <div className="col-12 col-xl-4 my-4">
                            <Card id='card6' className="mx-auto">
                                <Card.Content>
                                    <Card.Header><h3 className="smoothb w3-text-white">Blast Into Learning</h3></Card.Header>
                                    <Card.Meta>
                                        <span className='KGNb date'><b>3-4 years old</b></span>
                                    </Card.Meta>
                                    <Image src={class1}/>
                                    <br></br><br></br>
                                    <Card.Content extra><span className='KGNb date'><b></b></span></Card.Content>
                                    <Card.Description>
                                        <p className="KGNb"><b>Blast into learning is a pre-school and kindergarten readiness program that will help your child learn foundational skills in an  engaging and age appropriate manor. This is a toddler class unlike any other. our curriculum has been designed specifically for planey play by an NYS certified teacher Michelle Vasilescu. Michelle will be leading your class each week.</b></p>
                                        <h4 className="smoothb w3-text-white">Mondays</h4>
                                        <h4 className="smoothb w3-text-white">4:00pm-4:45pm</h4>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>

                        <div className="col-12 col-xl-4 my-4">
                            <Card id='card7' className="mx-auto">
                                <Card.Content>
                                    <Card.Header><h3 className="smoothb w3-text-white"><h1 className="smoothb w3-text-white">Special Needs</h1> <h1 className="smoothb w3-text-white">Art & Play</h1></h3></Card.Header>
                                    <Card.Meta>
                                        <span className=' KGNb date'><b>2-5 years old</b></span>
                                    </Card.Meta>
                                    <Image src={special}/>
                                    <br></br><br></br>
                                    <Card.Content extra><span className='KGNb date'><b></b></span></Card.Content>
                                    <Card.Description>
                                        <p className="KGNb"><b>Special needs art and play is a safe space for children of all abilities to participate and craft activities and play with other children. Sensory play, fine motor work, art activities, and free play are just some of the things this course includes.</b></p>
                                          <h4 className="smoothb w3-text-white">Wednesdays</h4>
                                          <h4 className="smoothb w3-text-white">12:15pm-1:00pm</h4>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>

                        <div className="col-12 col-xl-4 my-4">
                            <Card id='card2' className="mx-auto">
                                <Card.Content>
                                    <Card.Header><h3 className="smoothb w3-text-white">Story time & Connection</h3></Card.Header>
                                    <Card.Meta>
                                        <span className='KGNb date'><b>2-4 years old</b></span>
                                    </Card.Meta>
                                    <Image src={story}/>
                                    <br></br><br></br>
                                    <Card.Content extra><span className='KGNb date'><b></b></span></Card.Content>
                                    <Card.Description>
                                        <p className="KGNb"><b>Story time and connection is the perfect way to build and encourge a love for reading. Children will be exposed to a variety of children's books each semester. They will learn to listen as books are read aloud to them and enjoy as the stories come to life with connected and engaging activities and crafts.</b></p>
                                        <h4 className="smoothb w3-text-white">Thursdays</h4>
                                        <h4 className="smoothb w3-text-white">5:00pm-5:45pm</h4>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>

                        <div className="col-12 col-xl-4 my-4" id='Sss'>
                            <Card id='card5' className="mx-auto">
                                <Card.Content>
                                    <Card.Header><h3 className="smoothb w3-text-white">Cosmic Kids</h3></Card.Header>
                                    <Card.Meta>
                                        <span className='KGNb date'><b>12-24 Months</b></span>
                                    </Card.Meta>
                                    <Image src={cosmickids}/>
                                    <br></br><br></br>
                                    <Card.Content extra><span className='KGNb date'><b></b></span></Card.Content>
                                    <Card.Description>
                                        <p className="KGNb">
                                            <b>Cosmic Kids is a program designed for our youngest space cadets. Through music, stories, movement, games, and more, your little one will learn to build confidence, develop social skills, and learn about things such as color, rhythm, and other developmentally appropriate skills. </b></p>
                                            <h4 className="smoothb w3-text-white">Wednesdays</h4>
                                            <h4 className="smoothb w3-text-white">11:00am-11:45am</h4>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                    </div>


                </div>
            </React.Fragment>
        );
    }

}

export default Classes;
