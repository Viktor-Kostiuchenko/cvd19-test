import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import 'react-day-picker/lib/style.css';

export default function DayPicker({ getDate, currentDate, title }) {
  return (
    <>
      <h3>{title}</h3>
      <DatePicker
        selected={currentDate}
        onChange={(date) => getDate(date)}
        dateFormat="yyyy-MM-d"
        maxDate={new Date(Date.now())}
      />
    </>
  );
}
