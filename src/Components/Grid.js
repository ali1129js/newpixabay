/**
 * @Author: Ali
 * @Date:   2018-04-26T15:09:30+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-02T12:38:52+02:00
 */
import React,{ Component } from 'react'
import { Card } from 'material-ui'
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper'
const style = {
  background:'lightgray',
  height:305,
  width:400,
  margin:6
}
class Grid extends Component {

  render(){
    if(!this.props.data){
      return(
        <div>loading...</div>
      )
      }
      const list = this.props.data.map(block =>
        <Card key={block.id} style={style} zDepth={5} >
            <Avatar src={block.userImageURL} />
            <img
              src={block.largeImageURL}
              alt={block.user}
              height="210"
              width="380"
            />
            <div>
            </div>
            <div className="card-data">
              <ul>
                <li >{block.likes}favorite</li>
                <li >{block.views}visibility</li>
                <li >{block.downloads}</li>
                <li >{block.comments}</li>
              </ul>
            </div>
          </Card>
        )
    return(
        <Paper zDepth={2}> {list} </Paper>
    )
  }
}
export default Grid
