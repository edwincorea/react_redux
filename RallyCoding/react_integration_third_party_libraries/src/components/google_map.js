import React, { Component } from 'react';

export default class GoogleMap extends Component {
    shouldComponentUpdate(){
        //after the first time this component renders to the screen, never re-render it again...
        //never try to re-render yourself.
        return false;
    }

    componentWillReceiveProps(nextProps){
        //here we receive new props for lat and lng. Pan set to a new location.
        this.map.panTo({lat: nextProps.lat, lng: nextProps.lng});
    }

    componentDidMount(){
        //here we create Google Map and append it to the DOM, to the element with ref "map".
        this.map = new google.maps.Map(this.refs.map, {
            center: {lat: this.props.lat, lng: this.props.lng},
            zoom: 8
        });
    }

    render() {
        return (
            <div id="map" ref="map" />      
        );
    }
}