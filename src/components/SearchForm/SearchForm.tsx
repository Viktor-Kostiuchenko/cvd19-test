import { useState } from "react";
import { Button, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";

interface Props {
  getCountryName(country: string): void,
  searchedCountry: string,
}

export default function SearchForm({ getCountryName, searchedCountry }: Props) {
  const [country, setCountry] = useState(searchedCountry);

  const searchByCountry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getCountryName(country);
  };

  return (
    <>
      <form onSubmit={searchByCountry} autoComplete="off">

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
            color: "#ffffff",
            '& .MuiOutlinedInput-input': {
              color: '#ffffff',
              
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ffffff',
            },
            '&:hover': {
              borderColor: '#red',
            },
            '& .MuiInputLabel-root': {
              color: '#ffffff',
            },
            '& .MuiInputBase-root': {
              height: '40px'
            },
            

            // MuiInputBase-root-MuiOutlinedInput-root

          }}
        />
        <Button
          variant="outlined"
          type="submit"
          endIcon={<Search />}
          sx={{
            height: "40px",
          }}
        >
          Search info
        </Button>
      </form>
    </>
  );
}
