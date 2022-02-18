import axios from 'axios';

export async function fetchTotalGlobalStats(from, to) {
  try {
    const {data} = await axios(`https://api.covid19api.com/world?from=${from}&to=${to}`);
    return data;
  } catch (error) {
    console.log(error)
  }
}

export async function fetchStatsByCountry(country, from) {
  try {
    const {data} = await axios(`https://api.covid19api.com/live/country/${country}/status/confirmed/date/${from}`);
    return data;
  } catch (error) {
    console.log(error)
  }
}
