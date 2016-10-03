import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const TeapotAge = ({ teapotAge }) => (
    <div className='large-card'>
    	<Card>
    		<CardHeader
      			title="Age of Teapot"
      			avatar="kettle.gif" />
      		<CardText>
      			{parseInt(teapotAge)} minutes old
      		</CardText>
        </Card>
    <div>
)

TeapotAge.propTypes = {
    teapotAge: PropTypes.number.isRequired
}

export default TeapotAge
