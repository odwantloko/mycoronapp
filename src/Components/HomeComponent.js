import React, { Component } from 'react';
import SimpleMap from './MapComponent';
import VisualizerStyles from '../StyleComponents/VisualizerStyles';
import Visualizer from './VisualizerComponent';


class Home extends Component {
  
  constructor(props){
    super(props);

    this.state = { 
      data: {}, 
      global_data : {},
      center : {
        lat: -29.087217,
        lng: 26.154898
      }, 
      zoom: 6.2
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


    }).catch(console.log())

    // Global Stats API Call
    fetch('https://api.covid19api.com/summary', postOptions)
        .then(res => res.json())
        .then((data) => {
        this.setState({global_data:data.Global})
        console.log(data.Global)   
        }).catch(console.log)

  
  }
  
 
  render() {
    return (
    <div>
      {typeof this.state.data.Country !='undefined' ? 
        <Visualizer
          country = {this.state.data.Country}
          active = {this.state.data.Active}
          confirmed = {this.state.data.Confirmed}
          recovered = {this.state.data.Recovered}
          deaths = {this.state.data.Deaths}
          center = { this.state.center}
          zoom = {this.state.zoom}
          global_deaths = {this.state.global_data.TotalDeaths}
          global_confirmed = {this.state.global_data.TotalConfirmed}
          global_recovered = {this.state.global_data.TotalRecovered}
        />: <div> loading .. </div>}
    </div>
     
       
      
    );
  }
}

export default Home;

