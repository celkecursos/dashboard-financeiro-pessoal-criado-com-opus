import { ThemeToggle } from './ThemeToggle'

export function Header({ theme, onToggleTheme }) {
  return (
    <header className="flex items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Painel Financeiro Pessoal
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Acompanhe suas receitas, despesas e economias
        </p>
      </div>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  )
}
