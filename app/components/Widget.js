import React, { PropTypes } from 'react';

const Widget = ({ numberOfTeapots }) => (
    <div>
        <h1> Total Number of Teapots Made </h1>
        <h2> {numberOfTeapots} </h2>
    </div>
)

Widget.propTypes = {
    numberOfTeapots: PropTypes.number.isRequired
}

export default Widget
