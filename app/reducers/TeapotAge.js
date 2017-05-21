const TeapotAge = (state = 100, action) => {
    switch (action.type) {
        case 'SET_TEAPOT_AGE':
            return action.teapotAge;
        case 'INC_TEAPOT_AGE':
            return state + action.minutes;
        default:
            return state;
    }
};

export default TeapotAge;
