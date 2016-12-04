import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import TotalWeightOfTeapotsContainer from '../containers/TotalWeightOfTeapotsContainer';
import TotalNumberOfTeapotsContainer from '../containers/TotalNumberOfTeapotsContainer';
import NumberOfCupsRemainingWidgetContainer from '../containers/NumberOfCupsRemainingWidgetContainer';
import PotClaimWidgetContainer from '../containers/PotClaimWidgetContainer';
import LeaderboardWidgetContainer from '../containers/LeaderboardWidgetContainer';
import BrewStatusWidgetContainer from '../containers/BrewStatusContainer';
import NumberOfTeapotRequests from '../containers/NumberOfTeapotRequestsContainer';


const WidgetHolder = () => (
    <div>
        <div className="scrollable">
            <AppBar
            title="TeaBot"
            iconElementLeft={<IconButton iconClassName="icon-teapot" iconStyle={{fontSize: '28px', top: '-3px', left: '-1px'}} />} />
        </div>
        <div className="top-row">
            <BrewStatusWidgetContainer />
            <NumberOfCupsRemainingWidgetContainer />
            <TotalNumberOfTeapotsContainer />
            <TotalWeightOfTeapotsContainer />
            <NumberOfTeapotRequests />
        </div>
        <LeaderboardWidgetContainer />
        <div>
            <PotClaimWidgetContainer />
        </div>
    </div>
);

export default WidgetHolder;
