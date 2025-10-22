"use client"

export default function RecentTransactions({ transactions }) {
  const getCategoryIcon = (category) => {
    const icons = {
      "Food & Dining": "🍽️",
      Transportation: "🚗",
      Entertainment: "🎬",
      Utilities: "💡",
      Shopping: "🛍️",
      Salary: "💼",
    }
    return icons[category] || "💰"
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  return (
    <div className="bg-card rounded-xl p-4 sm:p-6 border border-border shadow-sm">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Recent Transactions</h2>
      <div className="space-y-2 sm:space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-2 sm:p-3 rounded-lg hover:bg-muted transition-colors gap-2"
          >
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="text-lg sm:text-2xl flex-shrink-0">{getCategoryIcon(transaction.category)}</div>
              <div className="min-w-0">
                <p className="font-medium text-foreground text-xs sm:text-sm truncate">{transaction.category}</p>
                <p className="text-xs text-muted-foreground">{formatDate(transaction.date)}</p>
              </div>
            </div>
            <p
              className={`font-bold text-xs sm:text-sm flex-shrink-0 ${transaction.type === "income" ? "text-primary" : "text-foreground"}`}
            >
              {transaction.type === "income" ? "+" : "-"}${transaction.amount.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
