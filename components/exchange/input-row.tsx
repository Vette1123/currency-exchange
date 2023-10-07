'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { AMOUNT } from '@/lib/constants'
import { useCreateQueryString } from '@/hooks/use-create-query-string'
import { useSearchQueryParams } from '@/hooks/use-search-params'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Combobox } from '@/components/combobox'

interface ExchangeInputsProps {
  listCurrencies: string[]
}

export const ExchangeInputs = ({ listCurrencies }: ExchangeInputsProps) => {
  const router = useRouter()
  const { amountQueryINT } = useSearchQueryParams()
  const { createQueryString } = useCreateQueryString()

  const onAmountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const amount = Number(value)
    if (amount) {
      router.push(`?${createQueryString(AMOUNT, value)}`)
    } else {
      router.push('/')
    }
  }
  return (
    <section className="flex gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="amount">Amount</Label>
        <Input
          type="number"
          id="amount"
          value={amountQueryINT}
          placeholder="0.0"
          onChange={onAmountChangeHandler}
        />
      </div>
      <Combobox listCurrencies={listCurrencies} exchangeKey="From" />
      <Combobox listCurrencies={listCurrencies} exchangeKey="To" />
    </section>
  )
}
