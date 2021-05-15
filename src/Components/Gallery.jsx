import React, { Component } from 'react';
import { Card, Icon, Image, Grid} from 'semantic-ui-react'


class Gallery extends Component {
  state = {
    data: []
  }

  componentDidMount(){
    fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=7df3e1f295cb8a7bb024873ffa7251d0')
    .then(res => res.json())
    .then((data) => this.setState({data: data.data}))
  }

  render() {
    console.log('tester',this.state);

    let list = this.state.data.map(data => <Grid.Column>
      <Card key={data.id}>
      <a href="https://www.instagram.com/planetplayny" target="_blank">
        <Image src={data.images.standard_resolution.url} /></a>
      </Card>
      </Grid.Column>
    )
    return (
      <div className='grid'>
      <Grid columns={3} divided>
      {list}
      <p>
        Error : Data Not Found From Instagram API.<br/>
        (Please Add Your Instagram API Key)
      </p>
      </Grid>
      </div>
    );
  }

}

export default Gallery;
