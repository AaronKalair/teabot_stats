const TeapotAge = (state = 0, action) => {
    switch (action.type) {
        case 'SET_TEAPOT_AGE':
            return action.teapotAge;
        default:
            return state;
    }
};

export default TeapotAge;
