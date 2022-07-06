import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Website',
          amount: 6000,
          type: 'deposit',
          category: 'Dev',
          createdAt: new Date('2022-7-4, 16:06:35')
        },

        {
          id: 2,
          title: 'Compras do mês',
          amount: 600,
          type: 'withdraw',
          category: 'Compras',
          createdAt: new Date('2022-7-4')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api' //Significa que todas as chamadas a API vão ser a partir de um /api

    this.get('/transactions', schema => {
      return schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      let data = JSON.parse(request.requestBody)
      return schema.create('transaction', { ...data, createdAt: new Date() })
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
