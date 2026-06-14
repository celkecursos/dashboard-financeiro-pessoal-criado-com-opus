import { useMemo, useState } from 'react'
import { Header } from './components/Header'
import { SummaryCards } from './components/SummaryCards'
import { TransactionForm } from './components/TransactionForm'
import { TransactionList } from './components/TransactionList'
import { CategoryChart } from './components/CategoryChart'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useTheme } from './hooks/useTheme'
import { mockTransactions } from './data/mockTransactions'
import { TRANSACTION_TYPES } from './constants/categories'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [transactions, setTransactions] = useLocalStorage(
    'transactions',
    mockTransactions,
  )
  const [filter, setFilter] = useState('all')

  const addTransaction = (transaction) => {
    setTransactions((prev) => [transaction, ...prev])
  }

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id))
  }

  const totals = useMemo(() => {
    const totalIncome = transactions
      .filter((t) => t.type === TRANSACTION_TYPES.INCOME)
      .reduce((sum, t) => sum + t.amount, 0)
    const totalExpense = transactions
      .filter((t) => t.type === TRANSACTION_TYPES.EXPENSE)
      .reduce((sum, t) => sum + t.amount, 0)
    return {
      totalIncome,
      totalExpense,
      balance: totalIncome - totalExpense,
      savings: totalIncome - totalExpense,
    }
  }, [transactions])

  const categories = useMemo(
    () => [...new Set(transactions.map((t) => t.category))].sort(),
    [transactions],
  )

  const filteredTransactions = useMemo(() => {
    const list =
      filter === 'all'
        ? transactions
        : transactions.filter((t) => t.category === filter)
    return [...list].sort((a, b) => b.date.localeCompare(a.date))
  }, [transactions, filter])

  const expensesByCategory = useMemo(() => {
    const map = {}
    transactions
      .filter((t) => t.type === TRANSACTION_TYPES.EXPENSE)
      .forEach((t) => {
        map[t.category] = (map[t.category] || 0) + t.amount
      })
    return Object.entries(map).map(([name, value]) => ({ name, value }))
  }, [transactions])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-900 dark:text-white">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <Header theme={theme} onToggleTheme={toggleTheme} />

        <SummaryCards
          balance={totals.balance}
          totalIncome={totals.totalIncome}
          totalExpense={totals.totalExpense}
          savings={totals.savings}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 self-start lg:col-span-1">
            <TransactionForm onAdd={addTransaction} />
            <CategoryChart data={expensesByCategory} />
          </div>
          <div className="lg:col-span-2">
            <TransactionList
              transactions={filteredTransactions}
              categories={categories}
              filter={filter}
              onFilterChange={setFilter}
              onDelete={deleteTransaction}
            />
          </div>
        </div>

        <footer className="pt-2 text-center text-xs text-slate-400 dark:text-slate-500">
          Personal Finance Dashboard · Demo data persisted locally
        </footer>
      </div>
    </div>
  )
}

export default App
