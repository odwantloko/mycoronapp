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
    postOptions.headers['Content-type'] = 'application/json';
    postOptions.headers['x-rapidapi-host'] = 'covid-19-coronavirus-statistics.p.rapidapi.com'
    postOptions.headers['x-rapidapi-key']= '214b6319a2msha579c94776b2a4ap1ae033jsne704830506f0'
   
		
    fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats', postOptions)
        .then(res => res.json())
        .then((data) => {

		this.setState({data:data.data.covid19Stats})
		console.log(data.data.covid19Stats)   


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
				
				<table>
					<thead>
						<tr>{this.getHeader()}</tr>
					</thead>
					<tbody>
						{this.getRowsData()}
					</tbody>
                </table>
                // <text>
                //     holder
                // </text>
		
			
		);
}
}


const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
    return <td key={props.data[key]}>{props.data[key]}</td>
  })
}

export default CoronaTable;
