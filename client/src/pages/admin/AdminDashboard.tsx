import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import axiosInstance from "../../utils/admin/axiosInstance";

// Mock data for users
const userData = [
  { name: "Total Users", value: 1000 },
  { name: "Instructors", value: 200 },
  { name: "Students", value: 700 },
  { name: "Blocked Users", value: 100 },
];

// Colors for the pie chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    instructors: 0,
    students: 0,
    blockedUsers: 0,
  });
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<"all" | "instructors" | "students" | "blocked">("all");



// Fetch users function
    const fetchDashboard = async () => {
        try {
          const response = await axiosInstance.get('/admin/dashboard/stats'); 
          console.log("response stats:-", response.data.users);
          setStats(response.data.dashboard); 
          setLoading(false);
        } catch (error) {
          console.error("Error fetching dashboard stats:", error);
          setLoading(false);
        }
    };
    useEffect(() => {
        fetchDashboard();
    }, []);

  // Filter data based on the selected filter
  const userData = [
    { name: "Total Users", value: stats.totalUsers },
    { name: "Instructors", value: stats.instructors },
    { name: "Students", value: stats.students },
    { name: "Blocked Users", value: stats.blockedUsers },
  ];

  const filteredData = userData.filter((item) => {
    if (activeFilter === "all") return true;
    return item.name.toLowerCase().includes(activeFilter);
  });

  if (loading) return <div className="text-center text-xl font-semibold mt-10">Loading...</div>;


  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-8">User Management Dashboard</h1>

      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-4 py-2 rounded ${
            activeFilter === "all" ? "bg-blue-500 text-white" : "bg-white text-blue-500"
          }`}
        >
          All Users
        </button>
        <button
          onClick={() => setActiveFilter("instructors")}
          className={`px-4 py-2 rounded ${
            activeFilter === "instructors" ? "bg-blue-500 text-white" : "bg-white text-blue-500"
          }`}
        >
          Instructors
        </button>
        <button
          onClick={() => setActiveFilter("students")}
          className={`px-4 py-2 rounded ${
            activeFilter === "students" ? "bg-blue-500 text-white" : "bg-white text-blue-500"
          }`}
        >
          Students
        </button>
        <button
          onClick={() => setActiveFilter("blocked")}
          className={`px-4 py-2 rounded ${
            activeFilter === "blocked" ? "bg-blue-500 text-white" : "bg-white text-blue-500"
          }`}
        >
          Blocked Users
        </button>
      </div>

      {/* Pie Chart */}
      <div className=" bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">User Distribution</h2>
        <PieChart  width={500} height={400}>
          <Pie
            data={filteredData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(2)}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {filteredData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">User Counts</h2>
        <BarChart width={500} height={300} data={filteredData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default AdminDashboard;
