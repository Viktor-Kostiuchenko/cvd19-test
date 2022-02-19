import { useState } from "react";
import { toast } from 'react-toastify';
import { Button, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";

interface IFormProps {
  getCountryName(country: string): void,
  searchedCountry: string,
}

export default function CountrySearcher({ getCountryName, searchedCountry }: IFormProps) {
  const [country, setCountry] = useState(searchedCountry);

  const searchByCountry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!country) {
      toast.warning('Country is not chosen');
    }
    getCountryName(country);
  };

  return (
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
            '& .MuiInputLabel-root': {
              color: '#ffffff',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#ffffff',
              },
              '&:hover fieldset': {
                borderColor: '#1976d2',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1976d2',
              },
            },
          }}
        />
        <Button
          variant="outlined"
          type="submit"
          endIcon={<Search />}
          sx={{
            height: "56px",
          }}
        >
          Search info
        </Button>
      </form>
  );
}
