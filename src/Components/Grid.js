/**
 * @Author: Ali
 * @Date:   2018-04-26T15:09:30+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-03T20:50:01+02:00
 */
import React,{ Component } from 'react'
import { Card } from 'material-ui'
import Avatar from 'material-ui/Avatar';
const style = {
  background:'silver',
  height:300,
  width:370,
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
    <Card key={block.id} style={style}>
      <Avatar src={block.userImageURL} />
      <a href={block.largeImageURL}>
        <img
          src={block.largeImageURL}
          alt={block.user}
          height="210"
          width="350"
        />
      </a>
      <div>
      </div>
      <div className="card-data">
        <ul>
          <li>
            <span role="img" aria-label="like">
              😍  {block.likes}
            </span>
          </li>
          <li>
            <span role="img" aria-label="views">
              🚥 {block.views}
            </span></li>
          <li>
            <span role="img" aria-label="dls">
              📥 {block.downloads}
            </span></li>
          <li><span role="img" aria-label="comments">
            💬{block.comments}
          </span></li>
        </ul>
      </div>
    </Card>
  )
    return(
      <div className="container-fluid">
        <div className="row">
          {list}
        </div>
      </div>
    )
  }
}
export default Grid
