import React, { PropTypes } from 'react';
import { FormattedNumber } from 'react-intl';
import IconCard from './IconCard';

const TotalNumberOfTeapots = ({ numberOfTeapots }) => (
    <IconCard icon="teapot" title={<FormattedNumber value={numberOfTeapots} />} width="16%" />
);

TotalNumberOfTeapots.propTypes = {
    numberOfTeapots: PropTypes.number.isRequired
};

export default TotalNumberOfTeapots;
