import React, { PropTypes } from 'react';
import TotalNumberOfTeapotsContainer from '../containers/TotalNumberOfTeapotsContainer'
import TeapotStatusWidgetContainer from '../containers/TeapotStatusWidgetContainer'
import TeapotAgeWidgetContainer from '../containers/TeapotAgeWidgetContainer'

const WidgetHolder = () => (
    <div>
        <TotalNumberOfTeapotsContainer />
        <TeapotStatusWidgetContainer />
        <TeapotAgeWidgetContainer />
    </div>
)

export default WidgetHolder
