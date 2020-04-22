import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class SimpleMap extends Component { 
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

