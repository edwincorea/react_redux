import React, { Component } from 'react';
import GoogleMap from "./google_map";

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {lat: -34.397, lng: 150.644};
  }

  changeLocation(){
    this.setState({lat: 40.7128, lng: -74.005});
  }

  render() {
    return (
      <div className="mapContainer">
        Map me!
        <button onClick={this.changeLocation.bind(this)}>
          New York
        </button>
        <GoogleMap lat={this.state.lat} lng={this.state.lng} />
      </div>      
    );
  }
}
