/**
 * @Author: Ali
 * @Date:   2018-04-26T15:09:30+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-04-26T19:23:32+02:00
 */
import React,{ Component } from 'react'
class Grid extends Component {

  render(){
    if(!this.props.data){
      return(
        <div>loading...</div>
      )
      }
      const stuff = this.props.data.map(block =>
        <li key={block.id}> {block.user} </li>
      )

    return(
      <ul> {stuff} </ul>
    )
  }
}
export default Grid
