/**
 * @Author: Ali
 * @Date:   2018-05-09T21:21:58+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-09T22:45:19+02:00
 */

import React,{ Component } from 'react'
const style = {
  background:'silver',
  margin:5,
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
      <div className="d-sm-flex bd-highlight">
        <div className="p-2 flex-fill bd-highlight">
          {list}
        </div>
      </div>
    )
  }
}
export default Grid
