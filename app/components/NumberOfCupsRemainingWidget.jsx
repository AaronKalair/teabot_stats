import React, { PropTypes } from 'react';
import {Card,  CardHeader, CardText} from 'material-ui/Card';

const NumberOfCupsRemainingWidget = ({ numberOfCupsRemaining }) => (
    <div className="card-margin" >
        <Card>
            <CardHeader
                title="Number of Cups in Teapot"
                avatar="robot.jpg" />
            <CardText>
                {numberOfCupsRemaining}
            </CardText>
      </Card>
    </div>
);

NumberOfCupsRemainingWidget.propTypes = {
    numberOfCupsRemaining: PropTypes.string.isRequired
};

export default NumberOfCupsRemainingWidget;
