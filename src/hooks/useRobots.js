import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRobotsThunk } from "../redux/thunks/robotsThunks";

const useRobots = () => {
  const robots = useSelector((store) => store.robots);
  const dispatch = useDispatch();

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  return { robots, loadRobots };
};

export default useRobots;
