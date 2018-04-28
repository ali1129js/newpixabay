/**
 * @Author: Ali
 * @Date:   2018-04-28T11:38:32+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-04-28T14:04:30+02:00
 */

import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

class UsersGrid extends Component {
  render(){
    const { data  } = this.props
    let cardList = []

        <Card
          key={card.id}
          expandable={true}
          onExpandChange={() => console.log('onExpandChange Called!')}
          zDepth={4}
        >
          <CardHeader
            actAsExpander={true}
            title={card.user}
            avatar={card.userImageURL}
          />
          <CardMedia>
            <img src={card.webformatURL} width='350px' height='350px' alt={card.views} />
          </CardMedia>
          <CardTitle
            title={card.type}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            {card.tags}
          </CardText>
        </Card>
      )
    })
    return(
      <div className="grdd">{ cardList }</div>
      )
  }
}
export default UsersGrid
