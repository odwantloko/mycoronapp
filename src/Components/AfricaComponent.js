import React, { Component } from "react";
import GlobalTableStyles from "../StyleComponents/GlobalTableStyles";
import { Africa } from "../Constants/AfricanCountries"

export class AfricaTable extends Component {

	constructor(props){
		super(props);
		this.state = { 
			data: [{}],
            CountryCodes: null,
            countries: Africa
        }
	}

 

	componentDidMount = () => {

		let postOptions = {};
		
		postOptions.method = 'GET';
		
		postOptions.headers = {};
	
		let values = [{}];
		let countries = this.state.countries;
			
		fetch('https://api.covid19api.com/summary', postOptions)
			.then(res => res.json())
			.then((data) => {


			values = data.Countries;
			let african_stats= [];
			

			// Extract African stats from global stats
			for (let i = 0; i < values.length; i++){
				let DeathRatio = (values[i].TotalDeaths/values[i].TotalConfirmed * 100).toFixed(2);
				let RecoveryRatio = (values[i].TotalRecovered/values[i].TotalConfirmed * 100).toFixed(2);
				let obj = {};
				for (let j = 0; j < countries.length; j++){

					if(values[i].CountryCode === countries[j].Country_Code){
						if(RecoveryRatio !=="NaN"){
							obj.Country = values[i].Country;
							obj.TotalConfirmed = values[i].TotalConfirmed;
							obj.TotalDeaths = values[i].TotalDeaths;
							obj.DeathRatio = DeathRatio + "%";
							obj.TotalRecovered = values[i].TotalRecovered;
							obj.RecoveryRatio = RecoveryRatio +"%";
							obj.Date = new Date(values[i].Date).toLocaleString();
						
							
						}else{
							obj.Country = values[i].Country;
							obj.TotalConfirmed = values[i].TotalConfirmed;
							obj.TotalDeaths = values[i].TotalDeaths;
							obj.DeathRatio = "0.00%";
							obj.TotalRecovered = values[i].TotalRecovered;
							obj.RecoveryRatio ="0.00%";
							obj.Date = new Date(values[i].Date).toLocaleString();
						}

					
						african_stats.push(obj);
					
					}
				
				}

			}

			// sort according to number of cases
			african_stats.sort( (a,b) => b.TotalConfirmed - a.TotalConfirmed);
			this.setState({data: african_stats})
			
		}).catch(console.log)
	
	}

	getKeys = () =>{
		return Object.keys(this.state.data[0]);
	}

	getHeader = () =>{
		let Header = ['Highest','Country','Total Confirmed','Total Deaths','' ,'Total Recoveries','','Last Updated']
		
		return Header.map((key, index)=>{
			return <th key={key}>{key.toUpperCase()}</th>
		})
	}

	getRowsData = () =>{
		let items = this.state.data;
		let keys = this.getKeys();
		return items.map((row, index)=>{
		return <tr key={index}><td style ={defaultRow}>{index + 1}</td><RenderRow key={index} data={row} keys={keys}/></tr>
		})
	}
    
	render() {
		return (
			<GlobalTableStyles>
				 <h1> African Stats</h1>
				<table>
					<thead>
						<tr>{this.getHeader()}</tr>
					</thead>
					<tbody>
						{this.getRowsData()}
					</tbody>
                </table>
			</GlobalTableStyles>

		);
	}
}


const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
	
	if (index === 1 ){
		return <td key={props.data[key]} style ={confirmedRow}>{props.data[key]}</td>	
	
	} 
	
	else if (index === 2 || index === 3){
		return <td key={props.data[key]} style ={deathRow}>{props.data[key]}</td>	

	} 

	else if(index === 4 || index === 5){
		return <td key={props.data[key]} style ={recoveredRow}>{props.data[key]}</td>	

	}
	
	else{
		return <td key={props.data[key]} style ={defaultRow}>{props.data[key]}</td>
	}
   
  })
}

const defaultRow = {
	color: '#fff',
	background: '#a9a9a9'
};

const deathRow = {
	color: '#fff',
	background: '#ff5454'
};

const confirmedRow = {
	color: '#fff',
	background: '#ffd154'
};

const recoveredRow = {
	color: '#fff',
	background: '#76ff54'
};


export default AfricaTable;
