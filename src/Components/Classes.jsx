import React, { Component } from 'react';
import {Grid, Card, Image,Table} from 'semantic-ui-react'
import class1 from '../images/class1.jpeg'
import messy from '../images/MessyPlay.jpeg'
import story from '../images/Storytime.jpeg'
import cosmickids from '../images/CosmicKids.jpeg'
import special from '../images/Special.jpeg'
import header from '../images/Header.jpeg'

class Classes extends Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <Image size="large" src={header}  verticalAlign='top'/>
                </div>
                <br></br><br></br>
                <div>
                    <p className='w3-text-white KGN'>Planet Play is proud to say that all of their toddler and preschool classes have been carefully designed and created by Michelle Vasilescu, a New York State certified teacher. With over ten years of early childhood general and special education teaching experience, Michelle has the knowledge and passion necessary to create classes that foster growth and development in babies, toddlers and preschoolers. Our classes help to ignite the senses and creativity of our children, while being hands-on and  promoting academic and social growth. They also provide parents with an opportunity to learn and play with their young ones. Still not convinced that Planet Play is right for your child? We offer drop-in classes, so you can attend and experience Planet Play’s take on learning before commiting to a course.
                    </p>
                    <br></br><br></br>
                    <p className="KGN">Classes run for 3 month long semesters. We meet once a week for 45 minutes each class. All of Planet Play’s classes have been designed by a certified teacher. </p>
                    <br></br><br></br>
                    <div className="row classes-grid">
                        <div className="col-12 col-xl-4 my-4">
                            <Card id='card3' className="mx-auto">
                                <Card.Content>
                                    <Card.Header><h3 className="smooth w3-text-white">Story Time &amp; Connection</h3></Card.Header>
                                    <Card.Meta>
                                        <span className='KGN date'><b>2-4 years old</b></span>
                                    </Card.Meta>
                                    <Image src={story}/>
                                    <br></br><br></br>
                                    <Card.Content extra><span className='KGN date'><b>$325 per Semester</b></span></Card.Content>
                                    <Card.Description>
                                        <p className="KGN"><b>Storytime and Connection is the perfect way to build and encourage a love for reading. Children
                                            will be exposed to a variety of children’s books each semester. They will learn to listen to read
                                            alouds, answer age appropriate questions, form predictions, explore illustrations, and make
                                            connections. Stories will then come to life with connected and engaging activities and crafts.
                                            Children are never too young to build comprehension skills, and this class will do just that, while
                                            also fostering an undeniable love for reading.</b></p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>

                        <div className="col-12 col-xl-4 my-4">
                            <Table id="card9" unstackable celled>
                                <Table.Header className='smooth'>
                                    <Table.Row id="card9">
                                        <Table.HeaderCell textAlign='center' width='six'>Mon</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center' width='six'>Wed</Table.HeaderCell>
                                        {/* <Table.HeaderCell textAlign='center'>Wed</Table.HeaderCell> */}
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body className='smooth12'>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'><p>Cosmic Kids</p> <p className="KGN"><b>2:00-2:45</b></p></Table.Cell>
                                        <Table.Cell textAlign='center'><p>Storytime & Connection</p> <p className="KGN"><b>10:15-11:00</b></p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                    <Table.Cell textAlign='center'><p>Messy Play</p> <p className="KGN"><b>5:30-6:15</b></p></Table.Cell>
                    <Table.Cell textAlign='center'><p>Blast Into Learning</p> <p className="KGN"><b>1:00-1:45</b></p></Table.Cell>
                  </Table.Row>
                                </Table.Body>
                            </Table>

                            <Table id="card9" unstackable celled>
                                <Table.Header className='smooth'>
                                    <Table.Row id="card9">
                                        <Table.HeaderCell textAlign='center' width='six'>Thurs</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center' width='six'>Fri</Table.HeaderCell>
                                        {/* <Table.HeaderCell textAlign='center'>Wed</Table.HeaderCell> */}
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body className='smooth12'>
                                    <Table.Row>
                                        <Table.Cell textAlign='center'><p>Special Needs Art & Play</p> <p className="KGN"><b>1:00-1:45</b></p></Table.Cell>
                                        <Table.Cell textAlign='center'><p>Messy Play</p> <p className="KGN"><b>4:15-5:00</b></p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                    <Table.Cell textAlign='center'><p>Blast Into Learning</p> <p className="KGN"><b>6:00-6:45</b></p></Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>

                        <div className="col-12 col-xl-4 my-4">
                            <Card id='card6' className="mx-auto">
                                <Card.Content>
                                    <Card.Header><h3 className="smooth w3-text-white">Blast Into Learning</h3></Card.Header>
                                    <Card.Meta>
                                        <span className='KGN date'><b>3-4 years old</b></span>
                                    </Card.Meta>
                                    <Image src={class1}/>
                                    <br></br><br></br>
                                    <Card.Content extra><span className='KGN date'><b>$380 per Semester</b></span></Card.Content>
                                    <Card.Description>
                                        <p className="KGN"><b>Blast into Learning is a preschool and kindergarten readiness program that will help your three or four year-old learn foundational skills, in an engaging and age appropriate manner. This is a toddler class unlike any other on Long Island. Our curriculum has been designed specifically for Planet Play by a NYS certified teacher and curriculum designer. School based learning and activities will be taught through hands-on thematic units. Each semester will cover two different units, allowing you to complete a full year of learning without ever repeating a course!</b></p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>

                        <div className="col-12 col-xl-4 my-4">
                            <Card id='card7' className="mx-auto">
                                <Card.Content>
                                    <Card.Header><h3 className="smooth w3-text-white">Messy Play</h3></Card.Header>
                                    <Card.Meta>
                                        <span className=' KGN date'><b>All Ages</b></span>
                                    </Card.Meta>
                                    <Image src={messy}/>
                                    <br></br><br></br>
                                    <Card.Content extra><span className='KGN date'><b>$300 per Semester</b></span></Card.Content>
                                    <Card.Description>
                                        <p className="KGN"><b>Messy Play is a dress for mess type of class! Children will explore a selection of tactile and messy play materials. We will engage their senses, encourage creativity, and have a blast all while getting messy. There is shaving cream, paint, play doh, glitter, stickers, and more! The best part, the staff at Planet Play will do all the cleaning afterwards!</b></p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>

                        <div className="col-12 col-xl-4 my-4">
                            <Card id='card8' className="mx-auto">
                                <Card.Content>
                                    <Card.Header><h3 className="smooth w3-text-white">Cosmic Kids</h3></Card.Header>
                                    <Card.Meta>
                                        <span className='KGN date'><b>6 months -18 months</b></span>
                                    </Card.Meta>
                                    <Image src={cosmickids}/>
                                    <br></br><br></br>
                                    <Card.Content extra><span className='KGN date'><b>$300 per Semester</b></span></Card.Content>
                                    <Card.Description>
                                        <p className="KGN"><b>Cosmic Kids is a program designed for our youngest space cadets. Through music, stories,
                                            movement, games and more, your little one will learn to build confidence,  develop social skills,
                                            and learn about things such as color, rhythm and more.</b></p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>

                        <div className="col-12 col-xl-4 my-4" id='Sss'>
                            <Card id='card5' className="mx-auto">
                                <Card.Content>
                                    <Card.Header><h3 className="smooth w3-text-white"><h1 className="smooth w3-text-white">Special Needs</h1> <h1 className="smooth w3-text-white">Art & Play</h1></h3></Card.Header>
                                    <Card.Meta>
                                        <span className='KGN date'><b>All Ages</b></span>
                                    </Card.Meta>
                                    <Image src={special}/>
                                    <br></br><br></br>
                                    <Card.Content extra><span className='KGN date'><b>$336 per Semester</b></span></Card.Content>
                                    <Card.Description>
                                        <p className="KGN">
                                            <b>Special Needs Art and Play is a safe space for children of all abilities to participate in craft
                                                activities and play with other children. Sensory play, fine motor work, art activities, and free play
                                                are just some of the things this course includes. Our program is unique, as it has been designed
                                                by both a NYS Special Education teacher and a mother of a child with special needs. Michelle
                                                and Jacqueline have worked together to create a program that will engage your child and
                                                promote socialization, all while taking into consideration their individual learning styles and
                                                needs.</b></p>
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
