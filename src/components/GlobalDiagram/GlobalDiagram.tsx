import {
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

type Option = {
  Date: string, 
  NewConfirmed: number, 

}
interface IDiagramProps {
  data: Option[]
}

export default function GlobalDiagram({ data } : IDiagramProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="90%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area dataKey="NewConfirmed" stroke="#2451B7" fill="url(#color)" />
        <XAxis dataKey="Date" />
        <YAxis dataKey="NewConfirmed" />
        <Tooltip />
        <Legend />
      </AreaChart>
    </ResponsiveContainer>
  );
}
