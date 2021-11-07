import { useEffect } from "react";
import Form from "../components/Form";
import Robot from "../components/Robot";
import useRobots from "../hooks/useRobots";

function RobotsMainPage() {
  const { robots, loadRobots, deleteRobot, addRobot } = useRobots();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  const onClickDelete = (robotId) => {
    deleteRobot(robotId);
  };
  const updateRobot = () => {};
  const onClickAdd = (robot) => {
    const parsedRobot = {
      name: robot.name,
      img: robot.img,
      features: {
        speed: robot.speed,
        resistance: robot.resistance,
        birth: robot.date,
      },
    };
    addRobot(parsedRobot);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-tr from-gray-800 to-blue-400">
        <h1>Wellcome to RobotLand - Oleguer</h1>
        <Form addRobot={onClickAdd} />
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
