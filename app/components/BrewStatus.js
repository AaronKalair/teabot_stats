import React, { PropTypes } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';

const BrewStatus = ({teapotAge}) => (
    <div className="large-card">
        <Card>
            <CardHeader
                title="Brew Status"
                avatar="robot.jpg" />
            <CardText>
                <LinearProgress max={180} min={0} mode={'determinate'} value={teapotAge*60} />
            </CardText>
        </Card>
    </div>
);

BrewStatus.propTypes = {
    teapotAge: PropTypes.number.isRequired
};

export default BrewStatus;
