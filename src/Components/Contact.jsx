import React, {Component} from 'react';
import {Icon, List} from 'semantic-ui-react'
import {Button, Form} from 'react-bootstrap';

import Gallery from './Gallery'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: '',
                comment: ''
            }
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({form: {...this.state.form, [name]: value}})
    }

    onSubmit = (e) => {
        const {form: {email, comment}} = this.state;
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email_address: email, comment: comment})
        }).then(console.log).finally(()=>{this.props.history.push("/")})
    };

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <div id='Start' className="w3-text-white smooth neon1q mt-30">
                    <List>
                        <List.Item textAlign='center' className='w3-text-white'> 418 Bedford Avenue Bellmore, NY
                            11710</List.Item>
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
                    <div className="mt-30">
                        <a href="https://www.facebook.com/planetplayny" target="_blank">
                            <Icon size='huge' className="facebook"/></a>
                        <a href="https://www.instagram.com/planetplayny" target="_blank">
                            <Icon size='huge' className="instagram"/></a>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        <Form className="contact-form">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.state.email} name="email"
                                            type="email" placeholder="Email Address"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicDiscription">
                                <Form.Label>Comments & Questions</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.state.comment} name="comment"
                                            type="text" placeholder="Tell us what you think"/>
                            </Form.Group>
                            <Button onClick={this.onSubmit} variant="primary">
                                Submit
                            </Button>
                        </Form><br/><br/>
                        <Gallery/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;
