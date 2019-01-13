/**
 * @Author: Ali
 * @Date:   2018-05-09T21:21:58+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-13T16:23:58+01:00
 */

import React, { Component } from "react";

class Grid extends Component {
  render() {
    if (!this.props.data) {
      return <div>loading...</div>;
    }
    const list = this.props.data.map(block => (
      <div key={block.id} className="card">
        <a href={block.largeImageURL} target="_blank">
          <img
            className="card-img-top"
            src={block.largeImageURL}
            alt="Card"
            style={{ width: "400px", maxHeight: "400px" }}
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
