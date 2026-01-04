import { render, screen, fireEvent } from "@testing-library/react";
import PropertyDetails from "../Components/PropertyDetails";

const property = {
  id: "prop1",
  type: "House",
  location: "BR1",
  price: 550000,
  bedrooms: 3,
  description: "Long description of the property",
  tenure: "Freehold",
  picture: []
};

/* TEST 1: Page renders correctly */
test("renders property details page", () => {
  render(
    <PropertyDetails
      property={property}
      onBack={jest.fn()}
      onFavourite={jest.fn()}
      favourites={[]}
    />
  );

  expect(screen.getByText(/house in br1/i)).toBeInTheDocument();
  expect(screen.getByText(/550,000/i)).toBeInTheDocument();
});

/* TEST 2: Back button is displayed and clickable */
test("renders back button and responds to click", () => {
  const onBack = jest.fn();

  render(
    <PropertyDetails
      property={property}
      onBack={onBack}
      onFavourite={jest.fn()}
      favourites={[]}
    />
  );

  const backButton = screen.getByRole("button", { name: /back to search/i });
  expect(backButton).toBeInTheDocument();

  fireEvent.click(backButton);
  expect(onBack).toHaveBeenCalled();
});

/* TEST 3: Favourite button disables when already favourited */
test("disables favourite button when property is already favourited", () => {
  render(
    <PropertyDetails
      property={property}
      onBack={jest.fn()}
      onFavourite={jest.fn()}
      favourites={[property]}
    />
  );

  const favButton = screen.getByRole("button", {
    name: /added to favourites/i
  });

  expect(favButton).toBeDisabled();
  expect(favButton).toHaveClass("already-favourited");
});
