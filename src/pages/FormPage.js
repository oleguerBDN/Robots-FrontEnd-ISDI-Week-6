import Form from "../components/Form";
import useRobot from "../hooks/useRobot";
import useRobots from "../hooks/useRobots";

function FormPage() {
  const { addRobot, loadRobots } = useRobots();
  const { updateRobot } = useRobot();

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

    if (robot.id) {
      updateRobot({ ...parsedRobot, id: robot.id });
      loadRobots();
    } else {
      addRobot(parsedRobot);
    }
  };

  return (
    <>
      <Form addRobot={onClickAdd} />
    </>
  );
}

export default FormPage;
