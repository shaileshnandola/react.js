let initaial = 0
const counter = (state = initaial, action) => {
    switch (action.type) {
        case 'inc':
            return state + 1
        case 'dec':
            return state - 1
        default:
            return state
    }
}
export default counter;