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

        <strong>U$ 6.000,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Exits</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>U$ 760,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>U$ 5.240,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
