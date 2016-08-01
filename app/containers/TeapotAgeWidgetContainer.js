import { connect } from 'react-redux';
import TeapotAgeWidget from '../components/TeapotAgeWidget';

const mapStateToProps = (state) => {
    return {
        teapotAge: state.teapotAge
    }
}

const TeapotAgeWidgetContainer = connect(
    mapStateToProps,
    null
)(TeapotAgeWidget)

export default TeapotAgeWidgetContainer
