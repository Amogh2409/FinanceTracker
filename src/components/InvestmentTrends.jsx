import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { month: "Jan", investment: 5000 },
  { month: "Feb", investment: 7000 },
  { month: "Mar", investment: 12000 },
  { month: "Apr", investment: 15000 },
  { month: "May", investment: 17000 },
  { month: "Jun", investment: 20000 },
];

const InvestmentTrends = () => {
  return (
    <section className="py-16 bg-gray-900 text-white rounded-xl shadow-lg p-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Investment <span className="text-yellow-400">Growth Trends</span></h2>
        <p className="text-lg text-gray-300">Track your portfolio's performance over time with AI-driven insights.</p>
      </div>

      <div className="mt-8 max-w-4xl mx-auto bg-gray-800 p-6 rounded-xl shadow-md">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#555" />
            <XAxis dataKey="month" stroke="#ddd" />
            <YAxis stroke="#ddd" />
            <Tooltip contentStyle={{ backgroundColor: "#222", borderRadius: "8px" }} />
            <Line type="monotone" dataKey="investment" stroke="#facc15" strokeWidth={3} dot={{ fill: "#facc15", r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default InvestmentTrends;
