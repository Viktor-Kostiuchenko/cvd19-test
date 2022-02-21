import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DayPicker from '../../components/DayPicker';
import GlobalDiagram from '../../components/GlobalDiagram';
import Section from '../../components/Section';
import { fetchTotalGlobalStats } from '../../services/api';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import formateDate from '../../helpers/formateDate';
import s from './GlobalView.module.scss'

interface ISortedResProps {
  Date: string;
  NewConfirmed: number;
}

export default function GlobalView() {
  const [startDate, setStartDate] = useLocalStorage('startDate', '');
  const [endDate, setEndDate] = useLocalStorage('endDate', '');
  const [covidData, setCovidData] = useState([]);

  const getStartDate = (query: Date) => {
    setStartDate(query);
  };

  const getEndDate = (query: Date) => {
    setEndDate(query);
  };

  useEffect(() => {
    if (!startDate || !endDate) {
      return;
    } else if (startDate >= endDate) {
      toast.warning('Date "from" should be earlier than Date "to"');
      return;
    }

    const asyncFetch = async () => {
      const [correctedStartDate, correctedEndDate] = formateDate(startDate, endDate)

      const result = await fetchTotalGlobalStats(
        correctedStartDate,
        correctedEndDate,
      );

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

      setCovidData(sortedResult);
    };
    asyncFetch();
  }, [startDate, endDate]);

  return (
    <Section title="Global statistics" background="global">
      <div className={s.datePickerBox}>
        <DayPicker
          getDate={getStartDate}
          currentDate={startDate}
          title={'From'}
        />
        <DayPicker getDate={getEndDate} currentDate={endDate} title={'To'} />
      </div>
      {startDate && <GlobalDiagram data={covidData} />}
    </Section>
  );
}
