import jwtDecode from "jwt-decode";
import { loginUserAction } from "../actions/actionCreators";
import axios from "axios";

//jwt-decode
export const loginUserThunk = (user) => async (dispatch) => {
  const { data: token, status } = await axios.post(
    process.env.REACT_APP_URL_API + "login",
    user
  );
  if (status === "200") {
    const user = jwtDecode(token);
    dispatch(loginUserAction(user));
    window.localStorage.setItem(
      process.env.REACT_APP_LOCALSTORAGE_TOKEN,
      JSON.stringify({ token })
    );
  }
};

// SEND WITH TOKEN FROM LOCALSTORAGE EXAMPLE
// export const loadRobotsThunk = async (dispatch) => {
//   const { data: robots } = await axios.get(process.env.REACT_APP_URL_API,
//     {headers:{Authorization:localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN)}}

//     );
//   dispatch(loadRobotsAction(robots));
// };
