"use client"

export default function SpendingCategories({ budgets, transactions }) {
  const categoryStats = Object.entries(budgets).map(([category, budget]) => {
    const spent = transactions
      .filter((t) => t.category === category && t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0)

    const percentage = Math.min((spent / budget) * 100, 100)
    const isOverBudget = spent > budget

    return {
      category,
      budget,
      spent,
      percentage,
      isOverBudget,
      remaining: budget - spent,
    }
  })

  const getCategoryIcon = (category) => {
    const icons = {
      "Food & Dining": "🍽️",
      Transportation: "🚗",
      Entertainment: "🎬",
      Utilities: "💡",
      Shopping: "🛍️",
    }
    return icons[category] || "💰"
  }

  return (
    <div className="bg-card rounded-xl p-4 sm:p-6 border border-border shadow-sm">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Spending by Category</h2>
      <div className="space-y-4 sm:space-y-6">
        {categoryStats.map((stat) => (
          <div key={stat.category} className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">{getCategoryIcon(stat.category)}</span>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm sm:text-base">{stat.category}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    ${stat.spent.toFixed(2)} of ${stat.budget.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`font-bold text-sm sm:text-base ${stat.isOverBudget ? "text-destructive" : "text-primary"}`}
                >
                  {stat.percentage.toFixed(0)}%
                </p>
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${stat.isOverBudget ? "bg-destructive" : "bg-primary"}`}
                style={{ width: `${stat.percentage}%` }}
              />
            </div>
            {stat.isOverBudget && (
              <p className="text-xs text-destructive font-medium">
                Over budget by ${(stat.spent - stat.budget).toFixed(2)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
