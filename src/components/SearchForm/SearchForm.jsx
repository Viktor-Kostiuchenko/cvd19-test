import { useEffect, useState } from 'react';
import {Button, TextField, Box} from '@mui/material';
import Search from '@mui/icons-material/Search'
import s from './SearchForm.module.css'

export default function SearchForm({getCountryName}) {
  const [country, setCountry] = useState('')
  

  const searchByCountry = (e) => {
    e.preventDefault()
    getCountryName(country)
  }

  
  return (
    <>
    <Box
      component="form"
      sx={{
        marginBottom: '10px',
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
          placeholder='Enter country'
          onChange={e => setCountry(e.target.value)}
          sx={{
            marginRight: '10px',
            color: '#ffffff'
          }}
        />
      <Button 
        variant="outlined" 
        type="submit" 
        onClick={searchByCountry}
        endIcon={<Search />}
        sx={{
          height: '56px',
        }}
      >
        Search info
      </Button>
    </Box>
    </>
  )
}