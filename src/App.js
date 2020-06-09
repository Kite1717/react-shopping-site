import React, { Component } from 'react'


import {Navbar,Product} from './components'

 class App extends Component {
  render() {
    return (
      <div className = "container">
        <Navbar/>
        <Product/>
      </div>
    )
  }
}

export default App;
