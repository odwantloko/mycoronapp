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
		values.forEach(function(item){ delete item.Slug; delete item.CountryCode; delete item.NewConfirmed; delete item.NewDeaths; delete item.NewRecovered });
		this.setState({data: values})
		console.log(values)   


    }).catch(console.log)
	
	
   
  
  }

	getKeys = () =>{
			return Object.keys(this.state.data[0]);
	}

	getHeader = () =>{
		let keys = this.getKeys();
		return keys.map((key, index)=>{
			return <th key={key}>{key.toUpperCase()}</th>
		})
	}

	getRowsData = () =>{
		let items = this.state.data;
		let keys = this.getKeys();
		return items.map((row, index)=>{
			return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
		})
	}
    
	render() {
		return (
			<GlobalTableStyles>
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
    return <td key={props.data[key]}>{props.data[key]}</td>
  })
}

export default CoronaTable;
