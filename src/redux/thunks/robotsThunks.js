import axios from "axios";
import {
  loadRobotsAction,
  deleteRobotAction,
  addRobotAction,
} from "../actions/actionCreators";

export const loadRobotsThunk = async (dispatch) => {
  const { data: robots } = await axios.get(process.env.REACT_APP_URL_API);
  dispatch(loadRobotsAction(robots));
};

export const deleteRobotThunk = (robotId) => async (dispatch) => {
  const tokenString = "?token=" + process.env.REACT_APP_TOKEN;
  const { status } = await axios.delete(
    process.env.REACT_APP_URL_API + robotId + tokenString
  );
  if (status === 200) {
    dispatch(deleteRobotAction(robotId));
  }
};

export const addRobotThunk = (robot) => async (dispatch) => {
  const tokenString = "?token=" + process.env.REACT_APP_TOKEN;
  const { data: newRobot } = await axios.post(
    process.env.REACT_APP_URL_API + tokenString,
    robot
  );
  dispatch(addRobotAction(newRobot));
};
