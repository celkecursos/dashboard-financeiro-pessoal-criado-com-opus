export const TRANSACTION_TYPES = {
  INCOME: 'income',
  EXPENSE: 'expense',
}

export const INCOME_CATEGORIES = ['Salary', 'Freelance', 'Investments', 'Other']

export const EXPENSE_CATEGORIES = [
  'Housing',
  'Food',
  'Transport',
  'Health',
  'Education',
  'Leisure',
  'Shopping',
  'Bills',
  'Other',
]

export const ALL_CATEGORIES = [
  ...new Set([...INCOME_CATEGORIES, ...EXPENSE_CATEGORIES]),
]

export const CATEGORY_COLORS = [
  '#6366f1',
  '#ec4899',
  '#f59e0b',
  '#10b981',
  '#3b82f6',
  '#8b5cf6',
  '#ef4444',
  '#14b8a6',
  '#f97316',
  '#a855f7',
]
