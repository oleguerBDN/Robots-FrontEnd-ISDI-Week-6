import actionTypes from "../actions/actionTypes";

const userReducer = (user = { isAuthenticated: false, user: {} }, action) => {
  let newUser;

  switch (action.type) {
    case actionTypes.loginUser:
      newUser = { user: action.user, isAuthenticated: true };
      break;
    case actionTypes.logoutUser:
      newUser = { user: {}, isAuthenticated: false };
      break;

    default:
      newUser = { ...user };
      break;
  }

  return newUser;
};
export default userReducer;
