
import React, { Component } from 'react'
import { render } from 'react-dom'
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import MenuContent from './menuContent' 
import './index.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoronaTable from './Components/TableComponent';
import Home from './Components/HomeComponent'
import AfricaTable from './Components/AfricaComponent'


const darkMode = {
  backgroundColor: ' #18191a',
  color: '#fff'
};

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
    return <div style={darkMode}>
      <Router>
        <CheeseburgerMenu
          isOpen={this.state.menuOpen}
          closeCallback={this.closeMenu.bind(this)}
          style={{backgroundColor:'#000'}}>
          <MenuContent closeCallback={this.closeMenu.bind(this)}/>
        </CheeseburgerMenu>
        
        <HamburgerMenu
          isOpen={this.state.menuOpen}
          menuClicked={this.openMenu.bind(this)}
          width={35}
          height={25}
          strokeWidth={3}
          rotate={0}
          color='white'
          borderRadius={0}
          animationDuration={0.5}
        />

      <Switch>
          <Route path="/Corona-Map">
            <Home />
          </Route>
          <Route path="/Corona-Table">
            <CoronaTable/>
          </Route>
          <Route path="/Corona-Africa">
            <AfricaTable/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  }
}

render(<App />, document.getElementById('root'))

