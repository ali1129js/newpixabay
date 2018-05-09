/**
 * @Author: Ali
 * @Date:   2018-04-26T15:09:30+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-09T16:53:26+02:00
 */
import React,{ Component } from 'react'

class Grid extends Component {

  render(){
    if(!this.props.data){
    return (
      <div>loading...</div>
    )
    }
  const list = this.props.data.map(block =>
    <div className="card" style={{width: 220}}>
      <a href={block.largeImageURL}>
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
/*
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
  <br /><br />
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
      <li>
        <span role="img" aria-label="comments">
        💬{block.comments}
      </span></li>
    </ul>
  </div>
</Card>
*/
