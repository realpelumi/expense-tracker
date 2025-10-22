"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function BudgetOverview({ budgets, transactions }) {
  const categoryData = Object.entries(budgets).map(([category, budget]) => {
    const spent = transactions
      .filter((t) => t.category === category && t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0)

    return {
      category: category.split(" ")[0],
      budget,
      spent,
      remaining: Math.max(0, budget - spent),
    }
  })

  return (
    <div className="bg-card rounded-xl p-4 sm:p-6 border border-border shadow-sm">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Budget Overview</h2>
      <ResponsiveContainer width="100%" height={250} minHeight={250}>
        <BarChart data={categoryData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="category" stroke="var(--muted-foreground)" tick={{ fontSize: 12 }} />
          <YAxis stroke="var(--muted-foreground)" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            labelStyle={{ color: "var(--foreground)" }}
          />
          <Legend wrapperStyle={{ fontSize: "12px" }} />
          <Bar dataKey="budget" fill="var(--primary)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="spent" fill="var(--destructive)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
