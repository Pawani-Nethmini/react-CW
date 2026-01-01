import React, {useState} from "react"
import Select from "react-select"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function SearchForm ({onSearch}){
  const [formData, setFormData] = useState({
    type: null,
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    dateFrom: null,
    dateTo: null,
    postcode: ""
  });

  //Select options for property type
  const propertyTypeOptions = [
    {value: "house", label: "House"},
    {value: "flat", label: "Flat"},
    {value: "any", label: "Any"}
  ];

  //Select options for bedrooms
  const bedroomOptions = [
    {value: 1, label: "1"},
    {value: 2, label: "2"},
    {value: 3, label: "3"},
    {value: 4, label: "4"},
    {value: 4, label: "4"},
    {value: 5, label: "5"}
  ];

  //Select options for price ranges
  const priceOptions = [
     {value: 100000, label: "£100,000"},
     {value: 200000, label: "£200,000"},
     {value: 300000, label: "£300,000"},
     {value: 400000, label: "£400,000"},
     {value: 500000, label: "£500,000"},
     {value: 600000, label: "£600,000"},
     {value: 700000, label: "£700,000"},
     {value: 800000, label: "£800,000"}
  ];

  const maxPriceOption = [
    {value: 200000, label: "£200,000"},
    {value: 300000, label: "£300,000"},
    {value: 400000, label: "£400,000"},
    {value: 500000, label: "£500,000"},
    {value: 600000, label: "£600,000"},
    {value: 700000, label: "£700,000"},
    {value: 800000, label: "£800,000"},
    {value: 900000, label: "£900,000"},
    {value: 1000000, label: "£1,000,000"},
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchCriteria = {
      type: formData.type?.value || "",
      minPrice: formData.minPrice,
      maxPrice: formData.maxPrice,
      minBedRooms: formData.minBedrooms?.value || "",
      maxBedrooms: formData.maxBedrooms?.value || "",
      dateFrom: formData.dateFrom?formData.dateFrom.toISOString().split('T')[0] : "",
      dateTo: formData.dateTo?formData.dateTo.toISOString().split("T")[0] : "",
      postcode: formData.postcode
    };

    onSearch(searchCriteria);
  };

  const handleRest = () => {
    setFormData({
      type: null,
      minPrice: "",
      maxPrice: "",
      minBedrooms: null,
      maxBedrooms: null,
      dateFrom: null,
      dateTo: null,
      postcode: ""
    });
  };

  //Custom styles for React select components
  const selectStyle = {
    control: (base) => ({
      ...base,
      borderColor: "#d1d5db",
      "&:hover": {
        borderColor: "#2563eb"
      }
    }),
    Option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected? "#2563eb" : state.isFocused? "#dbeafe" : "white",
      color: state.isSelected? "white": "#1f2937",
      "&:active" : {
        backgroundColor: "#2563eb"
      }
    })
  };

  return (
    <div className="search-form-container">
      <h2 className="form-title">Search Properties</h2>
      <p className="form-subtitle">Find your perfect home using our advanced search</p>
      <form onSubmit={handleSubmit} className="search-form">
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
              onChange={(Option) => setFormData({...formData, type: option})}
              placeholder="Select property type..."
              styles={selectStyle}
              className="select-widget"
            />
          </div>
        </div>

        {/*Price Ranhe Section*/}
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
              onChange={(option) => setFormData({...formData, minPrice: option.value})}
              placeholder="No minimum"
              styles={selectStyle}
              className="select-widget"
              />
            </div>
            <div className="form-group">
              <label htmlFor="maxPrice" className="form-label">Maximum Price</label>
              <Select 
                id="maxPrice"
                options={maxPriceOptions}
                value={maxPriceOptions.find(opt => opt.value === formData.maxPrice)}
                onChange={(option) => setFormData({formData, maxPrice: option.value})}
                placeholder= "No maximum"
                styles={selectStyle}
                className="select-widget"
                />
            </div>
          </div>
        </div>

        {/*Bedrooms Section*/}
      </form>
    </div>
  )
}