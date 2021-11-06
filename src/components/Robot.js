const Robot = ({ robot, deleteClick, updateClick }) => {
  return (
    <div className="max-w-sm px-6 pt-6 pb-2 bg-white shadow-lg rounded-xl">
      <div className="relative">
        <img className="w-full rounded-xl" src={robot.img} alt={robot.name} />
      </div>
      <h1 className="mt-4 text-3xl font-bold text-gray-800 cursor-pointer">
        {robot.name}
      </h1>
      <div className="my-4">
        <div className="flex items-center space-x-1">
          <p>Speed: {robot.features.speed}</p>
        </div>
        <div className="flex items-center space-x-1">
          <p>Resistance: {robot.features.resistance}</p>
        </div>
        <div className="flex items-center space-x-1">
          <p>Birth Date: {robot.features.birth}</p>
        </div>
        <button
          className="w-full mt-4 text-xl text-white bg-red-800 shadow-lg py-1.5 rounded-xl"
          onClick={() => deleteClick(robot._id)}
        >
          DELETE
        </button>
        <button
          className="w-full mt-4 text-xl text-white bg-blue-800 shadow-lg py-1.5 rounded-xl"
          onClick={() => updateClick(robot._id)}
        >
          MODIFY
        </button>
      </div>
    </div>
  );
};

export default Robot;
