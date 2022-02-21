import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from './DayPicker.module.scss'

interface IPickerProps {
  getDate(date: Date | null): void,
  currentDate: Date,
  title: string
}

export default function DayPicker({ getDate, currentDate, title }: IPickerProps) {
  return (
    <div className={s.dataPickerWrapper}>
      <p className={s.dataPickerTitle}>{title}</p>
      <DatePicker
        selected={currentDate}
        onChange={(date) => getDate(date)}
        dateFormat="yyyy-MM-dd"
        maxDate={new Date(Date.now()-86400000)}
        className={s.datePicker}
      />
    </div>
  );
}
