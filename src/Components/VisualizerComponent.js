import React, { Component } from 'react';
import SimpleMap from './MapComponent';
import VisualizerStyles from '../StyleComponents/VisualizerStyles';


class Vizualizer extends Component {
  
  constructor(props){
		super(props);
	
		this.state = { 
			data: {}, global_data : {}
		}
  }
  
  componentDidMount = () => {


    let postOptions = {};
    
    postOptions.method = 'GET';
    
    postOptions.headers = {};
    postOptions.headers['Content-type'] = 'application/json';
   
	// Api Call for local stats
    fetch('https://api.covid19api.com/live/country/south-africa/status/confirmed', postOptions)
        .then(res => res.json())
        .then((data) => {
		this.setState({data:data[data.length-1]})
		console.log(data[data.length-1])


    }).catch(console.log)

    // Global Stats API Call
    fetch('https://api.covid19api.com/summary', postOptions)
        .then(res => res.json())
        .then((data) => {
        this.setState({global_data:data.Global})
        console.log(data.Global)   
        }).catch(console.log)

  
  }


  static defaultProps = {
    center: {
      lat: -29.087217,
      lng: 26.154898
    },
    zoom: 6.2
  };

  
 
  render() {
    return (
      <VisualizerStyles>
        <h1> The Rona Visualizer</h1>
        <h2> Country  - <b> {this.state.data.Country} </b></h2>
          <h2> Confirmed Cases : <b> {this.state.data.Confirmed} </b> Active Cases : <b>{this.state.data.Active}</b> Recovered Cases : <b>{this.state.data.Recovered } </b> Deaths : <b> {this.state.data.Deaths}</b></h2> 

          <div style={{ height: '95vh', width: '100%' }}>
          <SimpleMap/>
          </div>

          <h2> Global Stats </h2>
          <h2> Total Confirmed Cases : <b> {this.state.global_data.TotalConfirmed}</b>  Total Recovered Cases : <b>{this.state.global_data.TotalRecovered } </b> Total Deaths : <b> {this.state.global_data.TotalDeaths}</b></h2> 
    </VisualizerStyles>

    );
  }
}
 
export default Vizualizer;

