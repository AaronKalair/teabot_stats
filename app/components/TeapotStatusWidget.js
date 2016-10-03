import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const TeapotStatusWidget = ({ teapotStatus }) => (
    <div className='card-margin' >
    	<Card>
    		<CardHeader
      			title="Number of Cups in Teapot"
      			avatar="robot.jpg" />
      		<CardText>
      			{teapotStatus}
      		</CardText>
      </Card>
    </div>
)

TeapotStatusWidget.propTypes = {
    teapotStatus: PropTypes.string.isRequired
}

export default TeapotStatusWidget
