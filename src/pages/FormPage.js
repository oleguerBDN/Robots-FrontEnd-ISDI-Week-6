import Form from "../components/Form";
import useRobots from "../hooks/useRobots";

function FormPage() {
  const { addRobot } = useRobots();

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
      console.log("update");
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
