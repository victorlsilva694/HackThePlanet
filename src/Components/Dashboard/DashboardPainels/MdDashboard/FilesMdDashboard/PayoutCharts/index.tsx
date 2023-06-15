import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function PayoutCharts() {
  const data = [
    { name: "Janeiro", amt: 90000, prevAmt: 10000 },
    { name: "Fevereiro", amt: 95000, prevAmt: 10000 },
    { name: "Março", amt: 67300, prevAmt: 10000 },
    { name: "Abril", amt: 70000, prevAmt: 10000 },
    { name: "Maio", amt: 17856, prevAmt: 10000 },
    { name: "Junho", amt: 70000, prevAmt: 17856 },
    { name: "Julho", amt: 70000, prevAmt: 10000 },
    { name: "Agosto", amt: 87300, prevAmt: 10000 },
    { name: "Setembro", amt: 77300, prevAmt: 10000 },
    { name: "Outubro", amt: 99300, prevAmt: 10000 },
    { name: "Novembro", amt: 68300, prevAmt: 10000 },
    { name: "Dezembro", amt: 63300, prevAmt: 10000 },
  ];

  return (
    <div style={{ margin: "1rem" }}>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis
            tickFormatter={(value) =>
              new Intl.NumberFormat("pt-BR").format(value)
            }
          />
          <Bar
            radius={[3, 3, 0, 0]}
            dataKey="prevAmt"
            fill="#0e52b1"
            name="Mês Anterior"
          />
          <Bar
            radius={[3, 3, 0, 0]}
            dataKey="amt"
            fill="#1a148f"
            name="Próximo Mês"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PayoutCharts;
