const initialState = {
  name: "",
  email: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
