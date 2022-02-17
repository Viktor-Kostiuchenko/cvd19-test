import React, { useEffect, useState } from 'react';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import DatePicker from "react-datepicker";
import {fetchTotalGlobalStats} from '../../services/api'
// import { useLocalStorage } from '../../hooks/useLocalStorage.js';

import "react-datepicker/dist/react-datepicker.css";

// const initialState = {
//   startDate: new Date(Date.now()-86400000),
//   endDate: new Date(Date.now()-86400000),
//   dataArray:[]
// }
export default function GlobalView() {
  const [startDate, setStartDate] = useState(new Date(Date.now()-86400000));
  const [endDate, setEndDate] = useState(new Date(Date.now()-86400000));
  const [dataArray, setDataArray] = useState([])

  useEffect(()=>{

    const asyncFetch = async ()=> {
      const result = await fetchTotalGlobalStats(startDate.toISOString(), endDate.toISOString())

      const newArray = []
      result.map(({Date, NewConfirmed}) => {
        Date = Date.substring(0, 10)
        return newArray.push({Date, NewConfirmed})
      })
      setDataArray(newArray)
    }
    asyncFetch()
    

  }, [startDate, endDate])
  
  console.log('data array', dataArray)
  return (
    <div style={{paddingLeft: '200px'}}>
      <h2>Global Statistics</h2>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '30px', width: '400px'}}>
        <div >
          <h3>From</h3>
          <DatePicker 
          selected={startDate} 
          onChange={(date) => setStartDate(date)} 
          dateFormat="yyyy-MM-d"
          maxDate={new Date(Date.now()-86400000)}
         />
        </div>
       <div >
       <h3>To</h3>
         <DatePicker 
          selected={endDate} 
          onChange={(date) => setEndDate(date)}
          dateFormat="yyyy-MM-d"
          maxDate={new Date(Date.now()-86400000)}
         />
       </div>
      </div>
     {startDate && <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={dataArray} >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4}/>
              <stop offset="90%" stopColor="#2451B7" stopOpacity={0.05}/>
            </linearGradient>
          </defs>
          <Area dataKey="NewConfirmed"stroke="#2451B7" fill="url(#color)"/>
          <XAxis dataKey="Date"/>
          <YAxis dataKey="NewConfirmed"/>
          <Tooltip/>
        </AreaChart>
      </ResponsiveContainer>}
    </div>
  );
}