import { connect } from 'react-redux';
import PotClaimWidget from '../components/PotClaimWidget';

const mapStateToProps = (state) => {
    return {
        potMakers: state.potMakers.makers,
        submitMessage: state.potMakers.submitMessage
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        hideSubmitMessage: () => {dispatch({type: 'HIDE_SUBMIT_MESSAGE'});},
        setSubmitMessage: (message) => {dispatch({type: 'SET_SUBMIT_MESSAGE', message: message});},
        setPotMakers: (makers) => {dispatch({type: 'SET_POT_MAKERS', potMakers: makers});}
    };
};

const PotClaimWidgetContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PotClaimWidget);

export default PotClaimWidgetContainer;
