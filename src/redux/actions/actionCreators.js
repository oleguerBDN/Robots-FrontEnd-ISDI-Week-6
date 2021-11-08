import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const loadRobotAction = (robot) => ({
  type: actionTypes.loadRobot,
  robot,
});

export const addRobotAction = (robot) => ({
  type: actionTypes.addRobot,
  robot,
});

export const deleteRobotAction = (id) => ({
  type: actionTypes.deleteRobot,
  id,
});

export const updateRobotAction = (robot) => ({
  type: actionTypes.updateRobot,
  robot,
});

export const resetRobotAction = () => ({
  type: actionTypes.resetRobot,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const logoutUserAction = () => ({
  type: actionTypes.logoutUser,
});
