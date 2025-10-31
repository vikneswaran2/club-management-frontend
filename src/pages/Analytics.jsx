import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from "recharts";

export default function Analytics() {
  const data = [
    { event: "Orientation", attendance: 50 },
    { event: "Tree Planting", attendance: 35 },
    { event: "Workshop", attendance: 60 },
  ];

  const volunteers = [
    { name: "Admin", tasks: 3 },
    { name: "Coord", tasks: 4 },
    { name: "Member", tasks: 2 },
  ];

  return (
    <div className="container">
      <h2>📊 Analytics Dashboard</h2>

      <h3>Event Attendance</h3>
      <BarChart width={500} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="event" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="attendance" fill="#0078ff" />
      </BarChart>

      <h3>Volunteer Activity</h3>
      <LineChart width={500} height={250} data={volunteers}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="tasks" stroke="#00c6ff" />
      </LineChart>
    </div>
  );
}
