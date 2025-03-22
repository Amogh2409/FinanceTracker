import React, { useState } from "react";
import { FiPlus, FiTrash2, FiFilter } from "react-icons/fi";

const categories = ["Food", "Transport", "Shopping", "Bills", "Entertainment", "Other"];

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("All");

  const addExpense = () => {
    if (!amount || !description) return;
    const newExpense = { id: Date.now(), amount: parseFloat(amount), category, description };
    setExpenses([newExpense, ...expenses]);
    setAmount("");
    setDescription("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = filter === "All" ? expenses : expenses.filter((e) => e.category === filter);
  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-yellow-400">Expense Tracker</h2>
      
      {/* Expense Input */}
      <div className="flex sm:flex-col md:flex-row gap-3 mb-6">
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="p-2 rounded bg-gray-800 text-white md:w-1/3" />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 rounded bg-gray-800 md:w-1/3 text-white ">
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="p-2 rounded bg-gray-800 md:w-1/3 text-white " />
        <button onClick={addExpense} className="p-2 flex justify-center  bg-green-500 rounded hover:bg-green-400"><FiPlus size={20} /></button>
      </div>
      
      {/* Filter */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg">Total: <span className="text-yellow-400">${totalExpense.toFixed(2)}</span></span>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="p-2 rounded bg-gray-800 text-white">
          <option>All</option>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>
      
      {/* Expense List */}
      <div className="space-y-2 max-h-60 overflow-y-auto">
        {filteredExpenses.map((expense) => (
          <div key={expense.id} className="flex justify-between items-center bg-gray-800 p-3 rounded">
            <span>{expense.description} - <span className="text-yellow-400">${expense.amount.toFixed(2)}</span></span>
            <div className="flex gap-3 items-center">
              <span className="text-gray-400 text-sm">{expense.category}</span>
              <button onClick={() => deleteExpense(expense.id)} className="text-red-500 hover:text-red-400">
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>
        ))}
        {filteredExpenses.length === 0 && <p className="text-gray-400">No expenses found.</p>}
      </div>
    </div>
  );
};

export default ExpenseTracker;
