import { format } from 'date-fns'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { priceFormatter } from '../../utils/formatter'
import { SearchForm } from '../SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function TransactionsList() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )

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
                      ? `- ${priceFormatter.format(amount)}`
                      : priceFormatter.format(amount)}
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
