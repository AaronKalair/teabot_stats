import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TotalNumberOfTeapotsContainer from '../containers/TotalNumberOfTeapotsContainer'
import TeapotStatusWidgetContainer from '../containers/TeapotStatusWidgetContainer'
import PotClaimWidgetContainer from '../containers/PotClaimWidgetContainer'
import TeapotAgeWidgetContainer from '../containers/TeapotAgeWidgetContainer'
import LeaderboardWidgetContainer from '../containers/LeaderboardWidgetContainer'



const WidgetHolder = () => (
	<div>
	    <div className='scrollable'>
	    	<AppBar
	    	title="TeaBot"
	    	iconElementLeft={<IconButton iconClassName="lalaal" />}
	    	iconElementRight={<IconButton iconClassName="muidocs-icon-custom-github" />} />
	    </div>
	    <div className='top-card-row flex-parent'>
	        <TotalNumberOfTeapotsContainer />
	        <TeapotStatusWidgetContainer />
	    </div>
	    <div className='flex-parent'>
	        <TeapotAgeWidgetContainer />
	    </div>
	        <LeaderboardWidgetContainer />
	        <div>
	        <PotClaimWidgetContainer />
	    	</div>
	    </div>
)

export default WidgetHolder
