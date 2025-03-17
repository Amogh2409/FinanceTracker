import React from "react";
import { FiTrendingUp, FiTrendingDown, FiBarChart } from "react-icons/fi";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Stocks", value: 50, color: "#4CAF50" },
  { name: "Bonds", value: 20, color: "#FF9800" },
  { name: "Crypto", value: 15, color: "#03A9F4" },
  { name: "Real Estate", value: 15, color: "#9C27B0" },
];

const PortfolioSummary = () => {
  return (
    <div className="p-6 bg-gray-800 text-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Portfolio Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg">
            <FiTrendingUp className="text-green-400 text-2xl" />
            <div>
              <p className="text-gray-300 text-sm">Total Portfolio Value</p>
              <h3 className="text-xl font-semibold">$120,500</h3>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg">
            <FiTrendingDown className="text-red-400 text-2xl" />
            <div>
              <p className="text-gray-300 text-sm">Daily Change</p>
              <h3 className="text-xl font-semibold">-2.3%</h3>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg">
            <FiBarChart className="text-yellow-400 text-2xl" />
            <div>
              <p className="text-gray-300 text-sm">Projected Growth</p>
              <h3 className="text-xl font-semibold">+8.5% (Yearly)</h3>
            </div>
          </div>
        </div>
        <div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;
