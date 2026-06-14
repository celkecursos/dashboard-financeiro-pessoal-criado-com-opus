# Painel Financeiro Pessoal

Dashboard financeiro pessoal moderno e responsivo para acompanhar receitas,
despesas e economias. Aplicação **front-end**, sem backend, com dados de
demonstração persistidos no navegador via **LocalStorage**.

## Funcionalidades

- 📊 Cards de resumo: saldo atual, total de receitas, total de despesas e economia do mês
- 📝 Cadastro de transações (descrição, categoria, tipo, valor e data)
- 🗑️ Exclusão de transações
- 🔎 Filtro por categoria
- 🥧 Gráfico de despesas por categoria
- 💾 Persistência automática no LocalStorage (carrega dados mockados na primeira execução)
- 🌗 Tema claro/escuro com a preferência salva no navegador
- 📱 Layout responsivo para desktop e dispositivos móveis

## Deploy do projeto na VPS da Hostinger

- Ganhe 20% de desconto adicional na Hostinger:  https://celke.com.br/page/hostinger
- Cupom para ganhar 10% de desconto na Hostinger — não cumulativo com o link acima: celke

## Tecnologias

- [React](https://react.dev/) + [Vite](https://vite.dev/) (JavaScript / JSX)
- [Tailwind CSS](https://tailwindcss.com/) (dark mode baseado em classe)
- [Recharts](https://recharts.org/) para os gráficos

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (incluído no Node.js)

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/celkecursos/dashboard-financeiro-pessoal-criado-com-opus.git
cd dashboard-financeiro-pessoal-criado-com-opus

# Instalar as dependências
npm install
```

## Uso

### Ambiente de desenvolvimento

```bash
npm run dev
```

Acesse o endereço exibido no terminal (por padrão `http://localhost:5173`).

### Build de produção

```bash
npm run build
```

Os arquivos otimizados são gerados na pasta `dist/`.

### Pré-visualizar o build

```bash
npm run preview
```

### Verificar o código (lint)

```bash
npm run lint
```

## Estrutura do projeto

```
src/
├── components/        # Componentes de interface
│   ├── ui/Card.jsx        # Card reutilizável
│   ├── Header.jsx
│   ├── ThemeToggle.jsx
│   ├── SummaryCards.jsx
│   ├── TransactionForm.jsx
│   ├── TransactionList.jsx
│   └── CategoryChart.jsx
├── hooks/             # Hooks customizados
│   ├── useLocalStorage.js
│   └── useTheme.js
├── data/             # Dados mockados
│   └── mockTransactions.js
├── constants/        # Categorias, tipos e cores
│   └── categories.js
├── utils/            # Funções utilitárias (moeda e data)
│   └── format.js
├── App.jsx           # Composição da aplicação e estado
├── main.jsx          # Ponto de entrada
└── index.css         # Estilos base do Tailwind
```

## Persistência dos dados

Na primeira execução, a aplicação carrega um conjunto de transações de
demonstração. A partir daí, qualquer alteração (adição ou exclusão de
transações) e a preferência de tema são salvas automaticamente no
LocalStorage do navegador e recuperadas ao reabrir a aplicação.

> Para restaurar os dados de demonstração, limpe o LocalStorage do site no
> seu navegador.

## Autor

Este projeto foi desenvolvido por [Cesar Szpak](https://github.com/cesarszpak) e está hospedado no repositório da organização [Celke](https://github.com/celkecursos).

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE.txt) para mais detalhes.
