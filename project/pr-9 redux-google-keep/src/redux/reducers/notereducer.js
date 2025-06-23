const initialstate = {
    task: JSON.parse(localStorage.getItem("users")) || []
}
const notereducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'ADD_USER':
            let data = [...state.task, action.payload]
            localStorage.setItem('users', JSON.stringify(data))
            return {
                ...state,
                task: data
            }
        case 'DELETE_USER':
            const del = state.task.filter((val) => val.id != action.payload)
              localStorage.setItem('users', JSON.stringify(del))
            return{
                ...state,
                task: del
            }
        default: {
            return state
        }
    }
}
export default notereducer

