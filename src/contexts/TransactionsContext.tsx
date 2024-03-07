import { createContext, useEffect, useState } from 'react'

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
}

export const TransactionsContext = createContext<TransactionsContextData>({
  transactions: [],
})

export function TransactionsContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    async function loadTransactions() {
      const response = await fetch('http://localhost:3000/transactions')
      const data = await response.json()

      setTransactions(data)
    }

    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
