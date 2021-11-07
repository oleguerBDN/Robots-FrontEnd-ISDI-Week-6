import axios from "axios";
import {
  loadRobotsAction,
  deleteRobotAction,
  addRobotAction,
  loadRobotAction,
  updateRobotAction,
} from "../actions/actionCreators";

export const loadRobotsThunk = async (dispatch) => {
  const { data: robots } = await axios.get(process.env.REACT_APP_URL_API);
  dispatch(loadRobotsAction(robots));
};

export const loadRobotThunk = (robotId) => async (dispatch) => {
  const { data: robot } = await axios.get(
    process.env.REACT_APP_URL_API + robotId
  );
  dispatch(loadRobotAction(robot));
};

export const deleteRobotThunk = (robotId) => async (dispatch) => {
  const tokenString = "?token=" + process.env.REACT_APP_TOKEN;
  const { status } = await axios.delete(
    process.env.REACT_APP_URL_API + "delete/" + robotId + tokenString
  );
  if (status === 200) {
    dispatch(deleteRobotAction(robotId));
  }
};

export const addRobotThunk = (robot) => async (dispatch) => {
  const tokenString = "?token=" + process.env.REACT_APP_TOKEN;
  const { data: newRobot } = await axios.post(
    process.env.REACT_APP_URL_API + "create" + tokenString,
    robot
  );
  dispatch(addRobotAction(newRobot));
};

export const updateRobotThunk = (robot) => async (dispatch) => {
  const tokenString = "?token=" + process.env.REACT_APP_TOKEN;
  const { data: newRobot } = await axios.put(
    process.env.REACT_APP_URL_API + "update" + tokenString,
    robot
  );
  dispatch(updateRobotAction(newRobot));
};
