/**
 * @Author: Ali
 * @Date:   2018-04-25T22:06:52+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-04-28T15:41:23+02:00
 */

import React, { Component, Fragment } from 'react'
import Input from './Components/Input'
import Grid from './Components/Grid'
import './App.css'

const pixabayapi = "https://pixabay.com/api/?key="
const API_KEY = '8804245-155ed4ab1b84647eeb9fbf6ad'
const searchTerm = encodeURIComponent('rose')
const endpoint = pixabayapi+API_KEY+"&q="+searchTerm
const fetchOption = {
  method:'GET'
}
class App extends Component {
  constructor (){
    super()
    this.state = {
    }
  }
componentDidMount() {
 this.loaddata()
}
loaddata(){
  fetch(endpoint, fetchOption)
  .then(d => d.json())
  .then(d => {
    this.setState({pixaBay:d})
  })
  .catch(err => {
    console.error(err);
  })
}

  render() {
    if(!this.state.pixaBay){
      return <div className="loading">loading</div>
    }
    console.log(this.state.pixaBay.hits)
    return(
      <Fragment>
        <div className="container">
          <Input handleInput={this.handleInput}/>
          <Grid data={this.state.pixaBay.hits}/>
        </div>
      </Fragment>
    )
  }
}

export default App
