import {
  TransactionsContainer,
  TransactionsTable,
  PriceHighlight,
} from './styles'

export function TransactionsList() {
  return (
    <TransactionsContainer>
      <TransactionsTable>
        <tbody>
          <tr>
            <td width="50%">Website Development</td>
            <td>
              <PriceHighlight variant="income">U$ 6.000,00</PriceHighlight>
            </td>
            <td>Sale</td>
            <td>02/13/2024</td>
          </tr>
          <tr>
            <td width="50%">Hamburguer</td>
            <td>
              <PriceHighlight variant="outcome">- U$ 23,00</PriceHighlight>
            </td>
            <td>Food</td>
            <td>02/06/2024</td>
          </tr>
          <tr>
            <td width="50%">Apartment rent</td>
            <td>
              <PriceHighlight variant="outcome">- U$ 737,00</PriceHighlight>
            </td>
            <td>Home</td>
            <td>02/05/2024</td>
          </tr>
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}
