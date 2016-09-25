import React, { PropTypes } from 'react';
import TotalNumberOfTeapotsContainer from '../containers/TotalNumberOfTeapotsContainer'
import TeapotStatusWidgetContainer from '../containers/TeapotStatusWidgetContainer'
import PotClaimWidgetContainer from '../containers/PotClaimWidgetContainer'
import TeapotAgeWidgetContainer from '../containers/TeapotAgeWidgetContainer'
import LeaderboardWidgetContainer from '../containers/LeaderboardWidgetContainer'

const WidgetHolder = () => (
    <div>
        <TotalNumberOfTeapotsContainer />
        <TeapotStatusWidgetContainer />
        <TeapotAgeWidgetContainer />
        <PotClaimWidgetContainer />
        <LeaderboardWidgetContainer />
    </div>
)

export default WidgetHolder
