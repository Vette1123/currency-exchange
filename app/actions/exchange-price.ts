'use server'

import { EXCHANGE_PRICE_URL } from '@/lib/constants'
import { fetchClient } from '@/lib/fetch-client'

interface ExchangePrice {
  from: string
  to: string
  quantity: string
}

export const getExchangePrice = async ({
  from,
  to,
  quantity,
}: ExchangePrice): Promise<number> => {
  const url = `${EXCHANGE_PRICE_URL}?from=${from}&to=${to}&q=${quantity}`
  const response = await fetchClient.get<number>(url)
  return response
}
