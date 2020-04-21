/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { Component } from "react";
import GlobalTableStyles from "../StyleComponents/GlobalTableStyles";


export class CoronaTable extends Component {

	constructor(props){
		super(props);
		// this.getHeader = this.getHeader.bind(this);
		// this.getRowsData = this.getRowsData.bind(this);
		// this.getKeys = this.getKeys.bind(this);
		this.state = { 
			data: [{}]
		}
	}

 

  componentDidMount = () => {


    let postOptions = {};
    
    postOptions.method = 'GET';
    
    postOptions.headers = {};
  
	let values = [{}];
		
    fetch('https://api.covid19api.com/summary', postOptions)
        .then(res => res.json())
        .then((data) => {

		values = data.Countries
		values.forEach(function(item){ 
			delete item.Slug; 
			delete item.CountryCode; 
			delete item.NewConfirmed; 
			delete item.NewDeaths; 
			delete item.NewRecovered; 
			item.Date =new Date(item.Date).toLocaleString(); 
		});
		values.sort( (a,b) => b.TotalConfirmed - a.TotalConfirmed);
		this.setState({data: values})


    }).catch(console.log)
  
  }

	getKeys = () =>{
		return Object.keys(this.state.data[0]);
	}

	getHeader = () =>{
		let keys = this.getKeys();
		let Header = ['Highest','Country','Total Confirmed','Total Deaths', 'Total Recoveries','Last Updated']
		
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
				 <h1> The Rona Table</h1>
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
	
	if (index == 1 ){
		return <td key={props.data[key]} style ={confirmedRow}>{props.data[key]}</td>	
	
	} 
	
	else if (index == 2){
		return <td key={props.data[key]} style ={deathRow}>{props.data[key]}</td>	

	} 

	else if(index == 3){
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


export default CoronaTable;
