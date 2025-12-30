import { render, screen, fireEvent } from '@testing-library/react';
import propertyData from './data/properties.json';
import SearchPage from './pages/SearchPage';
import { BrowserRouter } from 'react-router-dom';

const MockSearchPage = () => (
  <BrowserRouter>
    <SearchPage favorites={[]} onToggleFav={() => {}} onClearFavs={() => {}} />
  </BrowserRouter>
);

// 1. Test: Initial Rendering
test('renders search page heading', () => {
  render(<MockSearchPage />);
  const linkElement = screen.getByText(/Find Your Next Home/i);
  expect(linkElement).toBeInTheDocument();
});

// 2. Test: JSON Data Loading
test('loads correct number of properties initially', () => {
  render(<MockSearchPage />);
  const items = screen.getAllByText(/View Details/i);
  expect(items.length).toBe(propertyData.properties.length);
});

// 3. Test: Search Filtering (Type)
test('filters properties by type', () => {
  render(<MockSearchPage />);
  const select = screen.getByRole('combobox');
  fireEvent.change(select, { target: { value: 'Flat' } });
  fireEvent.click(screen.getByText(/Search Properties/i));
  
  const houseText = screen.queryByText(/House/i);
  // Expect houses to be hidden if strictly filtering for flats
  expect(houseText).not.toBeInTheDocument(); 
});

// 4. Test: Postcode Filtering
test('filters properties by postcode', () => {
  render(<MockSearchPage />);
  const input = screen.getByPlaceholderText(/Postcode/i);
  fireEvent.change(input, { target: { value: 'NW1' } });
  fireEvent.click(screen.getByText(/Search Properties/i));
  
  const locationText = screen.getByText(/NW1/i);
  expect(locationText).toBeInTheDocument();
});

// 5. Test: Favorites Logic (Display)
test('shows the empty favorites message initially', () => {
  render(<MockSearchPage />);
  const favCount = screen.getByText(/Favourites \(0\)/i);
  expect(favCount).toBeInTheDocument();
});