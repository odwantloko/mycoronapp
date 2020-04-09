import React, { Component } from 'react';
import marker from './../Assets/marker_blue.png'

class Marker extends Component {
    
 
  render() {
    return (
      <div>
          <img src={require('./../Assets/marker_black.png')} width = "50" height = "50" alt="Marker" />
      </div>
    );
  }
}
 
export default Marker;

