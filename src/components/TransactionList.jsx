import { Card } from './ui/Card'
import { TRANSACTION_TYPES } from '../constants/categories'
import { formatCurrency, formatDate } from '../utils/format'

function CategoryFilter({ categories, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 outline-none transition-colors focus:border-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
    >
      <option value="all">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  )
}

function TransactionRow({ transaction, onDelete }) {
  const isIncome = transaction.type === TRANSACTION_TYPES.INCOME
  return (
    <li className="flex items-center justify-between gap-3 py-3">
      <div className="min-w-0">
        <p className="truncate font-medium text-slate-900 dark:text-white">
          {transaction.description}
        </p>
        <div className="mt-1 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="rounded-full bg-slate-100 px-2 py-0.5 dark:bg-slate-700">
            {transaction.category}
          </span>
          <span>{formatDate(transaction.date)}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span
          className={`whitespace-nowrap font-semibold ${
            isIncome
              ? 'text-emerald-600 dark:text-emerald-400'
              : 'text-rose-600 dark:text-rose-400'
          }`}
        >
          {isIncome ? '+' : '-'}
          {formatCurrency(transaction.amount)}
        </span>
        <button
          type="button"
          onClick={() => onDelete(transaction.id)}
          aria-label="Delete transaction"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10"
        >
          🗑️
        </button>
      </div>
    </li>
  )
}

export function TransactionList({
  transactions,
  categories,
  filter,
  onFilterChange,
  onDelete,
}) {
  return (
    <Card>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Transactions
        </h2>
        <CategoryFilter
          categories={categories}
          value={filter}
          onChange={onFilterChange}
        />
      </div>

      {transactions.length === 0 ? (
        <p className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
          No transactions found.
        </p>
      ) : (
        <ul className="divide-y divide-slate-100 dark:divide-slate-700">
          {transactions.map((transaction) => (
            <TransactionRow
              key={transaction.id}
              transaction={transaction}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </Card>
  )
}
