import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "../Components/SearchForm";

test("renders price inputs", () => {
  render(<SearchForm onSearch={jest.fn()} />);
  expect(screen.getByLabelText(/min price/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/max price/i)).toBeInTheDocument();
});

test("submits form when search button is clicked", () => {
  const onSearch = jest.fn();
  render(<SearchForm onSearch={onSearch} />);

  fireEvent.click(
    screen.getByRole("button", { name: /search properties/i })
  );

  expect(onSearch).toHaveBeenCalled();
});
