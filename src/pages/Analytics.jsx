import React from "react";

export default function Analytics() {
  // You can fetch these arrays from backend or QuickSight integration later
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

  // For full integration, fetch from API and replace these samples

  return (
    <div className="container">
      <h2>📊 Analytics Dashboard</h2>

      <h3>Event Attendance</h3>
      {/* Your Recharts BarChart with data */}

      <h3>Volunteer Activity</h3>
      {/* Your Recharts LineChart with volunteers data */}
    </div>
  );
}
