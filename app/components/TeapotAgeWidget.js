import React, { PropTypes } from 'react';

const TeapotAge = ({ teapotAge }) => (
    <div>
        <h2> {parseInt(teapotAge)} minutes old </h2>
    </div>
)

TeapotAge.propTypes = {
    teapotAge: PropTypes.number.isRequired
}

export default TeapotAge
