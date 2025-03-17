import React, { useState, useEffect } from "react";
import { FiBell, FiXCircle } from "react-icons/fi";

const SmartAlerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, message: "Apple stock is up by 5% today!", type: "success" },
    { id: 2, message: "Your monthly budget limit is nearing.", type: "warning" },
    { id: 3, message: "New investment opportunity in Tech sector.", type: "info" },
  ]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Simulate fetching live alerts
    const interval = setInterval(() => {
      const newAlert = {
        id: alerts.length + 1,
        message: "Bitcoin just crossed $50,000!",
        type: "success",
      };
      setAlerts((prevAlerts) => [...prevAlerts, newAlert].slice(-5)); // Keep max 5 alerts
    }, 15000); // Adds a new alert every 15s

    return () => clearInterval(interval);
  }, [alerts]);

  const removeAlert = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
          <FiBell className="mr-2" /> Smart Alerts
        </h2>
      </div>
      <div className="space-y-4">
        {(showAll ? alerts : alerts.slice(0, 5)).map((alert) => (
          <div
            key={alert.id}
            className={`p-4 flex justify-between items-center rounded-md shadow-md 
              ${alert.type === "success" ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" : ""}
              ${alert.type === "warning" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300" : ""}
              ${alert.type === "info" ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" : ""}
            `}
          >
            <span>{alert.message}</span>
            <button onClick={() => removeAlert(alert.id)}>
              <FiXCircle className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white" />
            </button>
          </div>
        ))}
      </div>
      {alerts.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      )}
    </div>
  );
};

export default SmartAlerts;