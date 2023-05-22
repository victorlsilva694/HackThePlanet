import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";

function PayoutCharts() {
  const data = [
    { name: "Janeiro", amt: '90000' },
    { name: "Fevereiro", amt: '1' },
    { name: "Março", amt: 1 },
    { name: "Abril", amt: 1 },
    { name: "Maio", amt: 1 },
  ];

  return (
    <div style={{ margin: '1rem' }}>
      <LineChart width={600} height={230} data={...data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#cccccc" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="amt" stroke="#747474" />
      </LineChart>
    </div>
  );
}

export default PayoutCharts;
