import { Legend, Tooltip, BarChart, Bar, YAxis, XAxis } from "recharts";

export default function CountryHistogram({ data }) {
  return (
    <BarChart width={800} height={500} data={data}>
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
