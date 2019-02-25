import React, { Component } from 'react';
import HogDetails from "./HogDetails"

const importAll = require =>
require.keys().reduce((acc, next) => {
  acc[next.replace("./", "")] = require(next);
  return acc;
}, {});

const images = importAll(
  require.context("../hog-imgs", false, /\.jpg$/)
);

export default class HogContent extends Component {

  state={
    showDetails: false
  }

  showHogDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  hogImgs() {
    const thisHog = this.props.hog.name.toLowerCase().split(" ").join("_").concat(".jpg")
    for (let key in images){
      if(key === thisHog){
        return <img alt={this.props.hog.name} src={images[key]} />
      }
    }
  }

  render(){

    return(
      <div className="pigtiles card ui eight wide column" >
        <button onClick={this.props.hideHog}>
            x
        </button>
        <div className="content">
          {this.hogImgs()}
          <a className="header" onClick={this.showHogDetails}> {this.props.hog.name} </a>

        </div>
          {this.state.showDetails ? <HogDetails hog={this.props.hog} /> : null}
      </div>
    )
  }
}
