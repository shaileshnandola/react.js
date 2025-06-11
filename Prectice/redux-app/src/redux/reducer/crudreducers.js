const initialState = {
    users: JSON.parse(localStorage.getItem('users')) || [],
    single: null

};

const crudReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_USER":
            let olduser = [...state.users, action.payload]
            localStorage.setItem('users', JSON.stringify(olduser))
            return {
                ...state,
                users: olduser
            };
        case "DELETE_USER":
            let deleterecord = state.users.filter(user => user.
                userid !== action.payload
            )

            localStorage.setItem('users', JSON.stringify(deleterecord))
            return {
                ...state,
                users: deleterecord
            }
        case "EDIT_USER":
            const up = state.users.find(val => val.userid == action.payload);
            return {
                ...state,
                single: up
            };

        case "UPDATE_USER":
            const data = state.users.map((user) => {
                if (user.userid == action.payload.userid) {
                    return action.payload
                } else {
                    return user
                }
            });

            localStorage.setItem('users', JSON.stringify(data));
            return {
                ...state,
                users: data,

            };
        default:
            return state;
    }
};

export default crudReducer;
