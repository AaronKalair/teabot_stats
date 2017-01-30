import React, { PropTypes } from 'react';
import IconCard from './IconCard';
import SIUnit from './SIUnit';

const TotalWeightOfTeapots = ({ makers }) => {
    const totalWeight = (
        <SIUnit number={makers.reduce((acc, maker) => acc + maker.totalWeightMade, 0)}
                unit={'g'}
                precision={3} />
    );
    return <IconCard icon="balance-scale" title={totalWeight} flex={3} />;
};

TotalWeightOfTeapots.propTypes = {
    makers: PropTypes.array.isRequired
};

export default TotalWeightOfTeapots;
