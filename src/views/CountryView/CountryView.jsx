import { useState, useEffect } from "react";
import SearchForm from "components/SearchForm";
import DayPicker from "components/DayPicker";
import CountryHistogram from "components/CountryHistogram";
import { fetchStatsByCountry } from "services/api";
import { useLocalStorage } from "hooks/useLocalStorage";

export default function CountryView() {
  const [country, setCountry] = useLocalStorage("country", "Ukraine");
  const [fromDate, setFromDate] = useLocalStorage("fromDate", "");
  const [covidData, setCovidData] = useState([]);

  const getCountryName = (query) => {
    setCountry(query);
  };

  const getCountryFromDate = (query) => {
    setFromDate(query);
  };

  useEffect(() => {
    if (!country || !fromDate) {
      return;
    }

    const asyncFetch = async () => {
      const result = await fetchStatsByCountry(country, fromDate.toISOString());
      const convertedData = result.reduce(
        (acc, { Date, Confirmed, Deaths, Active }) => {
          Date = Date.substring(5, 10);
          const day = acc.find((el) => el.Date === Date);
          if (day) {
            day.Confirmed += Confirmed;
            day.Deaths += Deaths;
            day.Active += Active;
            return acc;
          }
          return [...acc, { Date, Confirmed, Deaths, Active }];
        },
        []
      );

      setCovidData(convertedData);
    };
    asyncFetch();
  }, [country, fromDate]);

  return (
    <div style={{ padding: "20px 100px 20px 200px" }}>
      <h2>This is countries view</h2>
      <SearchForm getCountryName={getCountryName} searchedCountry={country} />

      <DayPicker
        getDate={getCountryFromDate}
        currentDate={fromDate}
        title={"From"}
      />

      {covidData.length && <CountryHistogram data={covidData} />}
    </div>
  );
}
