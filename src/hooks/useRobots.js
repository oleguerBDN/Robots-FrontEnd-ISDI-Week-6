import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRobotThunk,
  loadRobotsThunk,
} from "../redux/thunks/robotsThunks";

const useRobots = () => {
  const robots = useSelector((store) => store.robots);
  const dispatch = useDispatch();

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  const deleteRobot = (idRobot) => {
    dispatch(deleteRobotThunk(idRobot));
  };

  return { robots, loadRobots, deleteRobot };
};

export default useRobots;
