import React, { PropTypes } from 'react';
import TotalNumberOfTeapotsContainer from '../containers/TotalNumberOfTeapotsContainer'
import TeapotStatusWidgetContainer from '../containers/TeapotStatusWidgetContainer'
import PotClaimWidgetContainer from '../containers/PotClaimWidgetContainer'

const WidgetHolder = () => (
    <div>
        <TotalNumberOfTeapotsContainer />
        <TeapotStatusWidgetContainer />
        <PotClaimWidgetContainer />
    </div>
)

export default WidgetHolder
