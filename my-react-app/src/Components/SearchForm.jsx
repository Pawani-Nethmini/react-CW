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
    
  ]
}