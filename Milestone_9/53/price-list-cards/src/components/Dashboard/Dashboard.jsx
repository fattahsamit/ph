import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const marksArray = [
    { id: 1, name: "John", physics: 87, chemistry: 65, math: 92 },
    { id: 2, name: "Mary", physics: 76, chemistry: 88, math: 45 },
    { id: 3, name: "Bob", physics: 91, chemistry: 72, math: 84 },
    { id: 4, name: "Sarah", physics: 63, chemistry: 55, math: 77 },
    { id: 5, name: "Alice", physics: 78, chemistry: 92, math: 80 },
    { id: 6, name: "Tom", physics: 55, chemistry: 89, math: 70 },
    { id: 7, name: "Jane", physics: 80, chemistry: 73, math: 95 },
    { id: 8, name: "Jack", physics: 67, chemistry: 90, math: 62 },
    { id: 9, name: "Sara", physics: 82, chemistry: 75, math: 87 },
    { id: 10, name: "Tim", physics: 75, chemistry: 60, math: 81 },
    { id: 11, name: "Chris", physics: 90, chemistry: 81, math: 73 },
    { id: 12, name: "Alex", physics: 68, chemistry: 72, math: 95 },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={marksArray}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip />
        <Legend />
        <Line dataKey="physics" stroke="#8884d8"></Line>
        <Line dataKey="chemistry" stroke="#00FF00"></Line>
        <Line dataKey="math" stroke="#FF0000"></Line>
      </LineChart>
    </div>
  );
};

export default Dashboard;
