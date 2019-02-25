import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';
import HogGifContainer from './HogGifContainer'

class App extends Component {
  constructor(props){
    super(props);
    this.searchHogs = this.searchHogs.bind(this)
  }

  state ={
    hogs: hogs,
    searchTerm: "",
    filteredHogs: hogs
  }

  searchHogs = e => {
    this.setState({ searchTerm: e.target.value })
    let hogArray = hogs.filter(hog => hog.name.toLowerCase().includes(this.state.searchTerm))
    this.setState({ filteredHogs: hogArray })
  }

  filterHogs = (event, data) => {
      let key = ""
    switch(data.value){
      case 'weight':
      key = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
      break;
      case 'name':
      key = "name";
      break;
      default:
      return null
    }
    const filteredHogs = hogs.sort(function(a,b){
      let textA = a[key];
      let textB = b[key];
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    this.setState({ filteredHogs })
  }


  render() {
    return (
      <div className="App">
          < Nav searchHogs={this.searchHogs} filterHogs={this.filterHogs} hogs={this.state.hogs}/>
          < HogContainer hogs={this.state.filteredHogs}/>
          < HogGifContainer />
      </div>
    )
  }
}

export default App;
