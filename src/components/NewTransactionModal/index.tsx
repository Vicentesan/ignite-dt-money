import * as Dialog from '@radix-ui/react-dialog'

import {
  StyledContent,
  StyledOverlay,
  StyledClose,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <StyledOverlay />

      <StyledContent>
        <StyledClose>
          <X size={24} />
        </StyledClose>
        <Dialog.Title>New Transaction</Dialog.Title>

        <form>
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Price" required />
          <input type="text" placeholder="Category" required />

          <TransactionType>
            <TransactionTypeButton variant="income">
              <ArrowCircleUp size={24} /> Income
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome">
              <ArrowCircleDown size={24} /> Outcome
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Register</button>
        </form>
      </StyledContent>
    </Dialog.Portal>
  )
}
