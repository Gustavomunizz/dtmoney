import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
