import React, { PropTypes } from 'react';
import { FormattedNumber } from 'react-intl';
import IconCard from './IconCard';

const NumberOfTeapotRequests = ({ NumberOfTeapotRequests }) => (
    <IconCard icon="cup" title={<FormattedNumber value={NumberOfTeapotRequests} />} width="16%" />
);

NumberOfTeapotRequests.propTypes = {
    NumberOfTeapotRequests: PropTypes.number.isRequired
};

export default NumberOfTeapotRequests;
