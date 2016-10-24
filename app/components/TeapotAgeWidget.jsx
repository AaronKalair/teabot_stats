import React, { PropTypes } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';


const TeapotAge = ({teapotAge}) => (
    <div className="large-card">
        <Card>
            <CardHeader
                title="Age of Teapot"
                avatar="robot.jpg" />
            <CardText>
                {Math.round(teapotAge)} minutes old
            </CardText>
        </Card>
    </div>
);

TeapotAge.propTypes = {
    teapotAge: PropTypes.number.isRequired
};

export default TeapotAge;
