import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useRobot from "../hooks/useRobot";

const Form = ({ addRobot }) => {
  const initFormData = useMemo(
    () => ({
      name: "",
      img: "https://i.ibb.co/GcBcsKq/robot.jpg",
      date: "",
      speed: 5,
      resistance: 5,
    }),
    []
  );
  const [formData, setFormData] = useState(initFormData);
  const [isDisabled, setIsDisabled] = useState(true);
  const [messageEmpty, setMessageEmpty] = useState(true);
  const { robot } = useRobot();
  const { robotId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (robot.isEditing && robotId) {
      setFormData({
        name: robot.name,
        img: robot.img,
        speed: robot.features.speed,
        resistance: robot.features.resistance,
        date: robot.features.birth,
        id: robot.id,
      });
      //setTextButton("Update");
    }
  }, [robot, robotId]);

  useEffect(() => {
    setIsDisabled(
      formData.name === "" || formData.img === "" || formData.date === ""
    );
  }, [formData]);

  const resetForm = () => {
    setFormData(initFormData);
    navigate("/robots/");
  };

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
    if (!messageEmpty) {
      setMessageEmpty(true);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addRobot(formData);
    resetForm();
    setMessageEmpty(false);
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
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
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
            Image
          </label>
          <input
            type="text"
            id="img"
            name="img"
            placeholder="image"
            onChange={onChange}
            value={formData.img}
            className="w-full px-4 py-2 mt-2 mr-4 text-base text-black bg-gray-200 rounded-lg  focus:shadow-outline "
          />
        </div>

        <div className="relative pt-4">
          <label
            htmlFor="name"
            className="text-base leading-7 text-blueGray-500"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={onChange}
            value={formData.date}
            className="w-full px-4 py-2 mt-2 mr-4 text-base text-black bg-gray-200 rounded-lg  focus:shadow-outline "
          />
        </div>

        <div className="relative pt-4">
          <label
            htmlFor="speed"
            className="text-base leading-7 text-blueGray-500"
          >
            Speed
          </label>
          <input
            type="range"
            id="speed"
            min="0"
            max="10"
            name="speed"
            placeholder="Speed"
            onChange={onChange}
            value={formData.speed}
            className="w-full px-4 py-2 mt-2 mr-4 text-base text-black bg-gray-200 rounded-lg  focus:shadow-outline "
          />
        </div>
        <div className="relative pt-4">
          <label
            htmlFor="resistance"
            className="text-base leading-7 text-blueGray-500"
          >
            Resistance
          </label>
          <input
            type="range"
            id="resistance"
            min="0"
            max="10"
            name="resistance"
            onChange={onChange}
            value={formData.resistance}
            placeholder="Resistance"
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
            Add robot
          </button>
        </div>
      </form>
      <h2 className="bg-white	">{messageEmpty || "Added robot successfully"}</h2>
    </>
  );
};

export default Form;
