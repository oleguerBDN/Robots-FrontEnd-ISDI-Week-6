import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import useRobot from "../hooks/useRobot";
import useUser from "../hooks/useUser";

const LoginPage = () => {
  const initFormData = useMemo(
    () => ({
      username: "",
      password: "",
    }),
    []
  );
  const [formData, setFormData] = useState(initFormData);
  const [isDisabled, setIsDisabled] = useState(true);
  const { robot } = useRobot();
  const { user, loginUser, logoutUser } = useUser();
  let navigate = useNavigate();

  useEffect(() => {
    if (user.isAuthenticated) {
      navigate("/robots/");
    }
  }, [navigate, user.isAuthenticated]);

  useEffect(() => {
    if (robot.isEditing) {
      setFormData({
        name: robot.name,
        img: robot.img,
        speed: robot.features.speed,
        resistance: robot.features.resistance,
        date: robot.features.birth,
        id: robot.id,
      });
    }
  }, [robot]);

  useEffect(() => {
    setIsDisabled(formData.username === "" || formData.password === "");
  }, [formData]);

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await loginUser(formData);
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={onSubmit}
        className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 bg-white border rounded-lg space-y-0 transition duration-500 ease-in-out transform lg:w-1/2"
      >
        <div className="relative pt-4">
          <label
            htmlFor="name"
            className="text-base leading-7 text-blueGray-500"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            onChange={onChange}
            value={formData.name}
            className="w-full px-4 py-2 mt-2 mr-4 text-base text-black bg-gray-200 rounded-lg  focus:shadow-outline "
          />
        </div>
        <div className="relative pt-4">
          <label
            htmlFor="img"
            className="text-base leading-7 text-blueGray-500"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={onChange}
            value={formData.password}
            className="w-full px-4 py-2 mt-2 mr-4 text-base text-black bg-gray-200 rounded-lg  focus:shadow-outline "
          />
        </div>

        <div className="flex items-center w-full pt-4 mb-4">
          <button
            className={
              isDisabled
                ? "w-full py-3 text-base text-white bg-blue-600 border-blue-600 cursor-not-allowed rounded-md disabled:opacity-30"
                : "w-full py-3 text-base text-white bg-blue-600 border-blue-600 rounded-md focus:ring-2 hover:bg-blue-800"
            }
            disabled={isDisabled}
          >
            {" "}
            LOGIN
            {/* {robot.isEditing ? "UPDATE ROBOT" : "ADD ROBOT"} */}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
