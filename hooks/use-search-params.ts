import React from 'react'
import { useSearchParams } from 'next/navigation'

import { ExchangeKey } from '@/types/exchange'
import { AMOUNT } from '@/lib/constants'

export const useSearchQueryParams = (exchangeKey?: ExchangeKey) => {
  const searchParams = useSearchParams()
  const amountQuerySTR = searchParams.get(AMOUNT)
  const amountQueryINT = Number(amountQuerySTR) || ''
  const exchangeKeyValueSTR = searchParams.get(exchangeKey || '')
  const getExchangeValue = (key: ExchangeKey) => {
    return searchParams.get(key)
  }
  return {
    amountQueryINT,
    exchangeKeyValueSTR,
    getExchangeValue,
  }
}
