/**
 * @Author: Ali
 * @Date:   2018-05-09T16:50:40+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-09T21:07:14+02:00
 */

import React, { Component } from 'react'
class AppBar extends Component {
  constructor(){
    super()
    this.state = {}
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(e){
    const pixaBayApi = "https://pixabay.com/api/?key="
    const API_KEY = '8804245-155ed4ab1b84647eeb9fbf6ad'
    const searchTerm = encodeURIComponent(this.refs.input.value)
    const endpoint =pixaBayApi+API_KEY+"&q="+searchTerm
    console.log(endpoint)
    const fetchOption = {
      method:'GET'
    }
    e.preventDefault()
    e.target.reset()
    fetch(endpoint, fetchOption)
    .then(d => d.json())
    .then(d => {
      // setState takes a second parameter , a callback function!
      this.setState({pixaBay:d},() => {
        this.props.handleSubmit(this.state.pixaBay)
      })
    })
    .catch(err => {
      console.error(err);
    })
  }
  render(){
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://pixabay.com" target="_blank">
          <img src="https://pixabay.com/static/img/logo_square.png" width="30" height="30" className="d-inline-block align-top" alt="logo" />
          <span> Search PixaBay </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form onSubmit={this.onSubmit} className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="search Term e.g: cars, dogs "
              aria-label="Search"
              ref="input"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}
export default AppBar
