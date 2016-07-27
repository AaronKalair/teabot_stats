import React, { PropTypes } from 'react';

const TeapotStatusWidget = ({ teapotStatus }) => (
    <div>
        <h2> {teapotStatus} </h2>
    </div>
)

TeapotStatusWidget.propTypes = {
    teapotStatus: PropTypes.string.isRequired
}

export default TeapotStatusWidget
