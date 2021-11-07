import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

describe("Given a header component", () => {
  describe("When it's invoked", () => {
    test("It should render two links, FORM & ROBOTS", () => {
      render(
        <Router>
          <Header />
        </Router>
      );
      const form = screen.getByRole("link", { name: /form/i });
      const robots = screen.getByRole("link", { name: /robots/i });

      expect(form).toBeInTheDocument();
      expect(robots).toBeInTheDocument();
    });
  });
});
