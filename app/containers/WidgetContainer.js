import { connect } from 'react-redux';
import Widget from '../components/Widget';

const mapStateToProps = (state) => {
    return {
        numberOfTeapots: state.numberOfTeapots
    }
}

const WidgetContainer = connect(
    mapStateToProps,
    null
)(Widget)

export default WidgetContainer
