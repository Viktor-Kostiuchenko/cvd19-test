import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import CountrySearcher from '../../components/CountrySearcher';
import DayPicker from '../../components/DayPicker';
import CountryHistogram from '../../components/CountryHistogram';
import Section from '../../components/Section';
import { fetchStatsByCountry } from '../../services/api';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import s from './CountryView.module.scss'

interface ConvertedResProps {
  Date: string;
  Confirmed: number;
  Deaths: number;
  Active: number;
}

export default function CountryView() {
  const [country, setCountry] = useLocalStorage('country', 'Ukraine');
  const [fromDate, setFromDate] = useLocalStorage('fromDate', '');
  const [covidData, setCovidData] = useState([]);

  const getCountryName = (query: string) => {
    setCountry(query);
  };

  const getCountryFromDate = (query: Date) => {
    setFromDate(query);
  };

  useEffect(() => {
    if (!country || !fromDate) {
      return;
    }

    const asyncFetch = async () => {
      const result = await fetchStatsByCountry(country, fromDate.toISOString());

      if (result.length === 0) {
        toast.warning('Country name is wrong');
        return;
      }

      const convertedData = result.reduce(
        (
          acc: any[],
          { Date, Confirmed, Deaths, Active }: ConvertedResProps,
        ) => {
          Date = Date.substring(5, 10);
          const day = acc.find((el: { Date: string }) => el.Date === Date);
          if (day) {
            day.Confirmed += Confirmed;
            day.Deaths += Deaths;
            day.Active += Active;
            return acc;
          }
          return [...acc, { Date, Confirmed, Deaths, Active }];
        },
        [],
      );

      setCovidData(convertedData);
    };
    asyncFetch();
  }, [country, fromDate]);

  return (
    <Section title={`${country} statistics`} background="global">
      <div className={s.searcherBox}>
        <DayPicker
          getDate={getCountryFromDate}
          currentDate={fromDate}
          title={'From'}
        />
        <CountrySearcher
          getCountryName={getCountryName}
          searchedCountry={country}
        />
      </div>

      {covidData.length !== 0 && <CountryHistogram data={covidData} />}
    </Section>
  );
}
