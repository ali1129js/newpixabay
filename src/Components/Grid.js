/**
 * @Author: Ali
 * @Date:   2018-05-09T21:21:58+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-02-17T18:19:22+01:00
 */

import React, { Component } from "react";

class Grid extends Component {
  render() {
    if (!this.props.data) {
      return <div>loading...</div>;
    }
    const list = this.props.data.map(block => (
      <div key={block.id} className="card">
        <a href={block.largeImageURL} target="_blank" rel="noopener noreferrer">
          <img
            className="card-img-top"
            src={block.largeImageURL}
            alt="Card"
            style={{ width: "370px", maxHeight: "400px" }}
          />
        </a>
      </div>
    ));
    return (
      <div className="grid">
        {" "}
        <div className="row">{list}</div>{" "}
      </div>
    );
  }
}
export default Grid;
