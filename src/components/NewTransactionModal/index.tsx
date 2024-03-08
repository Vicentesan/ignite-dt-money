import * as Dialog from '@radix-ui/react-dialog'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import { z } from 'zod'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import {
  StyledClose,
  StyledContent,
  StyledOverlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'

const newTransactionFormSchema = z.object({
  description: z.string(),
  amount: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionForm = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.createTransaction,
  )

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionForm>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  async function handleNewTransaction(data: NewTransactionForm) {
    const { description, amount, category, type } = data

    await createTransaction({
      description,
      amount,
      category,
      type,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <StyledOverlay />

      <StyledContent>
        <StyledClose>
          <X size={24} />
        </StyledClose>
        <Dialog.Title>New Transaction</Dialog.Title>

        <form onSubmit={handleSubmit(handleNewTransaction)}>
          <input
            type="text"
            placeholder="Description"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Amount"
            required
            {...register('amount', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionType
                onValueChange={field.onChange}
                value={field.value}
              >
                <TransactionTypeButton value="income" variant="income">
                  <ArrowCircleUp size={24} /> Income
                </TransactionTypeButton>
                <TransactionTypeButton value="outcome" variant="outcome">
                  <ArrowCircleDown size={24} /> Outcome
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </form>
      </StyledContent>
    </Dialog.Portal>
  )
}
