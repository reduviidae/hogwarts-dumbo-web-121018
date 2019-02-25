import React, { Component } from "react";

export default class HogGIFs extends Component {
  render(){
    const hoggies = this.props.hogGIFs.map(gif => <img className="pigTile card ui eight wide column" key={gif.id} alt={gif.title} src={gif.images.original.url} />)
    return(
      <div className="gifContainer">
      {hoggies}
      </div>
    )
  }
}
