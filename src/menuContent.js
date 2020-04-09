import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import {App } from './index'
import './menuContent.css'
import SimpleMap from './Components/MapComponent';
import CoronaTable from './Components/TableComponent';

class MenuContent extends Component {
  constructor(props) {
    super(props)

    this.items = []
    this.items.push("Global Stats Map");
    this.items.push("Global Stats Table")
  }

  render() {
    return (
    <Router>
      <div className="menu">
          <div className="menu-item">
            <Link to="/Corona-Map"> Global Stats Map</Link>
           
          </div>
          <div className="menu-item">
            <Link to="/Corona-Table"> Global Stats Table</Link>
          </div>
       
        </div>
    
    </Router>
    )
  }
}

// MenuContent.PropTypes = {
//   closeCallback: React.PropTypes.func.isRequired
// }

export default MenuContent
