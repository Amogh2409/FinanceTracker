import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Investments from "./pages/Investments";
import Budgeting from "./pages/Budgeting";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import "./styles/tailwind.css";

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

function AnimatedRoutes() {
  const location = useLocation(); // Ensure location is correctly used

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div {...pageVariants}><Landing /></motion.div>} />
        <Route path="/dashboard" element={<motion.div {...pageVariants}><Dashboard /></motion.div>} />
        <Route path="/investments" element={<motion.div {...pageVariants}><Investments /></motion.div>} />
        <Route path="/budgeting" element={<motion.div {...pageVariants}><Budgeting /></motion.div>} />
        <Route path="/profile" element={<motion.div {...pageVariants}><Profile /></motion.div>} />
        <Route path="/login" element={<motion.div {...pageVariants}><Login /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
