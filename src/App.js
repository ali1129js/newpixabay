/**
 * @Author: Ali
 * @Date:   2018-04-25T22:06:52+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-04-27T19:37:56+02:00
 */
import React, { Component, Fragment } from 'react'
import Input from './Components/Input'
import Grid from './Components/Grid'


const pixabayapi = "https://pixabay.com/api/?key=8804245-155ed4ab1b84647eeb9fbf6ad"
const searchTerm = encodeURIComponent('young')
const endpoint =pixabayapi+"&q="+searchTerm
const fetchOption = {
  method:'GET'
}
class App extends Component {
  constructor (){
    super()
    this.state = {
      
    }
    this.handleInput = this.handleInput.bind(this)
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
  handleInput(endpoint){
    this.setState({
      endpoint:endpoint
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
