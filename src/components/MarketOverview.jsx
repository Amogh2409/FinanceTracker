import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const MarketOverview = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMarketData();
  }, []);

  const fetchMarketData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/stocks"); // Dummy API for stocks
      setMarketData(response.data.stocks.slice(0, 6)); // Limiting to 6 stocks
    } catch (error) {
      console.error("Error fetching market data:", error);
      setMarketData([
        { name: "Apple", symbol: "AAPL", price: 150.25, change: 1.2 },
        { name: "Google", symbol: "GOOGL", price: 2805.67, change: -0.8 },
        { name: "Amazon", symbol: "AMZN", price: 3452.12, change: 0.5 },
        { name: "Tesla", symbol: "TSLA", price: 890.76, change: -1.3 },
        { name: "Microsoft", symbol: "MSFT", price: 299.36, change: 0.9 },
        { name: "Meta", symbol: "META", price: 375.22, change: -0.4 },
      ]); // Fallback static data
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-6 bg-gray-900 text-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold mb-4">📈 Market Overview</h2>
      {loading ? (
        <p className="text-gray-400">Loading market data...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketData.map((stock, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 rounded-lg shadow-md flex justify-between items-center border border-gray-700"
            >
              <div>
                <h3 className="text-lg font-semibold">{stock.name}</h3>
                <p className="text-gray-400">{stock.symbol}</p>
              </div>
              <div className="text-right">
                <p
                  className={`text-xl font-bold ${
                    stock.change > 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  ${stock.price.toFixed(2)}
                </p>
                <p className="flex items-center gap-1">
                  {stock.change > 0 ? (
                    <FiTrendingUp className="text-green-400" />
                  ) : (
                    <FiTrendingDown className="text-red-400" />
                  )}
                  {stock.change.toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MarketOverview;
