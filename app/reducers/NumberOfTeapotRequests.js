const NumberOfTeapotRequests = (state = 9500, action) => {
    switch (action.type) {
        case 'SET_NUMBER_OF_TEAPOT_REQUESTS':
            return action.numberOfTeapotRequests;
        default:
            return state;
    }
};

export default NumberOfTeapotRequests;
