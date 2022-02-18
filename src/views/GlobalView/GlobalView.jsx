import React, { useEffect, useState } from "react";
import DayPicker from "components/DayPicker";
import GlobalDiagram from "components/GlobalDiagram";
import { fetchTotalGlobalStats } from "services/api";
import { useLocalStorage } from "hooks/useLocalStorage";


export default function GlobalView() {
  const [startDate, setStartDate] = useLocalStorage("startDate", "");
  const [endDate, setEndDate] = useLocalStorage("endDate", "");
  const [dataArray, setDataArray] = useState([]);

  const getStartDate = (query) => {
    setStartDate(query);
  };

  const getEndDate = (query) => {
    setEndDate(query);
  };

  useEffect(() => {
    if (!startDate || !endDate) {
      return;
    }

    const asyncFetch = async () => {
      const result = await fetchTotalGlobalStats(
        startDate.toISOString(),
        endDate.toISOString()
      );

      if (result.length === 0) {
        alert("No results");
        return;
      }
      const newArray = [];

      result.map(({ Date, NewConfirmed }) => {
        Date = Date.substring(5, 10);
        return newArray.push({ Date, NewConfirmed });
      });

      newArray.sort((a, b) => {
        if (a.Date > b.Date) {
          return 1;
        }
        if (a.Date < b.Date) {
          return -1;
        }
        return 0;
      });
      setDataArray(newArray);
    };
    asyncFetch();
  }, [startDate, endDate]);

  return (
    <div style={{ padding: "20px 100px 20px 200px" }}>
      <h2>Global Statistics</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
          width: "400px",
        }}
      >
        <DayPicker
          getDate={getStartDate}
          currentDate={startDate}
          title={"From"}
        />
        <DayPicker getDate={getEndDate} currentDate={endDate} title={"To"} />
      </div>
      {startDate && <GlobalDiagram data={dataArray} />}
    </div>
  );
}
