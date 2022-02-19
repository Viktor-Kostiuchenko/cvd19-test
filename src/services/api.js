import axios from 'axios';
import { toast } from 'react-toastify';


export async function fetchTotalGlobalStats(from, to) {
  console.log(from)
  try {
    const {data} = await axios(`https://api.covid19api.com/world?from=${from}&to=${to}`);
    return data;
  } catch (error) {
    toast.warning('Something went wrong');
  }
}

export async function fetchStatsByCountry(country, from) {
  console.log(from)
  try {
    const {data} = await axios(`https://api.covid19api.com/live/country/${country}/status/confirmed/date/${from}`);
    return data;
  } catch (error) {
    toast.warning('Something went wrong');
  }
}
