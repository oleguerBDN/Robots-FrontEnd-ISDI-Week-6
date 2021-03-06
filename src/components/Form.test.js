import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../redux/store";
const store = configureStore();

describe("Given a Form component", () => {
  describe("When it's rendered", () => {
    test("Then it should render the inputs and button", () => {
      render(
        <Provider store={store}>
          <Router>
            <Form addRobot={() => {}} />
          </Router>
        </Provider>
      );
      const name = screen.getByLabelText(/name/i);
      const image = screen.getByLabelText(/image/i);
      const date = screen.getByLabelText(/date/i);
      const speed = screen.getByLabelText(/speed/i);
      const resistance = screen.getByLabelText(/resistance/i);
      const button = screen.getByRole("button", { name: /add robot/i });

      expect(name).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(date).toBeInTheDocument();
      expect(speed).toBeInTheDocument();
      expect(resistance).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
  describe("When it's rendered with a function add, EMPTY inputs and button clicked", () => {
    test("Then the function add should have NOT been called", () => {
      const addFn = jest.fn();

      render(
        <Provider store={store}>
          <Router>
            <Form addRobot={addFn} />
          </Router>
        </Provider>
      );
      const button = screen.getByRole("button", { name: /add robot/i });
      button.click();

      expect(addFn).not.toHaveBeenCalled();
    });
  });
  describe("When it's rendered with a function add, filled inputs and button clicked", () => {
    test("Then the function add should have NOT been called", () => {
      const addFn = jest.fn();

      render(
        <Provider store={store}>
          <Router>
            <Form addRobot={addFn} />
          </Router>
        </Provider>
      );
      const name = screen.getByLabelText(/name/i);
      const date = screen.getByLabelText(/date/i);
      userEvent.type(name, "whatever");
      userEvent.type(date, "whatever");

      const button = screen.getByRole("button", { name: /add robot/i });

      button.click();

      expect(addFn).not.toHaveBeenCalled();
    });
  });
});
