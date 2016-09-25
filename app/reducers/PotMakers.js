const PotMakers = (state = {'makers': [{'name':"Aaron", 'numberOfPotsMade': 7, 'totalWeightMade': 89, 'numberOfCupsMade': 23, 'largestSinglePot': 98}]}, action) => {
    switch (action.type) {
        case 'SET_POT_MAKERS':
            return Object.assign({}, state, {
                makers: action.potMakers.sort((a, b) => b.numberOfPotsMade - a.numberOfPotsMade)
            });
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
