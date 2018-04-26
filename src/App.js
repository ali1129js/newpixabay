/**
 * @Author: Ali
 * @Date:   2018-04-25T22:06:52+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-04-25T23:01:48+02:00
 */

import React, { Component } from 'react'

const API_KEY = '8804245-155ed4ab1b84647eeb9fbf6ad'
const endpoint ="https://pixabay.com/api/?key="+API_KEY
const fetchOption = {
  method:'GET'
}
class App extends Component {
  constructor (props){
    super(props);
    this.state = {

    }
  }
componentWillMount() {
    fetch(endpoint, fetchOption)
    .then(d => d.json())
    .then(d => {
      this.setState({pixabayData: d
      })
    })
    .catch(err => {
      console.error(err);
    })
}
  render(){
    if(this.state.pixabayData){
      const data = this.state
    }
    return (
      {data.map(block =>
        <li> {block.user} </li>
      )}
    )
  }
}

export default App
