import React, { Component } from 'react';
import ConvertKitForm from 'convertkit-react'

const MY_FORM_ID = 2198655;

class Convert extends Component {

  render() {
    return (
      <div>
      <ConvertKitForm formId={MY_FORM_ID}/>
      </div>
    );
  }

}

export default Convert;
