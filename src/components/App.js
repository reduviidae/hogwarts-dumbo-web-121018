import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.searchHogs = this.searchHogs.bind(this)
    this.filterByName = this.filterByName.bind(this)
    this.filterByWeight = this.filterByWeight.bind(this)
  }

  state ={
    hogs: hogs,
    searchTerm: "",
    filteredHogs: hogs,
    hogGIFs: {}
  }

  componentDidMount() {
    this.hogGIFs()
  }

  hogGIFs(){
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=Y4yujhO9qYmiY5JJNYwUzLKhDCkP6X04&q=hog&limit=25&offset=0&rating=G&lang=en`)
    .then(res => res.json)
    .then(gifObject => this.showGifs(gifObject))
  }

  showGifs(gifObject){
    console.log(gifObject)
  }

  searchHogs(e){
    this.setState({ searchTerm: e.target.value })
    let hogArray = hogs.filter(hog => hog.name.toLowerCase().includes(this.state.searchTerm))
    this.setState({ filteredHogs: hogArray })
  }

  filterByName(){
    const hogsByName = hogs.sort(function(a,b){
      let textA = a.name.toUpperCase();
      let textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    this.setState({ filteredHogs: hogsByName })
  }

  filterByWeight(){
    const hogsByWeight = hogs.sort(function(a,b){
      let weightA = a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
      let weightB = b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
      return (weightA < weightB) ? -1 : (weightA > weightB) ? 1 : 0;
    });
    this.setState({ filteredHogs: hogsByWeight })
  }

  render() {
    return (
      <div className="App">
          < Nav searchHogs={this.searchHogs} filterByName={this.filterByName} filterByWeight={this.filterByWeight} hogs={this.state.hogs}/>
          < HogContainer hogs={this.state.filteredHogs}/>
      </div>
    )
  }
}

export default App;
