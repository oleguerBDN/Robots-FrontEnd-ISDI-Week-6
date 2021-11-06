import { loadRobotsAction } from "../actions/actionCreators";

export const loadRobotsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_URL_API);
  const robots = await response.json();
  dispatch(loadRobotsAction(robots));
};
