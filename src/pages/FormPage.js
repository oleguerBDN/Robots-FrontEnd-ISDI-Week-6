import Form from "../components/Form";
import useRobots from "../hooks/useRobots";

function FormPage({ update }) {
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
    addRobot(parsedRobot);
  };

  if (update) {
    console.log("update");
  }

  return (
    <>
      <Form addRobot={onClickAdd} />
    </>
  );
}

export default FormPage;
