import { Legend, Tooltip, BarChart, Bar, YAxis, XAxis } from "recharts";

type Option = {
  Date: string, 
  Confirmed: number, 
  Deaths: number, 
  Active: number
}
interface IHistogramProps {
  data: Option[]
}

export default function CountryHistogram({ data }: IHistogramProps ) {
  return (
    <BarChart width={800} height={400} data={data}>
      <XAxis dataKey="Date" />
      <YAxis />
      <Bar dataKey="Confirmed" stackId="a" barSize={30} fill="#2451B7" />
      <Bar dataKey="Active" stackId="a" barSize={30} fill="#0991B7" />
      <Bar dataKey="Deaths" stackId="a" barSize={30} fill="#5451B7" />
      <Tooltip />
      <Legend />
    </BarChart>
  );
}
