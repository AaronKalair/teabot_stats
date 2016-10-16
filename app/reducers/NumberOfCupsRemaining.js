const NumberOfCupsRemaining = (state = 'Hit me with your best pot', action) => {
    switch (action.type) {
        case 'SET_NUMBER_OF_CUPS_REMAINING':
            return action.numberOfCupsRemaining;
        default:
            return state;
    }
};

export default NumberOfCupsRemaining;
