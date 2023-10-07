import React, { useCallback } from 'react'
import { useSearchParams } from 'next/navigation'

import { ExchangeKey } from '@/types/exchange'

export const useCreateQueryString = () => {
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const currentURL = new URLSearchParams(Array.from(searchParams.entries()))

  return { createQueryString, currentURL }
}
