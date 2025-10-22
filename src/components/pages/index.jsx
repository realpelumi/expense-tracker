"use client"

import { useState } from "react"
import BudgetOverview from "@/components/pages/budget-overview"
import SpendingCategories from "@/components/pages/spending-categories"
import RecentTransactions from "@/components/pages/recent-transactions"
import AddTransactionModal from "@/components/pages/add-transaction-modal"

export default function BudgetTracker() {
  const [transactions, setTransactions] = useState([
    { id: 1, category: "Food & Dining", amount: 45.5, date: "2025-10-20", type: "expense" },
    { id: 2, category: "Transportation", amount: 25.0, date: "2025-10-19", type: "expense" },
    { id: 3, category: "Entertainment", amount: 60.0, date: "2025-10-18", type: "expense" },
    { id: 4, category: "Utilities", amount: 120.0, date: "2025-10-17", type: "expense" },
    { id: 5, category: "Salary", amount: 3000.0, date: "2025-10-15", type: "income" },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const budgets = {
    "Food & Dining": 300,
    Transportation: 150,
    Entertainment: 200,
    Utilities: 200,
    Shopping: 250,
  }

  const handleAddTransaction = (newTransaction) => {
    setTransactions([{ ...newTransaction, id: Math.max(...transactions.map((t) => t.id), 0) + 1 }, ...transactions])
    setIsModalOpen(false)
  }

  const totalSpent = transactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0)

  const totalIncome = transactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0)

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 sm:mb-2">Budget Tracker</h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Manage your spending and reach your financial goals
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            + Add Transaction
          </button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <div className="bg-card rounded-xl p-4 sm:p-6 border border-border shadow-sm">
            <p className="text-muted-foreground text-xs sm:text-sm mb-1 sm:mb-2">Total Income</p>
            <p className="text-2xl sm:text-3xl font-bold text-primary">${totalIncome.toFixed(2)}</p>
          </div>
          <div className="bg-card rounded-xl p-4 sm:p-6 border border-border shadow-sm">
            <p className="text-muted-foreground text-xs sm:text-sm mb-1 sm:mb-2">Total Spent</p>
            <p className="text-2xl sm:text-3xl font-bold text-destructive">${totalSpent.toFixed(2)}</p>
          </div>
          <div className="bg-card rounded-xl p-4 sm:p-6 border border-border shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="text-muted-foreground text-xs sm:text-sm mb-1 sm:mb-2">Remaining</p>
            <p className="text-2xl sm:text-3xl font-bold text-accent">${(totalIncome - totalSpent).toFixed(2)}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <BudgetOverview budgets={budgets} transactions={transactions} />
            <SpendingCategories budgets={budgets} transactions={transactions} />
          </div>

          {/* Right Column */}
          <div>
            <RecentTransactions transactions={transactions.slice(0, 8)} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <AddTransactionModal onClose={() => setIsModalOpen(false)} onAdd={handleAddTransaction} />}
    </main>
  )
}
