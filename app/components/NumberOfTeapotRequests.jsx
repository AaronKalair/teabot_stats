import React, { PropTypes } from 'react';
import { FormattedNumber } from 'react-intl';
import IconCard from './IconCard';

const NumberOfTeapotRequests = ({ NumberOfTeapotRequests }) => (
    <IconCard icon="cup" title={<FormattedNumber value={NumberOfTeapotRequests} />} flex={2} />
);

NumberOfTeapotRequests.propTypes = {
    NumberOfTeapotRequests: PropTypes.number.isRequired
};

export default NumberOfTeapotRequests;
