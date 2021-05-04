import React, { Component } from 'react';
import {Header, Container, Icon, Form, Input, TextArea, Checkbox, Button, List} from 'semantic-ui-react'
import Gallery from './Gallery'

class Contact extends Component {

  state ={
    email:'',
    comment:''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitEmail=()=>{

  }

  render() {
    console.log(this.state);
    return (
      <div id='Start' className="w3-text-white smooth neon1q">
      <List>
      <List.Item textAlign='center' className='w3-text-white'> 418 Bedford Avenue Bellmore, NY 11710</List.Item>
      <List.Item>516-636-5622</List.Item>
    <br></br>
      <List.Item>Hours</List.Item>
    <br></br>
    <List.Item>Monday 10am-4:30pm</List.Item>
    <List.Item>Tuesday 10am-4:30pm</List.Item>
    <List.Item>Wednesday 10am-4:30pm</List.Item>
    <List.Item>Thursday Closed</List.Item>
    <List.Item>Friday 3pm - 7pm</List.Item>
    <List.Item>Saturday 11am -7pm</List.Item>
    <List.Item>Sunday 11am -5pm</List.Item>
      </List>
    <div>
      <a href="https://www.facebook.com/planetplayny" target="_blank">
      <Icon size='huge' className="facebook"/></a>
      <a href="https://www.instagram.com/planetplayny" target="_blank">
      <Icon size='huge' className="instagram"/></a>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div>
    <Form>
      <Form.Group widths='equal'>
        <Form.Field control={Input} name='email' value={this.state.email} onChange={this.handleChange} label='Email Address' placeholder='Email Address' />
      </Form.Group>
      <Form.Field control={TextArea} name='comment' value={this.state.comment} onChange={this.handleChange} label='Comments & Questions' placeholder='Tell us what you think' />
      <Form.Field control={Button}>Submit</Form.Field>
    </Form>
    <br></br>
    <br></br>
     <Gallery/>
    </div>
  </div>
    );
  }

}

export default Contact;
