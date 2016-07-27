import React, { PropTypes } from 'react';
import TotalNumberOfTeapotsContainer from '../containers/TotalNumberOfTeapotsContainer'
import TeapotStatusWidgetContainer from '../containers/TeapotStatusWidgetContainer'

const WidgetHolder = () => (
    <div>
        <TotalNumberOfTeapotsContainer />
        <TeapotStatusWidgetContainer />
    </div>
)

export default WidgetHolder
