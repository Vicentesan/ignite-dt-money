import { createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  amount: number
  createdAt: string
}

interface TransactionsContextData {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>({
  transactions: [],
  fetchTransactions: async () => {},
})

export function TransactionsContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const { data } = await api.get('/transactions', {
      params: {
        q: query,
      },
    })

    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
