import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { payloadType } from "../types";

export function CustomPieChart(
{ payload, totalCount }: {payload: payloadType[], totalCount: number}) {

  return (
  <ResponsiveContainer width="50%" height="100%">
    <PieChart>
      <Pie
        data={payload}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={100}
        fill="#8884d8"
        dataKey="data"
        paddingAngle={2}
      >
        {
          payload.map(
            (value, index) => (<Cell key={index} fill={value.color} />)
          )
        }
      </Pie>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={16}
        fill="#000000"
      >
        {`Total ${totalCount}`}
      </text>
    </PieChart>
  </ResponsiveContainer>
  );
}