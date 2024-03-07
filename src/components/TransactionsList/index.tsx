import { format } from 'date-fns'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { SearchForm } from '../SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { priceFormater } from '../../utils/formater'

export function TransactionsList() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <TransactionsContainer>
      <SearchForm />

      <TransactionsTable>
        <tbody>
          {transactions.map(
            ({ id, description, type, category, amount, createdAt }) => (
              <tr key={id}>
                <td width="50%">{description}</td>
                <td>
                  <PriceHighlight variant={type}>
                    {type === 'outcome'
                      ? `- ${priceFormater.format(amount)}`
                      : priceFormater.format(amount)}
                  </PriceHighlight>
                </td>
                <td>{category}</td>
                <td>{format(new Date(createdAt), 'MM/dd/yyyy')}</td>
              </tr>
            ),
          )}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}
