/**
 * @Author: Ali
 * @Date:   2018-04-26T15:09:30+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-04-27T14:22:29+02:00
 */
import React,{ Component } from 'react'
import { Fa, Card, CardBody, CardImage, CardTitle } from 'mdbreact'
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
            <CardImage className="img-fluid" src={block.webformatURL} alt={block.user} />
            <CardBody>
              <CardTitle>
                {block.user}
              </CardTitle>
            </CardBody>
            <div className="card-data">
              <ul>
                <li><Fa icon="fa-heart"></Fa>{block.likes}</li>
                <li><Fa icon="fa-eye"></Fa>{block.views}</li>
                <li><Fa icon="fa-download"></Fa>{block.downloads}</li>
                <li><Fa icon="fa-commenting"></Fa>{block.comments}</li>
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
