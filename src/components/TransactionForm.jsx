import { useState } from 'react'
import { Card } from './ui/Card'
import {
  TRANSACTION_TYPES,
  INCOME_CATEGORIES,
  EXPENSE_CATEGORIES,
} from '../constants/categories'

const inputClasses =
  'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-600 dark:bg-slate-900 dark:text-white'

const labelClasses =
  'mb-1 block text-xs font-medium text-slate-600 dark:text-slate-300'

const today = () => new Date().toISOString().slice(0, 10)

const emptyForm = {
  description: '',
  type: TRANSACTION_TYPES.EXPENSE,
  category: EXPENSE_CATEGORIES[0],
  amount: '',
  date: today(),
}

export function TransactionForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')

  const categories =
    form.type === TRANSACTION_TYPES.INCOME
      ? INCOME_CATEGORIES
      : EXPENSE_CATEGORIES

  const handleTypeChange = (type) => {
    const list =
      type === TRANSACTION_TYPES.INCOME ? INCOME_CATEGORIES : EXPENSE_CATEGORIES
    setForm((prev) => ({ ...prev, type, category: list[0] }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const amount = Number(form.amount)
    if (!form.description.trim()) {
      setError('Please enter a description.')
      return
    }
    if (!amount || amount <= 0) {
      setError('Please enter an amount greater than zero.')
      return
    }
    onAdd({
      id: crypto.randomUUID(),
      description: form.description.trim(),
      type: form.type,
      category: form.category,
      amount,
      date: form.date,
    })
    setForm({ ...emptyForm, date: today() })
    setError('')
  }

  return (
    <Card>
      <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
        New transaction
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={labelClasses}>Description</label>
          <input
            type="text"
            className={inputClasses}
            placeholder="e.g. Supermarket"
            value={form.description}
            onChange={(e) =>
              setForm((p) => ({ ...p, description: e.target.value }))
            }
          />
        </div>

        <div>
          <label className={labelClasses}>Type</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleTypeChange(TRANSACTION_TYPES.EXPENSE)}
              className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                form.type === TRANSACTION_TYPES.EXPENSE
                  ? 'border-rose-500 bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400'
                  : 'border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-300'
              }`}
            >
              Expense
            </button>
            <button
              type="button"
              onClick={() => handleTypeChange(TRANSACTION_TYPES.INCOME)}
              className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                form.type === TRANSACTION_TYPES.INCOME
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                  : 'border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-300'
              }`}
            >
              Income
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClasses}>Category</label>
            <select
              className={inputClasses}
              value={form.category}
              onChange={(e) =>
                setForm((p) => ({ ...p, category: e.target.value }))
              }
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClasses}>Amount</label>
            <input
              type="number"
              min="0"
              step="0.01"
              className={inputClasses}
              placeholder="0.00"
              value={form.amount}
              onChange={(e) =>
                setForm((p) => ({ ...p, amount: e.target.value }))
              }
            />
          </div>
        </div>

        <div>
          <label className={labelClasses}>Date</label>
          <input
            type="date"
            className={inputClasses}
            value={form.date}
            onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
          />
        </div>

        {error && (
          <p className="text-sm text-rose-600 dark:text-rose-400">{error}</p>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          Add transaction
        </button>
      </form>
    </Card>
  )
}
