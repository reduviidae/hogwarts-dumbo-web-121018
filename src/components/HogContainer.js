import React, { Component } from 'react'
import HogCard from './HogCard'

export default class HogContainer extends Component {


  render(){
    const hogs = this.props.hogs.map((hog, index) => <HogCard hog={hog} key={index} />)
    return(
      <div className="ui grid container">
        {hogs}
      </div>
    )
  }
}
