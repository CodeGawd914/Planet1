import React, { Component } from 'react'
import NewsLetter from './newsLetter'
import {  Header, Icon, Modal } from 'semantic-ui-react'
import { Button,Form } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import ConvertKitForm from 'convertkit-react'

export default class BlurAdd extends Component {

  constructor(props){
    super(props);
    this.state ={ modalOpen: false, form: {} }
  }


  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  componentDidMount(){
    if (this.props.email === ''){
      this.setState({modalOpen:true})
    }
    }

  handleChange = (e) =>  {
    const {name, value} = e.target;
    this.setState({form : {...this.state.form , [name] : value}})
  }


  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='PlanetPlay' />
        <Modal.Content>
          
          {/*<Convert  onSubmit={this.props.onSubmit}/>*/}
          <div style={{color: 'rgb(248, 242, 249)', fontWeight: 700}}>
              <h2 style={{textAlign: 'center'}}>Become a VIP Member!</h2>
            </div>
            <div style={{color: 'rgb(255, 255, 255)'}}>
              <p style={{textAlign: 'center'}}>Subscribe below and be the first to know about special events, discounts, and other out of this world information!</p>
            </div>
            <ConvertKitForm formId={2198655}/>
          
        </Modal.Content>
      </Modal>
    )
  }
}
