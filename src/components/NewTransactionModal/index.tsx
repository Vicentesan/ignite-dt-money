import * as Dialog from '@radix-ui/react-dialog'

import { StyledContent, StyledOverlay, StyledClose } from './styles'
import { X } from 'phosphor-react'

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

          <button type="submit">Register</button>
        </form>
      </StyledContent>
    </Dialog.Portal>
  )
}
