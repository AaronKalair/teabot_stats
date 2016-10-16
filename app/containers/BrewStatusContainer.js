import { connect } from 'react-redux';
import BrewStatusWidget from '../components/BrewStatus';

const mapStateToProps = (state) => {
    return {
        teapotAge: state.teapotAge
    };
};

const BrewStatusWidgetContainer = connect(
    mapStateToProps,
    null
)(BrewStatusWidget);

export default BrewStatusWidgetContainer;
