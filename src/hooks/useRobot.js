import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRobotThunk } from "../redux/thunks/robotsThunks";

const useRobot = () => {
  const robot = useSelector((store) => store.robot);
  const dispatch = useDispatch();

  const loadRobot = useCallback(
    (robotId) => {
      dispatch(loadRobotThunk(robotId));
    },
    [dispatch]
  );

  return { robot, loadRobot };
};

export default useRobot;
