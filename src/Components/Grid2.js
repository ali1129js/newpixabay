/**
 * @Author: Ali
 * @Date:   2018-04-28T11:29:17+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-04-28T11:31:33+02:00
 */
 import React from 'react'
 import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

 const Grid2 = () => (
   <Card>
     <CardHeader
       title="URL Avatar"
       subtitle="Subtitle"
       avatar="images/jsa-128.jpg"
     />
     <CardMedia
       overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
     >
       <img src="images/nature-600-337.jpg" alt="" />
     </CardMedia>
     <CardTitle title="Card title" subtitle="Card subtitle" />
     <CardText>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
       Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
       Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
     </CardText>
   </Card>
 )

 export default Grid2
