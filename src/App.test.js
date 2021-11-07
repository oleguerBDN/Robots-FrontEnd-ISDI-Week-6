import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
const store = configureStore();

describe("Given a app component", () => {
  describe("When it's invoked", () => {
    test("It should render allways the header", () => {
      render(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      );
      const form = screen.getByRole("link", { name: /form/i });
      const robots = screen.getByRole("link", { name: /robots/i });

      expect(form).toBeInTheDocument();
      expect(robots).toBeInTheDocument();
    });
  });
});
