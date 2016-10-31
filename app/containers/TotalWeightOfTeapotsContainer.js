import { connect } from 'react-redux';
import TotalWeightOfTeapots from '../components/TotalWeightOfTeapots';

const mapStateToProps = (state) => {
    return {
        makers: state.potMakers.makers
    };
};

const TotalWeightOfTeapotsContainer = connect(
    mapStateToProps,
    null
)(TotalWeightOfTeapots);

export default TotalWeightOfTeapotsContainer;
