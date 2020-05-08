import React, { Component } from 'react';
import Visualizer from './VisualizerComponent';
import firebase from './../firebase.js'
import CoronaBanner from '../StyleComponents/CoronaBannerStyle';


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
      zoom: 6.2,
      testData: {}
		}
  }
  
  componentDidMount = () => {
    let postOptions = {};
    
    postOptions.method = 'GET';
    
    postOptions.headers = {};
    postOptions.headers['Content-type'] = 'application/json';

    // Global Stats API Call
    fetch('https://api.covid19api.com/summary', postOptions)
        .then(res => res.json())
        .then((data) => {
        this.setState({global_data:data.Global})

        let values = data.Countries;
        let obj = {};
        for (let i = 0; i < values.length; i++){
          if(values[i].CountryCode === 'ZA'){
              
              obj.Country = values[i].Country;
              obj.Confirmed = values[i].TotalConfirmed;
              obj.Deaths = values[i].TotalDeaths;
              obj.Recovered = values[i].TotalRecovered;
              obj.Active = values[i].TotalConfirmed - values[i].TotalDeaths - values[i].TotalRecovered;
              obj.Date = new Date(values[i].Date).toLocaleString();
            }
  
        }

        this.setState({data:obj});

        }).catch(console.log)

    
      // Firebase call for testcases
      const itemsRef = firebase.database().ref('TestData');
      itemsRef.on('value', (snapshot) => {
        let items = snapshot.val();
        console.log(items)
        let data = items[Object.keys(items)[Object.keys(items).length - 1]]
        console.log(data)
        this.setState({
            testData: data
          });
      });
}
  
 
  render() {
    return (
      <div>
        <CoronaBanner>
          <h4>For more and official COVID-19 information, visit <a href='https://sacoronavirus.co.za'>sacoronavirus.co.za</a>.</h4>
        </CoronaBanner>      
        {typeof this.state.data.Country !='undefined' ? 
          <Visualizer
            country = {this.state.data.Country}
            tests = {this.state.testData.TestsConducted}
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

