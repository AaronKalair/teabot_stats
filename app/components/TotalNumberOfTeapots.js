import React, { PropTypes } from 'react';

const TotalNumberOfTeapots = ({ numberOfTeapots }) => (
    <div>
        <h1> Total Number of Teapots Made </h1>
        <h2> {numberOfTeapots} </h2>
    </div>
)

TotalNumberOfTeapots.propTypes = {
    numberOfTeapots: PropTypes.number.isRequired,
}

export default TotalNumberOfTeapots
