import { Provider } from "react-redux";
import configureStore from "../redux/store";
import { server } from "../mock/server";
import { screen, waitFor, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormPage from "./FormPage";
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();

describe("Given a FormPage component", () => {
  describe("When it's rendered, form filled and submited", () => {
    beforeAll(() => {
      server.listen();
    });

    beforeEach(() => {
      server.resetHandlers();
    });

    afterAll(() => {
      server.close();
    });

    test("Then it should add the new robot", async () => {
      const robot = {
        features: {
          speed: 7,
          resistance: 8,
          birth: "2021-10-09T00:00:00.000Z",
        },
        id: "6185993022dd925261d3cfca6",
        name: "newRobot",
        img: "img",
      };

      render(
        <Provider store={store}>
          <Router>
            <FormPage />
          </Router>
        </Provider>
      );

      const name = screen.getByLabelText(/name/i);
      const date = screen.getByLabelText(/date/i);
      userEvent.type(name, "newRobot");
      userEvent.type(date, "whatever");

      const addButton = await screen.findByRole("button", {
        name: /add robot/i,
      });
      userEvent.click(addButton);

      await waitFor(() => {
        //const robotName = screen.queryByRole("heading", { name: robot.name });
        expect(addButton).not.toBeInTheDocument();
      });
    });
  });
});
