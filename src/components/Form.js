import { useEffect, useState } from "react";

const Form = ({ addRobot }) => {
  const initFormData = {
    name: "",
    img: "https://i.ibb.co/GcBcsKq/robot.jpg",
    date: "",
    speed: 5,
    resistance: 5,
  };
  const [formData, setFormData] = useState(initFormData);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(
      formData.name === "" || formData.img === "" || formData.date === ""
    );
  }, [formData]);

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addRobot(formData);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={onSubmit}
      className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 bg-white border rounded-lg space-y-0 transition duration-500 ease-in-out transform lg:w-1/2"
    >
      <div className="relative pt-4">
        <label htmlFor="name" className="text-base leading-7 text-blueGray-500">
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
        <label htmlFor="img" className="text-base leading-7 text-blueGray-500">
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
        <label htmlFor="name" className="text-base leading-7 text-blueGray-500">
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
  );
};

export default Form;
