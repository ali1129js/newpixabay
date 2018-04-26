/**
 * @Author: Ali
 * @Date:   2018-04-25T22:06:52+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-04-26T20:27:00+02:00
 */

import React, { Component, Fragment } from 'react'
import Input from './Components/Input'
import Grid from './Components/Grid'
const API_KEY = '8804245-155ed4ab1b84647eeb9fbf6ad'

const endpoint ="https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('dogs')

const fetchOption = {
  method:'GET'
}
class App extends Component {
  constructor (props){
    super(props);
    this.state = {

    }
  }
componentDidMount() {
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
        <Input />
        <Grid data={this.state.pixaBay.hits}/>
      </Fragment>
    )
  }
}

export default App
