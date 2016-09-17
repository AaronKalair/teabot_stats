const PotMakers = (state = {'makers': [{'name':"Aaron"}]}, action) => {
    switch (action.type) {
        case 'SET_POT_MAKERS':
            return {'makers': action.potMakers}
        case 'SET_SUBMIT_MESSAGE':
            return Object.assign({}, state, {
                submitMessage: action.message
            });
        case 'HIDE_SUBMIT_MESSAGE':
            var newState = Object.assign({}, state);
            delete newState.submitMessage;
            return newState;
        default:
            return state;
    }
};

export default PotMakers;
