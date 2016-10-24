import React, { PropTypes } from 'react';
import math from 'mathjs';

const SIUnit = ({number, unit, precision=0}) => {
    const value = precision === 0 ? number : number.toPrecision(precision);
    return <span>{math.unit(value, unit).toString()}</span>
}

SIUnit.propTypes = {
    number: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    precision: PropTypes.number
}

export default SIUnit;
