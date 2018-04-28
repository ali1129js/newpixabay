/**
 * @Author: Ali
 * @Date:   2018-04-26T15:09:30+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-04-28T15:06:06+02:00
 */
import React,{ Component } from 'react'
import { Card } from 'material-ui'
class Grid extends Component {

  render(){
    if(!this.props.data){
      return(
        <div>loading...</div>
      )
      }
      const list = this.props.data.map(block =>
        <ul key={block.id}>
          <Card >
            <img src={block.webformatURL} alt={block.user} />
            <div>
              <div>
                {block.user}
              </div>
            </div>
            <div className="card-data">
              <ul>
                <li>{block.likes}</li>
                <li>{block.views}</li>
                <li>{block.downloads}</li>
                <li>{block.comments}</li>
              </ul>
            </div>
          </Card>
        </ul>
      )
    return(
      <ul> {list} </ul>
    )
  }
}
export default Grid

/*
style={{display: "inline-flex", width:300, height:300,margin:5}}
*/
