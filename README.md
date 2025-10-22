# 💰 Budget Tracker

A modern, responsive expense tracking and budget management application built with React and Vite. Track your income and expenses, visualize spending patterns, and stay on top of your financial goals.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.15-38B2AC?logo=tailwind-css)

## ✨ Features

- **📊 Visual Budget Overview** - Interactive bar charts showing budget vs. spending across categories
- **💳 Transaction Management** - Add, track, and categorize income and expenses
- **📈 Real-time Calculations** - Automatic calculation of total income, expenses, and remaining balance
- **🎯 Category-based Budgeting** - Set budgets for different spending categories
- **⚠️ Budget Alerts** - Visual indicators when spending exceeds budget limits
- **📱 Responsive Design** - Fully responsive interface that works seamlessly on desktop, tablet, and mobile
- **🎨 Modern UI** - Clean, intuitive interface built with shadcn/ui components
- **🌓 Theme Support** - Built-in support for light and dark themes

## 🚀 Tech Stack

- **Frontend Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.7
- **Styling:** Tailwind CSS 4.1.15
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Charts:** Recharts 3.3.0
- **Form Handling:** React Hook Form 7.65.0 with Zod validation
- **Icons:** Lucide React
- **Notifications:** Sonner
- **Date Utilities:** date-fns

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd tracker-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📖 Usage

### Adding Transactions

1. Click the **"+ Add Transaction"** button
2. Select transaction type (Income or Expense)
3. Choose a category from the dropdown
4. Enter the amount
5. Select the transaction date
6. Click **"Add"** to save

### Viewing Budget Status

- **Budget Overview Chart** - Compare budgeted amounts vs. actual spending
- **Spending by Category** - Progress bars show percentage of budget used
- **Overview Cards** - Quick glance at total income, expenses, and remaining balance
- **Recent Transactions** - View your latest financial activities

### Categories

The app includes default categories:
- 🍽️ Food & Dining
- 🚗 Transportation
- 🎬 Entertainment
- 💡 Utilities
- 🛍️ Shopping
- 💰 Salary (Income)

## 📁 Project Structure

```
tracker-frontend/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── pages/       # Page components
│   │   │   ├── index.jsx
│   │   │   ├── budget-overview.jsx
│   │   │   ├── spending-categories.jsx
│   │   │   ├── recent-transactions.jsx
│   │   │   └── add-transaction-modal.jsx
│   │   └── ui/          # Reusable UI components (shadcn/ui)
│   ├── lib/             # Utility functions
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Component Architecture

### Main Components

- **BudgetTracker** (`index.jsx`) - Main container component managing state and layout
- **BudgetOverview** - Bar chart visualization comparing budgets and spending
- **SpendingCategories** - Category-wise breakdown with progress bars
- **RecentTransactions** - List of recent transactions
- **AddTransactionModal** - Modal form for adding new transactions

## 🔧 Configuration

### Path Aliases

The project uses `@` as an alias for the `src` directory:

```javascript
import Component from '@/components/ui/component'
```

### Tailwind CSS

Custom Tailwind configuration with CSS variables for theming. The project uses Tailwind CSS v4 with the Vite plugin.

## 🚧 Future Enhancements

Potential features for future development:

- [ ] Persistent data storage (localStorage or backend API)
- [ ] Export data to CSV/PDF
- [ ] Custom category creation
- [ ] Monthly/yearly spending trends
- [ ] Multiple budget periods
- [ ] Recurring transactions
- [ ] Budget recommendations based on spending patterns
- [ ] Multi-currency support
- [ ] User authentication

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - For the beautiful UI components
- [Recharts](https://recharts.org/) - For the charting library
- [Lucide](https://lucide.dev/) - For the icon set
- [Radix UI](https://www.radix-ui.com/) - For accessible component primitives

---

Built with ❤️ using React and Vite

