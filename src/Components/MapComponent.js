import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './MarkerComponent';


class SimpleMap extends Component {

  static defaultProps = {
    center: {
      lat: -29.087217,
      lng: 26.154898
    },
    zoom: 5.8
  };

  
 
  render() {
    return (
      <div style={{ height: '95vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDoATwXhVPVR-k3VQCzhac4QZmXkYxfxRI" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}   
      >
      
      </GoogleMapReact>
      </div>

    );
  }
}
 
export default SimpleMap;

