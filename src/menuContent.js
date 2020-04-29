import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route,Link, BrowserRouter } from "react-router-dom";
import './menuContent.css'

class MenuContent extends Component {
  constructor(props) {
    super(props)

    this.items = []
    this.items.push("Country Stats Map");
    this.items.push("Africa Stats Table");
    this.items.push("Global Stats Table");
  }

  render() {
    return (
    <BrowserRouter forceRefresh={true}>
        <div className="menu">
            <div className="menu-item">
                <Link to="/Corona-Map"> Country Stats Map</Link>
            </div>
            <div className="menu-item">
                <Link to="/Corona-Africa"> Africa Stats Table</Link>
            </div>
            <div className="menu-item">
                <Link to="/Corona-Table"> Global Stats Table</Link>
            </div>       
        </div>
    
    </BrowserRouter>
    )
  }
}

// MenuContent.PropTypes = {
//   closeCallback: React.PropTypes.func.isRequired
// }

export default MenuContent
