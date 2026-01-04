import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders main site heading", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /estate agent portal/i })
  ).toBeInTheDocument();
});

test("renders footer text", () => {
  render(<App />);
  expect(
    screen.getByText(/all rights reserved/i)
  ).toBeInTheDocument();
});
