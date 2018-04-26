/**
 * @Author: Ali
 * @Date:   2018-04-26T15:09:30+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-04-26T20:15:11+02:00
 */
import React,{ Component } from 'react'
class Grid extends Component {

  render(){
    if(!this.props.data){
      return(
        <div>loading...</div>
      )
      }
      const list = this.props.data.map(block =>
        <ul key={block.id} style={{'width':'100px'}}>
          <img src={block.webformatURL} alt={block.user}/>
        </ul>
      )
    return(
      <ul> {list} </ul>
    )
  }
}
export default Grid
