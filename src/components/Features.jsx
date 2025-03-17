import React from "react";
import { motion } from "framer-motion";
import { AiOutlineBarChart, AiOutlineFundProjectionScreen, AiOutlineSafetyCertificate } from "react-icons/ai";

const features = [
  {
    title: "Smart Investment Tracking",
    description: "Monitor your assets with real-time AI insights and maximize your portfolio growth.",
    icon: <AiOutlineBarChart className="text-4xl text-yellow-400" />,
  },
  {
    title: "Automated Budgeting",
    description: "Set budgets, track expenses, and receive AI-driven spending suggestions.",
    icon: <AiOutlineFundProjectionScreen className="text-4xl text-green-400" />,
  },
  {
    title: "Bank-Level Security",
    description: "Your financial data is protected with the highest-grade encryption and authentication.",
    icon: <AiOutlineSafetyCertificate className="text-4xl text-blue-400" />,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold">Why Choose <span className="text-yellow-400">AI Finance?</span></h2>
        <p className="mt-4 text-gray-300">Advanced AI-powered features to make your finance tracking seamless and efficient.</p>
      </div>

      <div className="mt-12 grid grid-cols-3 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-8 bg-gray-800 rounded-2xl text-center shadow-lg border border-gray-700"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
