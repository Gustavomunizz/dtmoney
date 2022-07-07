import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api'

interface TransactionsProps {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

type TransactionInputProps = Omit<TransactionsProps, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionContextProps {
  transactions: TransactionsProps[]
  createTransaction: (transaction: TransactionInputProps) => Promise<void>
}

const TransactionsContext = createContext<TransactionContextProps>({} as TransactionContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  useEffect(() => {
    api.get('/transactions').then(response => {
      setTransactions(response.data.transactions)
    })
  }, [])

  async function createTransaction(transactionInput: TransactionInputProps) {
    const response = await api.post('/transactions', transactionInput)
    const { transaction } = response.data
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}
