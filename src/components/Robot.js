const Robot = () => {
  return (
    <div className="max-w-sm px-6 pt-6 pb-2 bg-white shadow-lg rounded-xl">
      <div className="relative">
        <img
          className="w-full rounded-xl"
          src="https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg"
          alt="Colors"
        />
      </div>
      <h1 className="mt-4 text-3xl font-bold text-gray-800 cursor-pointer">
        ROBOT 1
      </h1>
      <div className="my-4">
        <div className="flex items-center space-x-1">
          <p>Speed</p>
        </div>
        <div className="flex items-center space-x-1">
          <p>Resistance</p>
        </div>
        <div className="flex items-center space-x-1">
          <p>Birth</p>
        </div>
        <button className="w-full mt-4 text-xl text-white bg-red-800 shadow-lg py-1.5 rounded-xl">
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Robot;
