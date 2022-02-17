
import { useState, useEffect } from "react"
import { Tooltip, ResponsiveContainer, PieChart, Pie } from 'recharts';
import DatePicker from "react-datepicker";
import SearchForm from "../../components/SearchForm"
import {fetchStatsByCountry} from '../../services/api'

import "react-datepicker/dist/react-datepicker.css";

export default function CountriesView(){
  const [country, setCountry] = useState('')
  const [endDate, setEndDate] = useState(new Date(Date.now()-86400000));
  const [dataArray, setDataArray] = useState([])

  const getCountryName = (query) => {
    setCountry(query)
  }

  useEffect(()=>{

    const asyncFetch = async ()=> {
      const result = await fetchStatsByCountry(country, endDate.toISOString())
      console.log('async', result)
      const newArray = []
      result.map(({Date, Confirmed, Province}) => {
        Date = Date.substring(0, 10)
        return newArray.push({ name: Province, Confirmed})
      })
      console.log(newArray)

      setDataArray(newArray)
    }
    asyncFetch()
    

  }, [country, endDate])



  return (
    <div style={{paddingLeft: '200px'}}>
      <h2>This is countries view</h2>
      <SearchForm getCountryName={getCountryName}/>
      <DatePicker 
        selected={endDate} 
        onChange={(date) => setEndDate(date)}
        dateFormat="yyyy-MM-d"
        maxDate={new Date(Date.now()-86400000)}
     />
     <ResponsiveContainer width="100%" height={500}>
        <PieChart width={500} height={500}>
          <Pie 
            dataKey="Confirmed"
            data={dataArray}
            cx="50%"
            cy="50%"
            outerRadius={180}
            fill="#2451B7"
            label
          />
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
    </div>
    
  )
}