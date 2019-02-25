import React, { Component } from "react";
import HogContent from "./HogContent"



export default class HogCard extends Component {

  state={
    showHog: true,
  }


  hideHog = () => {
    this.setState({ showHog: false })
  }


  render() {

    return (

        <div>
        { this.state.showHog ? <HogContent hog={this.props.hog} hideHog={this.hideHog} showHogDetails={this.showHogDetails} /> : null }
        </div>

    );
  }
}
