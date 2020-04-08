import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -26.195246,
      lng: 28.034088
    },
    zoom: 5.5
  };

  
 
  render() {
    return (
      // Important! Always set the container height explicitly
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

