const StatusOfTeapot = (state = 'Hit me with your best pot', action) => {
    switch (action.type) {
        case 'GET_TEAPOT_STATUS':
            return action.statusOfTeapot
        default:
            return state
    }
}

export default StatusOfTeapot
