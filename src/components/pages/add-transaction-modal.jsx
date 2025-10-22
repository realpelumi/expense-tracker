"use client"

import { useState } from "react"

export default function AddTransactionModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    category: "Food & Dining",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    type: "expense",
  })

  const categories = ["Food & Dining", "Transportation", "Entertainment", "Utilities", "Shopping", "Salary"]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.amount) {
      onAdd({
        ...formData,
        amount: Number.parseFloat(formData.amount),
      })
      setFormData({
        category: "Food & Dining",
        amount: "",
        date: new Date().toISOString().split("T")[0],
        type: "expense",
      })
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
      <div className="bg-card rounded-xl p-4 sm:p-6 md:p-8 max-w-md w-full border border-border shadow-lg max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Add Transaction</h2>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Type</label>
            <div className="flex gap-3 sm:gap-4">
              {["expense", "income"].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    checked={formData.type === type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-4 h-4"
                  />
                  <span className="text-xs sm:text-sm text-foreground capitalize">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Amount</label>
            <input
              type="number"
              step="0.01"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              placeholder="0.00"
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors text-sm font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
