/**
 * @Author: Ali
 * @Date:   2018-05-09T21:21:58+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-09T21:23:12+02:00
 */

import React,{ Component } from 'react'
const style = {
  background:'silver',
  height:310,
  width:310,
  margin:8,
}
class Grid extends Component {

  render(){
    if(!this.props.data){
    return (
      <div>loading...</div>
    )
    }
  const list = this.props.data.map(block =>
    <div key= {block.id} className="card" style={style}>
      <a href={block.largeImageURL} target="_blank">
      <img className="card-img-top" src={block.largeImageURL} alt="Card"/>
      </a>
      </div>
  )
    return(
      <div className="container">
        <div className="row">
          {list}
        </div>
      </div>
    )
  }
}
export default Grid
