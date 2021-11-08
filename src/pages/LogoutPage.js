import { useEffect } from "react";
import { useNavigate } from "react-router";
import useUser from "../hooks/useUser";

const LogoutPage = () => {
  const { user, logoutUser } = useUser();
  let navigate = useNavigate();

  useEffect(() => {
    if (user.isAuthenticated) {
      logoutUser();
      localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN);
      navigate(-1);
    }
  }, [logoutUser, navigate, user.isAuthenticated]);

  return <></>;
};

export default LogoutPage;
