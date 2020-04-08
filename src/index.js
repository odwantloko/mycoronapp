
import React, { Component } from 'react'
import { render } from 'react-dom'
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import MenuContent from './menuContent' 
import SimpleMap from './Components/MapComponent';
import './index.css'



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
      <div className="App">
        <h1> The Rona Visualizer</h1>
      </div>
      <div>
         <SimpleMap/>
      </div>
      
    </div>
  }
}

render(<App />, document.getElementById('root'))