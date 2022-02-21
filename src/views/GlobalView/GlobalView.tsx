import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DayPicker from '../../components/DayPicker';
import GlobalDiagram from '../../components/GlobalDiagram';
import Section from '../../components/Section';
import { fetchTotalGlobalStats } from '../../services/api';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import formateDate from '../../helpers/formateDate';
import s from './GlobalView.module.scss';

interface ISortedResProps {
  Date: Date | string;
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
      const [correctedStartDate, correctedEndDate] = formateDate(
        startDate,
        endDate,
      );

      const result = await fetchTotalGlobalStats(
        correctedStartDate,
        correctedEndDate,
      );

      const sortedResult = result
        .sort((a: { Date: Date }, b: { Date: Date }) => {
          if (a.Date > b.Date) {
            return 1;
          }
          if (a.Date < b.Date) {
            return -1;
          }
          return 0;
        })
        .map(({ Date, NewConfirmed }: ISortedResProps) => {
          Date = Date.toString().substring(5, 10).replace('-', '/');
          return { Date, NewConfirmed };
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
