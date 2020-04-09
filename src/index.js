
import React, { Component } from 'react'
import { render } from 'react-dom'
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import MenuContent from './menuContent' 
import SimpleMap from './Components/MapComponent';
import './index.css'
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import CoronaTable from './Components/TableComponent';


const contentStyles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
    }
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render() {
    return <div>
      <Router>
        <CheeseburgerMenu
          isOpen={this.state.menuOpen}
          closeCallback={this.closeMenu.bind(this)}>
          <MenuContent closeCallback={this.closeMenu.bind(this)}/>
        </CheeseburgerMenu>
        
        <HamburgerMenu
          isOpen={this.state.menuOpen}
          menuClicked={this.openMenu.bind(this)}
          width={35}
          height={25}
          strokeWidth={3}
          rotate={0}
          color='black'
          borderRadius={0}
          animationDuration={0.5}
        />
     
      

      <Switch>
          <Route path="/Corona-Map">
          <div className="App">
            <h1> The Rona Visualizer</h1>
          </div>
            <SimpleMap />
          </Route>
          <Route path="/Corona-Table">
            <div className="App">
              <h1> The Rona Table</h1>
            </div>
            <CoronaTable/>
          </Route>
          <Route path="/">
            <SimpleMap />
          </Route>
        </Switch>
      </Router>
     
      
    </div>
  }
}

render(<App />, document.getElementById('root'))
