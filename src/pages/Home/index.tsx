import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsList } from '../../components/TransactionsList'

export function Home() {
  return (
    <div>
      <Header />

      <Summary />
      <TransactionsList />
    </div>
  )
}
