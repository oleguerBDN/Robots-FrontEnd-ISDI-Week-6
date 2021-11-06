import {
  addRobotAction,
  deleteRobotAction,
  loadRobotAction,
  loadRobotsAction,
} from "../actions/actionCreators";
import robotsReducer from "./robotsReducer";

const robots = [
  {
    features: {
      speed: 7,
      resistance: 8,
      birth: "2021-10-09T00:00:00.000Z",
    },
    id: "6185993022dd92661d3cfca6",
    name: "pepe",
    img: "https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg",
  },
  {
    features: {
      speed: 1,
      resistance: 1,
      birth: "1998-10-09T00:00:00.000Z",
    },
    id: "61859b1a72845edffd042108",
    name: "jose",
    img: "https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg",
    __v: 0,
  },
  {
    features: {
      speed: 1,
      resistance: 1,
      birth: "1998-10-09T00:00:00.000Z",
    },
    id: "6185a755cee735ee214bc98c",
    name: "herokuu",
    img: "https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg",
    __v: 0,
  },
  {
    features: {
      speed: 1,
      resistance: 1,
      birth: "1998-10-09T00:00:00.000Z",
    },
    id: "6185a7aacee735ee214bc98f",
    name: "localhost",
    img: "https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg",
    __v: 0,
  },
];

describe("Given a robotsReducer", () => {
  describe("When it receives an action type loadRobots and robots array", () => {
    test("Then it should return a new robots array", () => {
      const action = loadRobotsAction(robots);
      const newRobots = robotsReducer([], action);

      expect(newRobots).toEqual(robots);
    });
  });
  describe("When it receives an action type addRobot and robot", () => {
    test("Then it should return a new robots array with the new robot included", () => {
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

      const action = addRobotAction(robot);
      const newRobots = robotsReducer(robots, action);

      expect(newRobots).toContain(robot);
      expect(robots.length + 1).toBe(newRobots.length);
    });
  });
  describe("When it receives an action type deleteRobot and robot", () => {
    test("Then it should return a new robots array with the new robot NOT included", () => {
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

      const action = deleteRobotAction(robot.id);
      const newRobots = robotsReducer(robots, action);

      expect(newRobots).not.toContain(robot);
      expect(robots.length - 1).toBe(newRobots.length);
    });
  });
});
