import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { Card } from './ui/Card'
import { CATEGORY_COLORS } from '../constants/categories'
import { formatCurrency } from '../utils/format'

export function CategoryChart({ data }) {
  const hasData = data.length > 0

  return (
    <Card>
      <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
        Expenses by category
      </h2>
      {hasData ? (
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={95}
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={CATEGORY_COLORS[index % CATEGORY_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => formatCurrency(value)}
              contentStyle={{
                borderRadius: '0.5rem',
                border: 'none',
                background: '#1e293b',
                color: '#fff',
              }}
            />
            <Legend wrapperStyle={{ fontSize: '0.8rem' }} />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p className="py-16 text-center text-sm text-slate-500 dark:text-slate-400">
          No expenses to display.
        </p>
      )}
    </Card>
  )
}
