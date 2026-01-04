import { render, screen, fireEvent } from "@testing-library/react";
import PropertyCard from "../Components/PropertyCard";

const mockProperty = {
  id: 1,
  type: "House",
  bedrooms: 3,
  price: 650000,
  picture: ["/test.jpg"],
  shortDescription: "Nice house"
};


test("renders bedroom count", () => {
  render(
    <PropertyCard
      property={mockProperty}
      onView={jest.fn()}
      onFavourite={jest.fn()}
    />
  );

  expect(screen.getByText(/3 bedroom/i)).toBeInTheDocument();
});

test("calls onFavourite when favourite button is clicked", () => {
  const onFavourite = jest.fn();

  render(
    <PropertyCard
      property={mockProperty}
      onView={jest.fn()}
      onFavourite={onFavourite}
    />
  );

  fireEvent.click(screen.getByLabelText(/add to favourites/i));
  expect(onFavourite).toHaveBeenCalledWith(mockProperty);
});
