import actionTypes from "../actions/actionTypes";

const robotReducer = (robot = {}, action) => {
  let newRobot;

  switch (action.type) {
    case actionTypes.loadRobot:
      newRobot = { ...action.robot, isEditing: true };
      break;
    case actionTypes.updateRobot:
      newRobot = { ...action.robot };
      break;
    case actionTypes.resetRobot:
      newRobot = { ...robot, isEditing: false };
      break;
    default:
      newRobot = { ...robot };
      break;
  }

  return newRobot;
};

export default robotReducer;
