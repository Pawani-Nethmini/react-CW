import React, { useState } from "react";
import { 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Button, 
  Box, 
  Typography 
} from "@mui/material";
import "../styles/searchForm.css";

function SearchForm({ onSearch }) {
  const [form, setForm] = useState({
    type: "any",
    minPrice: "",
    maxPrice: "",
    minBeds: "Math.max(1, Math.min(minBeds, 4))",
    maxBeds: "maxBeds: Math.max(1, Math.min(maxBeds, 5))",
    postcode: "",
    startDate: "",
    endDate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    onSearch({
      type: form.type,
      minPrice: form.minPrice ? Number(form.minPrice) : 275000,
      maxPrice: form.maxPrice ? Number(form.maxPrice) : 825000,
      minBeds: form.minBeds ? Number(form.minBeds) : 1,
      maxBeds: form.maxBeds ? Number(form.maxBeds) : 5,
      postcode: form.postcode.trim().toUpperCase(),
      startDate: form.startDate || null,
      endDate: form.endDate || null
    });
  };

  return (
    <Box component="form" onSubmit={submit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">Search Properties</Typography>
      
      {/* Property Type Widget [cite: 25, 35] */}
      <FormControl fullWidth>
        <InputLabel>Property Type</InputLabel>
        <Select name="type" value={form.type} label="Property Type" onChange={handleChange}>
          <MenuItem value="any">Any</MenuItem>
          <MenuItem value="House">House</MenuItem>
          <MenuItem value="Flat">Flat</MenuItem>
        </Select>
      </FormControl>

      {/* Price and Bedroom Widgets [cite: 26, 27, 35] */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField fullWidth label="Min Price" name="minPrice" type="number" onChange={handleChange} />
        <TextField fullWidth label="Max Price" name="maxPrice" type="number" onChange={handleChange} />
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField fullWidth label="Min Beds" name="minBeds" type="number" inputProps={{ min: 1, max: 4 }} onChange={handleChange} />
        <TextField fullWidth label="Max Beds" name="maxBeds" type="number" inputProps={{ min: 2, max: 5 }} onChange={handleChange} />
      </Box>

      {/* Postcode and Date Widgets [cite: 28, 35] */}
      <TextField fullWidth label="Postcode Area (e.g. BR1)" name="postcode" onChange={handleChange} />

      <Box sx={{display: 'flex', gap: 2}}>
        <TextField fullWidth label="Date Added From" name="startDate" type="date" InputLabelProps={{shrink: true}} onChange={handleChange}/>
      
        <TextField fullWidth label="Date Added To" name="endDate" type="date" InputLabelProps={{ shrink: true }} onChange={handleChange} />
      </Box>

      <Button variant="contained" type="submit" size="large">Search</Button>
    </Box>
  );
}

export default SearchForm;
