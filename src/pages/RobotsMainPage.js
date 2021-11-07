import { useEffect } from "react";
import Form from "../components/Form";
import Robot from "../components/Robot";
import useRobots from "../hooks/useRobots";

function RobotsMainPage() {
  //https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg

  const { robots, loadRobots, deleteRobot } = useRobots();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  const onClickDelete = (robotId) => {
    deleteRobot(robotId);
  };
  const updateRobot = () => {};
  const addRobot = () => {};

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-tr from-gray-800 to-blue-400">
        <h1>Wellcome to RobotLand - Oleguer</h1>
        <Form addRobot={addRobot} />
        <div className="md:px-4 md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
          {robots.map((robot) => (
            <Robot
              robot={robot}
              key={robot.id}
              deleteClick={onClickDelete}
              updateClick={updateRobot}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default RobotsMainPage;
