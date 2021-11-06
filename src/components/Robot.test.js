import { render, screen } from "@testing-library/react";
import Robot from "./Robot";

describe("Given a Robot component", () => {
  describe("When it receive a robot", () => {
    test("It should render the robot", () => {
      const robot = {
        features: {
          speed: 7,
          resistance: 8,
          birth: "2021-10-09T00:00:00.000Z",
        },
        _id: "6185993022dd92661d3cfca6",
        name: "pepe",
        img: "https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg",
      };

      render(<Robot robot={robot} />);
      const name = screen.getByRole("heading", { name: robot.name });
      const speed = screen.getByText("Speed: " + robot.features.speed);
      const resistance = screen.getByText(
        "Resistance: " + robot.features.resistance
      );

      expect(name).toBeInTheDocument();
      expect(speed).toBeInTheDocument();
      expect(resistance).toBeInTheDocument();
    });
  });
  describe("Whetn it receives a robot, a delete fn and update fn", () => {
    test("Then, expect the fn to be called when buttons clicked", () => {
      const robot = {
        features: {
          speed: 7,
          resistance: 8,
          birth: "2021-10-09T00:00:00.000Z",
        },
        _id: "6185993022dd92661d3cfca6",
        name: "pepe",
        img: "https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg",
      };
      const deleteRobot = jest.fn();
      const updateRobot = jest.fn();

      render(
        <Robot
          robot={robot}
          key={robot._id}
          deleteClick={deleteRobot}
          updateClick={updateRobot}
        />
      );
      const buttonDelete = screen.getByRole("button", { name: /delete/i });
      const buttonUpdate = screen.getByRole("button", { name: /modify/i });
      buttonDelete.click();
      buttonUpdate.click();

      expect(deleteRobot).toHaveBeenCalledWith(robot._id);
      expect(updateRobot).toHaveBeenCalledWith(robot._id);
    });
  });
});
