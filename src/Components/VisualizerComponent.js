import React, { Component } from 'react';
import SimpleMap from './MapComponent';
import VisualizerStyles from '../StyleComponents/VisualizerStyles';


class Visualizer extends Component {	
  render() {
    return (
      <VisualizerStyles>
        <h1> The Rona Visualizer</h1>
    <h2> Country  - <b> {this.props.country} </b> Tests Conducted: <b> {this.props.tests}</b></h2>
          <h2> Confirmed Cases : <b style = {confirmed}> {this.props.confirmed} </b> Active Cases : <b>{this.props.active}</b> Recovered Cases : <b  style = {recovered}>{this.props.recovered } </b> Deaths : <b  style = {death}> {this.props.deaths}</b></h2> 

          <div style={{ height: '50%', width: '100%' }}>
          <SimpleMap center = { this.props.center}
            zoom = {this.props.zoom}
            />
          </div>

          <h2> Global Stats </h2>
          <h2> Total Confirmed Cases : <b  style = {confirmed}> {this.props.global_confirmed}</b>  Total Recovered Cases : <b style = {recovered}>{this.props.global_recovered } </b> Total Deaths : <b  style = {death}> {this.props.global_deaths}</b></h2> 
    </VisualizerStyles>

    );
  }
}

const death = {
	color: '#ff5454'
};

const confirmed = {
	color: '#ffd154'
};

const recovered= {
	color: '#76ff54'
};
 
export default Visualizer;

