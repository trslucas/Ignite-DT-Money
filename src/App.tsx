import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransationsContext'
import { Transactions } from './pages/transations'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
