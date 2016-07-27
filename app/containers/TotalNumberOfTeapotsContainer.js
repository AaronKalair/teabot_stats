import { connect } from 'react-redux';
import TotalNumberOfTeapots from '../components/TotalNumberOfTeapots';

const mapStateToProps = (state) => {
    return {
        numberOfTeapots: state.numberOfTeapots,
    }
}

const TotalNumberOfTeapotsContainer = connect(
    mapStateToProps,
    null
)(TotalNumberOfTeapots)

export default TotalNumberOfTeapotsContainer
