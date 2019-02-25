import React, { Component } from 'react';
import HogGIFs from './HogGIFs'

export default class HogGifContainer extends Component {

  state={
    hogGIFs: [],
    error: null
  }

  componentDidMount() {
    this.hogGIFs()
  }

  hogGIFs = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=Y4yujhO9qYmiY5JJNYwUzLKhDCkP6X04&q=pig&limit=25&offset=0&rating=G&lang=en`)
    .then(res => res.json())
    .then(gifObject => this.setState({ hogGIFs: gifObject.data }))
    .catch(error => this.setState({ error }))
  }


  render(){
    return (
      <div className="ui grid container">
        <HogGIFs hogGIFs={this.state.hogGIFs} />
      </div>
    )
  }
}
