import { connect } from 'react-redux';
import NumberOfCupsRemainingWidget from '../components/NumberOfCupsRemainingWidget';

const mapStateToProps = (state) => {
    return {
        numberOfCupsRemaining: state.numberOfCupsRemaining
    };
};

const NumberOfCupsRemainingWidgetContainer = connect(
    mapStateToProps,
    null
)(NumberOfCupsRemainingWidget);

export default NumberOfCupsRemainingWidgetContainer;
