import React, { PropTypes } from 'react';
import IconCard from './IconCard';

const NumberOfCupsRemainingWidget = ({ numberOfCupsRemaining }) => (
    <IconCard icon="cup" title={numberOfCupsRemaining} flex={5} />
);

NumberOfCupsRemainingWidget.propTypes = {
    numberOfCupsRemaining: PropTypes.string.isRequired
};

export default NumberOfCupsRemainingWidget;
