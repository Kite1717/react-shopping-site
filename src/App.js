import React, { Component } from 'react'


import {Navbar,ProductsRenderer} from './components'

 class App extends Component {
  render() {
    return (
      <div className = "container" >
        <Navbar/>
        <ProductsRenderer/>
      </div>
    )
  }
}

export default App;
