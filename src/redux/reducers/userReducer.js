import actionTypes from "../actions/actionTypes";

const userReducer = (user = {}, action) => {
  let newUser;

  switch (action.type) {
    case actionTypes.loginUser:
      newUser = { ...action.user, isAuthenticated: true };
      break;
    case actionTypes.logoutUser:
      newUser = {};
      break;

    default:
      newUser = { ...user };
      break;
  }

  return newUser;
};
export default userReducer;
