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

export const deleteRobotAction = (robot) => ({
  type: actionTypes.deleteRobot,
  robot,
});

export const updateRobotAction = (robot) => ({
  type: actionTypes.updateRobot,
  robot,
});
