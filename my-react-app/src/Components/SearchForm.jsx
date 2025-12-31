import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/**
 * SearchForm Component
 * Provides an enhanced form for searching properties using React widgets
 * @param {Function} onSearch - Callback function to handle search submission
 */
function SearchForm({ onSearch }) {
  // Form state management
  const [formData, setFormData] = useState({
    type: null,
    minPrice: '',
    maxPrice: '',
    minBedrooms: null,
    maxBedrooms: null,
    dateFrom: null,
    dateTo: null,
    postcode: ''
  });

  // Select options for property type
  const propertyTypeOptions = [
    { value: 'any', label: 'Any' },
    { value: 'house', label: 'House' },
    { value: 'flat', label: 'Flat' }
  ];

  // Select options for bedrooms
  const bedroomOptions = [
    { value: '', label: 'Any' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5+' }
  ];

  // Select options for price ranges
  const priceOptions = [
    { value: '', label: 'No min' },
    { value: 100000, label: '£100,000' },
    { value: 200000, label: '£200,000' },
    { value: 300000, label: '£300,000' },
    { value: 400000, label: '£400,000' },
    { value: 500000, label: '£500,000' },
    { value: 600000, label: '£600,000' },
    { value: 700000, label: '£700,000' },
    { value: 800000, label: '£800,000' }
  ];

  const maxPriceOptions = [
    { value: '', label: 'No max' },
    { value: 200000, label: '£200,000' },
    { value: 300000, label: '£300,000' },
    { value: 400000, label: '£400,000' },
    { value: 500000, label: '£500,000' },
    { value: 600000, label: '£600,000' },
    { value: 700000, label: '£700,000' },
    { value: 800000, label: '£800,000' },
    { value: 1000000, label: '£1,000,000' }
  ];

  /**
   * Handles form submission and passes search criteria to parent
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const searchCriteria = {
      type: formData.type?.value || '',
      minPrice: formData.minPrice,
      maxPrice: formData.maxPrice,
      minBedrooms: formData.minBedrooms?.value || '',
      maxBedrooms: formData.maxBedrooms?.value || '',
      dateFrom: formData.dateFrom ? formData.dateFrom.toISOString().split('T')[0] : '',
      dateTo: formData.dateTo ? formData.dateTo.toISOString().split('T')[0] : '',
      postcode: formData.postcode
    };

    onSearch(searchCriteria);
  };

  /**
   * Resets all form fields to initial state
   */
  const handleReset = () => {
    setFormData({
      type: null,
      minPrice: '',
      maxPrice: '',
      minBedrooms: null,
      maxBedrooms: null,
      dateFrom: null,
      dateTo: null,
      postcode: ''
    });
  };

  // Custom styles for React Select components
  const selectStyles = {
    control: (base) => ({
      ...base,
      borderColor: '#d1d5db',
      '&:hover': {
        borderColor: '#2563eb'
      }
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? '#2563eb' : state.isFocused ? '#dbeafe' : 'white',
      color: state.isSelected ? 'white' : '#1f2937',
      '&:active': {
        backgroundColor: '#2563eb'
      }
    })
  };

  return (
    <div className="search-form-container">
      <h2 className="form-title">Search Properties</h2>
      <p className="form-subtitle">Find your perfect home using our advanced search</p>
      
      <form onSubmit={handleSubmit} className="search-form">
        {/* Property Type Section */}
        <div className="form-section">
          <h3 className="section-title">Property Type</h3>
          <div className="form-group">
            <label htmlFor="type" className="form-label">
              Type of Property
            </label>
            <Select
              id="type"
              options={propertyTypeOptions}
              value={formData.type}
              onChange={(option) => setFormData({ ...formData, type: option })}
              placeholder="Select property type..."
              styles={selectStyles}
              className="select-widget"
            />
          </div>
        </div>

        {/* Price Range Section */}
        <div className="form-section">
          <h3 className="section-title">Price Range</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="minPrice" className="form-label">
                Minimum Price
              </label>
              <Select
                id="minPrice"
                options={priceOptions}
                value={priceOptions.find(opt => opt.value === formData.minPrice)}
                onChange={(option) => setFormData({ ...formData, minPrice: option.value })}
                placeholder="No minimum"
                styles={selectStyles}
                className="select-widget"
              />
            </div>
            <div className="form-group">
              <label htmlFor="maxPrice" className="form-label">
                Maximum Price
              </label>
              <Select
                id="maxPrice"
                options={maxPriceOptions}
                value={maxPriceOptions.find(opt => opt.value === formData.maxPrice)}
                onChange={(option) => setFormData({ ...formData, maxPrice: option.value })}
                placeholder="No maximum"
                styles={selectStyles}
                className="select-widget"
              />
            </div>
          </div>
        </div>

        {/* Bedrooms Section */}
        <div className="form-section">
          <h3 className="section-title">Bedrooms</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="minBedrooms" className="form-label">
                Minimum Bedrooms
              </label>
              <Select
                id="minBedrooms"
                options={bedroomOptions}
                value={formData.minBedrooms}
                onChange={(option) => setFormData({ ...formData, minBedrooms: option })}
                placeholder="Any"
                styles={selectStyles}
                className="select-widget"
              />
            </div>
            <div className="form-group">
              <label htmlFor="maxBedrooms" className="form-label">
                Maximum Bedrooms
              </label>
              <Select
                id="maxBedrooms"
                options={bedroomOptions}
                value={formData.maxBedrooms}
                onChange={(option) => setFormData({ ...formData, maxBedrooms: option })}
                placeholder="Any"
                styles={selectStyles}
                className="select-widget"
              />
            </div>
          </div>
        </div>

        {/* Date Added Section */}
        <div className="form-section">
          <h3 className="section-title">Date Added</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dateFrom" className="form-label">
                From Date
              </label>
              <DatePicker
                id="dateFrom"
                selected={formData.dateFrom}
                onChange={(date) => setFormData({ ...formData, dateFrom: date })}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select start date"
                className="date-picker"
                maxDate={new Date()}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateTo" className="form-label">
                To Date
              </label>
              <DatePicker
                id="dateTo"
                selected={formData.dateTo}
                onChange={(date) => setFormData({ ...formData, dateTo: date })}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select end date"
                className="date-picker"
                minDate={formData.dateFrom}
                maxDate={new Date()}
              />
            </div>
          </div>
        </div>

        {/* Postcode Section */}
        <div className="form-section">
          <h3 className="section-title">Location</h3>
          <div className="form-group">
            <label htmlFor="postcode" className="form-label">
              Postcode Area
            </label>
            <input
              type="text"
              id="postcode"
              value={formData.postcode}
              onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
              placeholder="e.g. BR1, NW1, SW19"
              className="text-input"
              maxLength="10"
            />
            <small className="input-hint">Enter the first part of the postcode</small>
          </div>
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <button type="submit" className="primary-button">
            Search Properties
          </button>
          <button type="button" onClick={handleReset} className="secondary-button">
            Reset Filters
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;