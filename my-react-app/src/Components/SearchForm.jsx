import React, { useState } from "react";
import "../styles/searchForm.css";

function SearchForm({ onSearch }) {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    onSearch({
      ...form,
      minPrice: Number(form.minPrice),
      maxPrice: Number(form.maxPrice),
      minBeds: Number(form.minBeds),
      maxBeds: Number(form.maxBeds),
    });
  };

  return (
    <form onSubmit={submit}>
      <select name="type" onChange={handleChange}>
        <option value="any">Any</option>
        <option value="house">House</option>
        <option value="flat">Flat</option>
      </select>

      <input name="minPrice" placeholder="Min Price" onChange={handleChange} />
      <input name="maxPrice" placeholder="Max Price" onChange={handleChange} />
      <input name="minBeds" placeholder="Min Beds" onChange={handleChange} />
      <input name="maxBeds" placeholder="Max Beds" onChange={handleChange} />
      <input name="postcode" placeholder="Postcode Area" onChange={handleChange} />
      <input type="date" name="dateAdded" onChange={handleChange} />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
