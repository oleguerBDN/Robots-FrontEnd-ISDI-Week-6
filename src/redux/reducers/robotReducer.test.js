import { loadRobotAction, updateRobotAction } from "../actions/actionCreators";
import robotReducer from "./robotReducer";

describe("Given a robotReducer", () => {
  describe("When it receives an action type loadRobot", () => {
    test("Then it should return a new robot", () => {
      const robot = {
        features: {
          speed: 7,
          resistance: 8,
          birth: "2021-10-09T00:00:00.000Z",
        },
        id: "6185993022dd92661d3cfca6",
        name: "pepe",
        img: "https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg",
      };
      const action = loadRobotAction(robot);

      const newRobot = robotReducer({}, action);

      expect(newRobot).toEqual({ ...robot, isEditing: true });
    });
  });
  describe("When it receives an action type updateRobot", () => {
    test("Then it should return a new robot", () => {
      const robot = {
        features: {
          speed: 7,
          resistance: 8,
          birth: "2021-10-09T00:00:00.000Z",
        },
        id: "6185993022dd92661d3cfca6",
        name: "pepe",
        img: "https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg",
      };
      const action = updateRobotAction(robot);

      const newRobot = robotReducer({}, action);

      expect(newRobot).toEqual(robot);
    });
  });
  describe("When it receives an action type unexpected and a robot", () => {
    test("Then it should return a the current robot", () => {
      const robot = {
        features: {
          speed: 7,
          resistance: 8,
          birth: "2021-10-09T00:00:00.000Z",
        },
        id: "6185993022dd92661d3cfca6",
        name: "pepe",
        img: "https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg",
      };
      const action = { type: "whatever" };

      const newRobot = robotReducer(robot, action);

      expect(newRobot).toEqual(robot);
    });
  });
});
