import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiPieChart, FiShield } from "react-icons/fi";

const aiFeatures = [
  {
    title: "Smart Expense Predictions",
    description: "Our AI analyzes your spending habits and predicts upcoming expenses.",
    icon: <FiTrendingUp className="text-5xl text-blue-400" />,
    stat: "+23% Accuracy",
  },
  {
    title: "Portfolio Optimization",
    description: "Get AI-powered asset allocation insights to maximize your ROI.",
    icon: <FiPieChart className="text-5xl text-green-400" />,
    stat: "7.5% Avg. Growth",
  },
  {
    title: "Bank-Level Security",
    description: "All transactions are encrypted using AES-256 for complete security.",
    icon: <FiShield className="text-5xl text-yellow-400" />,
    stat: "99.99% Protection",
  },
];

const AIInsights = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold">AI-Powered <span className="text-yellow-400">Finance Insights</span></h2>
        <p className="mt-4 text-gray-300 text-lg">Let AI help you make smarter financial decisions in real time.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {aiFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-8 bg-gray-800 rounded-xl text-center shadow-lg border border-gray-700 transform hover:scale-105 transition-all"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-gray-400">{feature.description}</p>
            <p className="mt-4 text-lg font-semibold text-yellow-400">{feature.stat}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AIInsights;
