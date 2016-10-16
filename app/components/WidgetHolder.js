import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import TotalNumberOfTeapotsContainer from '../containers/TotalNumberOfTeapotsContainer';
import NumberOfCupsRemainingWidgetContainer from '../containers/NumberOfCupsRemainingWidgetContainer';
import PotClaimWidgetContainer from '../containers/PotClaimWidgetContainer';
import TeapotAgeWidgetContainer from '../containers/TeapotAgeWidgetContainer';
import LeaderboardWidgetContainer from '../containers/LeaderboardWidgetContainer';
import BrewStatusWidgetContainer from '../containers/BrewStatusContainer';


const WidgetHolder = () => (
    <div>
        <div className="scrollable">
            <AppBar
            title="TeaBot"
            iconElementLeft={<IconButton iconClassName="lalaal" />}
            iconElementRight={<IconButton iconClassName="muidocs-icon-custom-github" />} />
        </div>
        <div className="top-card-row flex-parent">
            <TotalNumberOfTeapotsContainer />
            <NumberOfCupsRemainingWidgetContainer />
        </div>
        <div className="flex-parent">
            <TeapotAgeWidgetContainer />
            <BrewStatusWidgetContainer />
        </div>
        <LeaderboardWidgetContainer />
        <div>
            <PotClaimWidgetContainer />
        </div>
    </div>
);

export default WidgetHolder;
