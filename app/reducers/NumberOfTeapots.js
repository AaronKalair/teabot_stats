const NumberOfTeapots = (state = 9500, action) => {
    switch (action.type) {
        case 'SET_NUMBER_OF_TEAPOTS':
            return action.numberOfTeapots;
        default:
            return state;
    }
};

export default NumberOfTeapots;
