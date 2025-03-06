import React, { useState } from "react";
import FinanceWidgets from "../components/FinanceWidgets";
import InvestmentTrends from "../components/InvestmentTrends";
import ExpenseTracker from "../components/ExpenseTracker";
import MarketOverview from "../components/MarketOverview";
import SmartAlerts from "../components/SmartAlerts";
import PortfolioSummary from "../components/PortfolioSummary";

const Dashboard = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <div
      className={`min-h-screen pt-20 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} transition-all`}
    >
      <div className="container mx-auto py-12 px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">📊 Dashboard</h1>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Toggle Theme
          </button>
        </div>

        {/* Grid Layout for Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Finance Summary Widgets */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <FinanceWidgets />
          </div>

          {/* Market Overview */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <MarketOverview />
          </div>

          {/* Portfolio Summary */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <PortfolioSummary />
          </div>

          {/* Smart Alerts */}
          <div className="col-span-1 md:col-span-2">
            <SmartAlerts />
          </div>

          {/* Expense Tracker */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <ExpenseTracker />
          </div>
        </div>

        {/* Investment Trends (Full-width) */}
        <div className="mt-12">
          <InvestmentTrends />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
