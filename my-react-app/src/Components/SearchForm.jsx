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
    <Box 
      component="form" 
      onSubmit={submit} 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2.5,
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        padding: '28px',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        border: '1px solid rgba(226, 232, 240, 0.8)'
      }}
    >
      <Typography 
        variant="h5" 
        sx={{ 
          fontWeight: 700, 
          color: '#1e293b',
          marginBottom: 1,
          background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
        Search Properties
      </Typography>
      
      {/*Property Type Widget*/}
      <FormControl fullWidth>
        <InputLabel sx={{ fontWeight: 500 }}>Property Type</InputLabel>
        <Select 
          name="type" 
          value={form.type} 
          label="Property Type" 
          onChange={handleChange}
          sx={{
            borderRadius: '10px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#e2e8f0'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2563eb'
            }
          }}
        >
          <MenuItem value="any">Any</MenuItem>
          <MenuItem value="House">🏠 House</MenuItem>
          <MenuItem value="Flat">🏢 Flat</MenuItem>
        </Select>
      </FormControl>

      {/* Price and Bedroom Widgets*/}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField 
          fullWidth 
          label="Min Price" 
          name="minPrice" 
          type="number" 
          onChange={handleChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              '& fieldset': { borderColor: '#e2e8f0' },
              '&:hover fieldset': { borderColor: '#2563eb' }
            }
          }}
        />
        <TextField 
          fullWidth 
          label="Max Price" 
          name="maxPrice" 
          type="number" 
          onChange={handleChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              '& fieldset': { borderColor: '#e2e8f0' },
              '&:hover fieldset': { borderColor: '#2563eb' }
            }
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField 
          fullWidth 
          label="Min Beds" 
          name="minBeds" 
          type="number" 
          inputProps={{ min: 1, max: 4 }} 
          onChange={handleChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              '& fieldset': { borderColor: '#e2e8f0' },
              '&:hover fieldset': { borderColor: '#2563eb' }
            }
          }}
        />
        <TextField 
          fullWidth 
          label="Max Beds" 
          name="maxBeds" 
          type="number" 
          inputProps={{ min: 2, max: 5 }} 
          onChange={handleChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              '& fieldset': { borderColor: '#e2e8f0' },
              '&:hover fieldset': { borderColor: '#2563eb' }
            }
          }}
        />
      </Box>

      {/* Postcode and Date Widgets */}
      <TextField 
        fullWidth 
        label="Postcode Area (e.g. BR1)" 
        name="postcode" 
        onChange={handleChange}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
            '& fieldset': { borderColor: '#e2e8f0' },
            '&:hover fieldset': { borderColor: '#2563eb' }
          }
        }}
      />

      <Box sx={{display: 'flex', gap: 2}}>
        <TextField 
          fullWidth 
          label="Date Added From" 
          name="startDate" 
          type="date" 
          InputLabelProps={{shrink: true}} 
          onChange={handleChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              '& fieldset': { borderColor: '#e2e8f0' },
              '&:hover fieldset': { borderColor: '#2563eb' }
            }
          }}
        />
      
        <TextField 
          fullWidth 
          label="Date Added To" 
          name="endDate" 
          type="date" 
          InputLabelProps={{ shrink: true }} 
          onChange={handleChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              '& fieldset': { borderColor: '#e2e8f0' },
              '&:hover fieldset': { borderColor: '#2563eb' }
            }
          }}
        />
      </Box>

      <Button 
        variant="contained" 
        type="submit" 
        size="large"
        sx={{
          marginTop: 1,
          background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
          borderRadius: '10px',
          padding: '12px',
          fontWeight: 600,
          fontSize: '1rem',
          textTransform: 'none',
          boxShadow: '0 6px 16px rgba(37, 99, 235, 0.35)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
            boxShadow: '0 8px 20px rgba(37, 99, 235, 0.45)',
            transform: 'translateY(-2px)'
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        Search Properties
      </Button>
    </Box>
  );
}

export default SearchForm;
