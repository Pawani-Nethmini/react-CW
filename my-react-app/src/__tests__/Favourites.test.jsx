import { render, screen, fireEvent } from "@testing-library/react";
import FavouritesList from "../Components/FavouritesList";

const fav = {
  id: 1,
  type: "Flat",
  price: 400000,
  picture: []
};

test("renders favourite property", () => {
  render(
    <FavouritesList
      favourites={[fav]}
      onRemove={jest.fn()}
      onClear={jest.fn()}
      onView={jest.fn()}
    />
  );

  expect(screen.getByText(/flat/i)).toBeInTheDocument();
});

test("removes favourite when delete is clicked", () => {
  const onRemove = jest.fn();

  render(
    <FavouritesList
      favourites={[fav]}
      onRemove={onRemove}
      onClear={jest.fn()}
      onView={jest.fn()}
    />
  );

  fireEvent.click(screen.getByText(/delete/i));
  expect(onRemove).toHaveBeenCalledWith(1);
});
