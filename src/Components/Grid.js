/**
 * @Author: Ali
 * @Date:   2018-04-26T15:09:30+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-04-29T13:11:29+02:00
 */
import React,{ Component } from 'react'
import { Card, CardHeader } from 'material-ui'

class Grid extends Component {
  render(){
    if(!this.props.data){
      return(
        <div>loading...</div>
      )
      }
      const list = this.props.data.map(block =>
        <ul key={block.id}>
          <Card>
            <CardHeader
              title={block.user}
            />
            <img src={block.webformatURL} alt={block.user} />
            <div>
              <div>
                <span> {block.tags} </span>
              </div>
            </div>
            <div className="card-data">
              <ul>
                <li>{block.likes} Likes</li>
                <li>{block.views} views</li>
                <li>{block.downloads} downloads</li>
                <li>{block.comments} comments</li>
              </ul>
            </div>
          </Card><br />
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
