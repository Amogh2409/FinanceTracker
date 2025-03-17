import React, { useEffect, useState } from "react";
import { FiTrendingUp, FiDollarSign, FiClock } from "react-icons/fi";
import axios from "axios";

const FinanceWidgets = () => {
  const [stockPrice, setStockPrice] = useState(null);
  const [accountBalance, setAccountBalance] = useState(45230);
  const [monthlyProfit, setMonthlyProfit] = useState(1200);

  useEffect(() => {
    axios
      .get("https://api.example.com/stock?symbol=AAPL") // Replace with a real API
      .then((res) => setStockPrice(res.data.price))
      .catch((err) => console.error("Error fetching stock price:", err));
  }, []);

  const widgets = [
    {
      title: "Live Stock Price",
      value: stockPrice ? `$${stockPrice}` : "Loading...",
      icon: <FiTrendingUp className="text-5xl text-green-500" />, 
    },
    {
      title: "Account Balance",
      value: `$${accountBalance.toLocaleString()}`,
      icon: <FiDollarSign className="text-5xl text-yellow-500" />, 
    },
    {
      title: "Monthly Profit/Loss",
      value: `$${monthlyProfit}`,
      icon: <FiClock className="text-5xl text-blue-500" />, 
    },
  ];

  return (
    <section className="py-8 w-full">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6">
        {widgets.map((widget, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 text-white rounded-xl shadow-lg border border-gray-700 flex flex-col items-center justify-center w-full h-48 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="mb-3 flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full">{widget.icon}</div>
            <h3 className="text-lg font-semibold text-gray-300 mt-2">{widget.title}</h3>
            <p className="text-2xl font-bold text-yellow-400 mt-1">{widget.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinanceWidgets;
