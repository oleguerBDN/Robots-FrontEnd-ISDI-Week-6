import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetRobotAction } from "../redux/actions/actionCreators";
import { loadRobotThunk, updateRobotThunk } from "../redux/thunks/robotsThunks";

const useRobot = () => {
  const robot = useSelector((store) => store.robot);
  const dispatch = useDispatch();

  const loadRobot = useCallback(
    (robotId) => {
      dispatch(loadRobotThunk(robotId));
    },
    [dispatch]
  );

  const updateRobot = useCallback(
    (robotUpdated) => {
      dispatch(updateRobotThunk(robotUpdated));
    },
    [dispatch]
  );

  const resetRobot = useCallback(() => {
    dispatch(resetRobotAction());
  }, [dispatch]);

  return { robot, loadRobot, resetRobot, updateRobot };
};

export default useRobot;
