import React from 'react'

import { Combobox } from '@/components/combobox'
import { AmountInput } from '@/components/exchange/amount-input'
import { ResetButton } from '@/components/exchange/reset-button'
import { Result } from '@/components/exchange/result'
import { ToggleCurrency } from '@/components/exchange/toggle-currency'

interface ExchangeInputsProps {
  listCurrencies: string[]
}

export const ExchangeInputs = ({ listCurrencies }: ExchangeInputsProps) => {
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center gap-8 md:flex-row">
        <AmountInput />
        <Combobox listCurrencies={listCurrencies} exchangeKey="From" />
        <ToggleCurrency />
        <Combobox listCurrencies={listCurrencies} exchangeKey="To" />
      </section>
      <ResetButton />
      <Result />
    </>
  )
}
