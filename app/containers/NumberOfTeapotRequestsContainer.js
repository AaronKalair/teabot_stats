import { connect } from 'react-redux';
import NumberOfTeapotRequests from '../components/NumberOfTeapotRequests';

const mapStateToProps = (state) => {
    return {
        NumberOfTeapotRequests: state.NumberOfTeapotRequests
    };
};

const NumberOfTeapotRequestsContainer = connect(
    mapStateToProps,
    null
)(NumberOfTeapotRequests);

export default NumberOfTeapotRequestsContainer;
