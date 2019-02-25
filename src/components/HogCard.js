import React, { Component } from "react";

const importAll = require =>
require.keys().reduce((acc, next) => {
  acc[next.replace("./", "")] = require(next);
  return acc;
}, {});

const images = importAll(
  require.context("../hog-imgs", false, /\.jpg$/)
);


export default class HogCard extends Component {
  greased(){
    if(this.props.hog.greased === true){
      return "Greased"
    }else{
      return "Ungreased"
    }
  }


  hogImgs() {
    const thisHog = this.props.hog.name.toLowerCase().split(" ").join("_").concat(".jpg")
    for (let key in images){
      if(key === thisHog){
        return <img alt={this.props.hog.name} src={images[key]} />
      }
    }
  }

  showHogDetails(e){
    const style = e.target.nextSibling.style
    if(style.visibility === "hidden"){
      style.visibility = "visible"
    } else {
      style.visibility = "hidden"
    }
  }

  hideHog(e){
    e.target.parentElement.style.visibility = "hidden"
  }


  render() {
    const hiddenStyle ={
      visibility:"hidden"
    }

    const xButtonStyle = {
      float: "right"
    }

    return (
      <div className="card ui eight wide column" >
        <button style={xButtonStyle} id="x" onClick={this.hideHog}>
            X
        </button>
        <div className="content">
          {this.hogImgs()}
          <a className="header" onClick={this.showHogDetails}>{this.props.hog.name} </a>
          <div className="hog-details" style={hiddenStyle} >
          <div className="meta">
            <span className="weight">weight: {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</span>
          </div>
          <div className="specialty">
            Specialty: {this.props.hog.specialty}
          </div>
          <div className="medal">
            Highest Medal Achieved: {this.props.hog['highest medal achieved']}
          </div>
          <div className="extra content">
            <a>
              {this.greased()}
            </a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
