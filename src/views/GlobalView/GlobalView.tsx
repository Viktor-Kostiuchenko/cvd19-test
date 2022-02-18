import React, { useEffect, useState } from 'react';
import DayPicker from '../../components/DayPicker';
import GlobalDiagram from '../../components/GlobalDiagram';
import Section from '../../components/Section';
import { fetchTotalGlobalStats } from '../../services/api';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface ISortedResProps {
  Date: string,
  NewConfirmed: number
}

export default function GlobalView() {
  const [startDate, setStartDate] = useLocalStorage('startDate', '');
  const [endDate, setEndDate] = useLocalStorage('endDate', '');
  const [covidData, setCovidData] = useState([]);

  console.log('before async', startDate)
  // console.log(endDate)

  const getStartDate = (query: Date) => {
    setStartDate(query);
  };

  const getEndDate = (query: Date) => {
    setEndDate(query);
  };

  useEffect(() => {
    if (!startDate || !endDate) {
      return;
    }

    const asyncFetch = async () => {
      // const formatedStartDate = startDate.toString().substring(5);
      // const formatedEndDate = endDate.toString().substring(5, 10);
      // console.log(formatedStartDate);

      const result = await fetchTotalGlobalStats(startDate.toISOString(), endDate.toISOString());

      // console.log(result)

      if (result.length === 0) {
        alert('No results');
        return;
      }

      const sortedResult = result
        .map(({ Date, NewConfirmed }: ISortedResProps) => {
          Date = Date.substring(5, 10);
          return { Date, NewConfirmed };
        })
        .sort((a: { Date: string }, b: { Date: string }) => {
          if (a.Date > b.Date) {
            return 1;
          }
          if (a.Date < b.Date) {
            return -1;
          }
          return 0;
        });

      // console.log(sortedResult);

      setCovidData(sortedResult);
    };
    asyncFetch();
  }, [startDate, endDate]);

  return (
    <Section title="Global statistics">
      <div className="datePickerBox">
        <DayPicker getDate={getStartDate} currentDate={startDate} title={'From'} />
        <DayPicker getDate={getEndDate} currentDate={endDate} title={'To'} />
      </div>
      {startDate && <GlobalDiagram data={covidData} />}
    </Section>
  );
}
