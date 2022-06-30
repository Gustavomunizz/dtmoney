import { Dashboard } from './components/dashboard'
import { Header } from './components/header'
import { GlobalStyle } from './styles/global'
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api' //Significa que todas as chamadas a API vão ser a partir de um /api

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  )
}
