import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        {/* We do not fill in the alternative field if we cannot explain exactly what the image is */}
        <img src="/dt-money-logo.svg" alt="" />

        <NewTransactionButton>New Transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
