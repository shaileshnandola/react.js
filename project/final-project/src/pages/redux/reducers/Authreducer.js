const initialState = {
  user: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "register":
      return state

    case "login":
      return {
        ...state,
        user: [action.payload],
      };

    default:
      return state;
  }
};

export default authReducer;
