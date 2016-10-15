import React, { PropTypes } from 'react';
import {Card,  CardHeader, CardText} from 'material-ui/Card';

interface TeapotStatusProps {
    teapotStatus: string;
};

const TeapotStatusWidget: React.StatelessComponent<TeapotStatusProps> = ({ teapotStatus }) => (
    <div className="card-margin" >
        <Card>
            <CardHeader
                title="Number of Cups in Teapot"
                avatar="robot.jpg" />
            <CardText>
                {teapotStatus}
            </CardText>
      </Card>
    </div>
);

TeapotStatusWidget.propTypes = {
    teapotStatus: PropTypes.string.isRequired
};

export default TeapotStatusWidget;
