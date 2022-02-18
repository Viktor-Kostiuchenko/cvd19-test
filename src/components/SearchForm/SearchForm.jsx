import { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import Search from "@mui/icons-material/Search";

export default function SearchForm({ getCountryName, searchedCountry }) {
  const [country, setCountry] = useState(searchedCountry);

  const searchByCountry = (e) => {
    e.preventDefault();
    getCountryName(country);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          marginBottom: "10px",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Country"
          variant="outlined"
          value={country}
          type="text"
          placeholder="Enter country"
          onChange={(e) => setCountry(e.target.value)}
          sx={{
            marginRight: "10px",
            borderColor: "#ffffff",
          }}
        />
        <Button
          variant="outlined"
          type="submit"
          onClick={searchByCountry}
          endIcon={<Search />}
          sx={{
            height: "56px",
          }}
        >
          Search info
        </Button>
      </Box>
    </>
  );
}
