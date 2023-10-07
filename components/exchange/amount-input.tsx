'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { AMOUNT } from '@/lib/constants'
import { useCreateQueryString } from '@/hooks/use-create-query-string'
import { useSearchQueryParams } from '@/hooks/use-search-params'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const AmountInput = () => {
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
    <div className="w-full max-w-sm items-center gap-1.5 lg:grid">
      <Label htmlFor="amount">Amount</Label>
      <Input
        type="number"
        id="amount"
        value={amountQueryINT}
        placeholder="0.0"
        onChange={onAmountChangeHandler}
      />
    </div>
  )
}
