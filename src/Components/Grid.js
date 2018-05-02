/**
 * @Author: Ali
 * @Date:   2018-04-26T15:09:30+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-02T10:36:17+02:00
 */
import React,{ Component } from 'react'
import { Card } from 'material-ui'
import Avatar from 'material-ui/Avatar';

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
            <Avatar src={block.userImageURL} />
            <img
              src={block.largeImageURL}
              alt={block.user}
              height="270"
              width="480"
            />
            <div>
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
