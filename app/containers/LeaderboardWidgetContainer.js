import { connect } from 'react-redux';
import LeaderboardWidget from '../components/LeaderboardWidget';

const mapStateToProps = (state) => {
    return {
        potMakers: state.potMakers.makers
    };
};

const LeaderboardWidgetContainer = connect(
    mapStateToProps,
    null
)(LeaderboardWidget);

export default LeaderboardWidgetContainer;
