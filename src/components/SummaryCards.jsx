import { Card } from './ui/Card'
import { formatCurrency } from '../utils/format'

function SummaryCard({ label, value, accent, icon }) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {label}
        </span>
        <span className="text-xl">{icon}</span>
      </div>
      <p className={`mt-3 text-2xl font-bold ${accent}`}>
        {formatCurrency(value)}
      </p>
    </Card>
  )
}

export function SummaryCards({ balance, totalIncome, totalExpense, savings }) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <SummaryCard
        label="Saldo atual"
        value={balance}
        icon="💰"
        accent="text-slate-900 dark:text-white"
      />
      <SummaryCard
        label="Total de receitas"
        value={totalIncome}
        icon="📈"
        accent="text-emerald-600 dark:text-emerald-400"
      />
      <SummaryCard
        label="Total de despesas"
        value={totalExpense}
        icon="📉"
        accent="text-rose-600 dark:text-rose-400"
      />
      <SummaryCard
        label="Economia do mês"
        value={savings}
        icon="🏦"
        accent={
          savings >= 0
            ? 'text-emerald-600 dark:text-emerald-400'
            : 'text-rose-600 dark:text-rose-400'
        }
      />
    </section>
  )
}
