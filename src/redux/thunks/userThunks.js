import jwtDecode from "jwt-decode";
import { loginUserAction } from "../actions/actionCreators";
import axios from "axios";

//jwt-decode
export const loginUserThunk = (user) => async (dispatch) => {
  try {
    const { data, status } = await axios.post(
      process.env.REACT_APP_URL_API_LOGIN,
      user
    );
    const token = data.token;
    if (status === 200) {
      const user = jwtDecode(token);
      dispatch(loginUserAction(user.username));
      window.localStorage.setItem(
        process.env.REACT_APP_LOCALSTORAGE_TOKEN,
        token
        // JSON.stringify({ token })
      );
    }
  } catch {}
};

// SEND WITH TOKEN FROM LOCALSTORAGE EXAMPLE
// export const loadRobotsThunk = async (dispatch) => {
//   const { data: robots } = await axios.get(process.env.REACT_APP_URL_API,
//     {headers:{Authorization:localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN)}}

//     );
//   dispatch(loadRobotsAction(robots));
// };
