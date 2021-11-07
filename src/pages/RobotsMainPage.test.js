import { Provider } from "react-redux";
import configureStore from "../redux/store";
import { server } from "../mock/server";
import RobotsMainPage from "./RobotsMainPage";
import {
  screen,
  waitFor,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
const store = configureStore();

describe("Given a RobotsMainPage component", () => {
  describe("When it's rendered", () => {
    beforeAll(() => {
      server.listen();
    });

    beforeEach(() => {
      server.resetHandlers();
    });
    afterAll(() => {
      server.close();
    });

    test("Then it should have the robots list", async () => {
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
      ];

      render(
        <Provider store={store}>
          <RobotsMainPage />
        </Provider>
      );
      const firstRobotName = await screen.findByRole("heading", {
        name: robots[0].name,
      });
      const secondRobotName = await screen.findByRole("heading", {
        name: robots[1].name,
      });

      await waitFor(() => {
        expect(firstRobotName).toBeInTheDocument();
        expect(secondRobotName).toBeInTheDocument();
      });
    });
  });
  describe("When it's rendered and button delete is clicked", () => {
    beforeAll(() => {
      server.listen();
    });

    beforeEach(() => {
      server.resetHandlers();
    });

    afterAll(() => {
      server.close();
    });

    test("Then it should remove the deleted robot from the render", async () => {
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
      ];

      render(
        <Provider store={store}>
          <RobotsMainPage />
        </Provider>
      );

      const firstRobotName = await screen.findByRole("heading", {
        name: robots[0].name,
      });
      expect(firstRobotName).toBeInTheDocument();
      const secondRobotName = await screen.findByRole("heading", {
        name: robots[1].name,
      });
      expect(secondRobotName).toBeInTheDocument();

      const buttonsDelete = await screen.findAllByRole("button", {
        name: /delete/i,
      });
      const firstButtonDelete = buttonsDelete[0];
      userEvent.click(firstButtonDelete);

      await waitFor(() => {
        expect(firstRobotName).not.toBeInTheDocument();
        expect(secondRobotName).toBeInTheDocument();
      });
    });
  });
});
