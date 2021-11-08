import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../redux/actions/actionCreators";
import { loginUserThunk } from "../redux/thunks/userThunks";

const useUser = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const loginUser = useCallback(
    (user) => {
      dispatch(loginUserThunk(user));
    },
    [dispatch]
  );

  const logoutUser = useCallback(() => {
    dispatch(logoutUserAction());
  }, [dispatch]);

  return { user, loginUser, logoutUser };
};

export default useUser;
