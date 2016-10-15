import { connect } from 'react-redux';
import TeapotStatusWidget from '../components/TeapotStatusWidget';

const mapStateToProps = (state) => {
    return {
        teapotStatus: state.teapotStatus
    };
};

const TeapotStatusWidgetContainer = connect(
    mapStateToProps,
    null
)(TeapotStatusWidget);

export default TeapotStatusWidgetContainer;
