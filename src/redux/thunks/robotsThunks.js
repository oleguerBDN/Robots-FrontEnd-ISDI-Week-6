import { loadRobotsAction, deleteRobotAction } from "../actions/actionCreators";

export const loadRobotsThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_URL_API);
  const robots = await response.json();
  dispatch(loadRobotsAction(robots));
};

export const deleteRobotThunk = (robotId) => async (dispatch) => {
  const tokenString = "?token=" + process.env.REACT_APP_TOKEN;
  const response = await fetch(
    process.env.REACT_APP_URL_API + robotId + tokenString,
    { method: "DELETE" }
  );
  if (response.ok) {
    dispatch(deleteRobotAction(robotId));
  }
};
