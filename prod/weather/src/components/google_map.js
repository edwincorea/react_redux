import React, {Component} from "react";

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {                
                lng: this.props.lon,
                lat: this.props.lat
            }
        });

    } 

    render() {
        //this.refs.map
        return <div ref="map" />;        
    }
    
}

export default GoogleMap;