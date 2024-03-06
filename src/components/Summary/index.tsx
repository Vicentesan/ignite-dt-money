import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entries</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>U$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Exits</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>U$ 1.259,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>U$ 16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
