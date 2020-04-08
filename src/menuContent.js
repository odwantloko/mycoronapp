import React, { Component } from 'react'
import { BrowserRouter as Router, Switch,
    Route,
    Link
  } from "react-router-dom";

import './menuContent.css'

class MenuContent extends Component {
  constructor(props) {
    super(props)

    this.items = []
    this.items.push("Global Stats Map");
    this.items.push("Global Stats Table")
  }

  render() {
    return (
      <div className="menu">
        {this.items.map(i => <div className="menu-item" key={i}>
          <a
            href="https://github.com/Middlerun/cheeseburger-menu"
            onClick={this.props.closeCallback}
            target="_blank">
            {i}
          </a>
        </div>)}

      </div>
    )
  }
}

// MenuContent.PropTypes = {
//   closeCallback: React.PropTypes.func.isRequired
// }

export default MenuContent
