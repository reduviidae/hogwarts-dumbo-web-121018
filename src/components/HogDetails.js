import React, { Component } from 'react';

export default class HogDetails extends Component {
  greased(){
    if(this.props.hog.greased === true){
      return "Greased"
    }else{
      return "Ungreased"
    }
  }
  render (){
    return (
      <div className="hog-details" >
      <div className="meta">
        <span className="normalText weight">weight: {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</span>
      </div>
      <div className="specialty hoggyText">
        Specialty: {this.props.hog.specialty}
      </div>
      <div className="medal achievementText">
        Highest Medal Achieved: {this.props.hog['highest medal achieved']}
      </div>
      <div className="extra content">
        <a>
          {this.greased()}
        </a>
      </div>
      </div>
    )
  }
}
