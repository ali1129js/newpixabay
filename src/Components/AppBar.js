/**
 * @Author: Ali
 * @Date:   2018-05-09T16:50:40+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-13T16:30:21+01:00
 */

import React, { Component } from "react";
class AppBar extends Component {
  constructor() {
    super();
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    const pixaBayApi = "https://pixabay.com/api/?key=";
    const API_KEY = "8804245-155ed4ab1b84647eeb9fbf6ad";
    const searchTerm = encodeURIComponent(this.refs.input.value);
    const endpoint = pixaBayApi + API_KEY + "&q=" + searchTerm;
    console.log(endpoint);
    const fetchOption = {
      method: "GET"
    };
    e.preventDefault();
    e.target.reset();
    fetch(endpoint, fetchOption)
      .then(d => d.json())
      .then(d => {
        // setState takes a second parameter , a callback function!
        this.setState({ pixaBay: d }, () => {
          this.props.handleSubmit(this.state.pixaBay);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
        <a
          className="navbar-brand"
          href="https://pixabay.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://pixabay.com/static/img/logo_square.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
          <span> Search PixaBay </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" />
        <form onSubmit={this.onSubmit} className="form-inline my-2 my-sm-0">
          <input
            className="form-control mr-sm-4"
            type="text"
            placeholder="Search Term e.g: cars, dogs"
            aria-label="Search"
            ref="input"
            size="40"
          />
          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    );
  }
}
export default AppBar;
