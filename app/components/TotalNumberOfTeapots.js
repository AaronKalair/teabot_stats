import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const TotalNumberOfTeapots = ({ numberOfTeapots }) => (
    <div className='card-margin'>
    	<Card>
    		<CardHeader
      			title="Number of Teapots"
      			avatar="robot.jpg" />
      		<CardText>
      			{numberOfTeapots}
      		</CardText>
        </Card>
    </div>
)

TotalNumberOfTeapots.propTypes = {
    numberOfTeapots: PropTypes.number.isRequired,
}

export default TotalNumberOfTeapots
