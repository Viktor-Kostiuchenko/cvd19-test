
import axios from 'axios';

// axios.defaults.baseURL = 'https://api.covid19api.com/';


export async function fetchTotalGlobalStats(from, to) {
  try {
    const {data} = await axios(`https://api.covid19api.com/world?from=${from}&to=${to}`);
    return data;
  } catch (error) {
    console.log(error)

  }
}


// https://api.covid19api.com/live/country/south-africa/status/confirmed/date/2020-03-21T13:13:30Z

export async function fetchStatsByCountry(country, from) {
  try {
    const {data} = await axios(`https://api.covid19api.com/live/country/${country}/status/confirmed/date/${from}`);
    
    // console.log(data)
    return data;
  } catch (error) {
    console.log(error)

  }
}
