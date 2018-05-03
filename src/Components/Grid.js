/**
 * @Author: Ali
 * @Date:   2018-04-26T15:09:30+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-03T13:56:15+02:00
 */
import React,{ Component } from 'react'
import { Card } from 'material-ui'
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper'
const style = {
  background:'silver',
  height:305,
  width:400,
  margin:0,

}
class Grid extends Component {

  render(){
    if(!this.props.data){
      return(
        <div>loading...</div>
      )
      }
      const list = this.props.data.map(block =>

              <Card key={block.id} style={style} expandable={true}>
                <Avatar src={block.userImageURL} />
                <a href={block.largeImageURL}>
                  <img
                    src={block.largeImageURL}
                    alt={block.user}
                    height="210"
                    width="380"
                  />
                </a>
                <div>
                </div>
                <div className="card-data">
                  <ul>
                    <li ><span> 😍 </span>  {block.likes}</li>
                    <li > <span> 🚥 </span> {block.views}</li>
                    <li ><span> 📥 </span>  {block.downloads}</li>
                    <li ><span> 💬 </span>  {block.comments}</li>
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
