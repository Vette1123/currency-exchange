'use client'

import React from 'react'
import { Loader } from 'lucide-react'
import { toast } from 'sonner'
import { useDebouncedCallback } from 'use-debounce'

import { numberFormat } from '@/lib/utils'
import { useSearchQueryParams } from '@/hooks/use-search-params'
import { getExchangePrice } from '@/app/actions/exchange-price'

export const Result = () => {
  const { toExchangeValue, fromExchangeValue, amountExchangeValue } =
    useSearchQueryParams()
  const [result, setResult] = React.useState<number>()
  const [isLoading, setIsLoading] = React.useState<boolean>()

  const fetchExchangeResult = async () => {
    if (!toExchangeValue || !fromExchangeValue || !amountExchangeValue) return
    setIsLoading(true)
    const response = await getExchangePrice({
      from: fromExchangeValue,
      to: toExchangeValue,
      quantity: amountExchangeValue,
    })

    if (response || response === 0) {
      setResult(response)
    } else {
      toast.error('Something went wrong, please try again later.')
    }
    setIsLoading(false)
  }

  const debouncedCallBack = useDebouncedCallback(async () => {
    await fetchExchangeResult()
    // 500ms delay
  }, 500)

  React.useEffect(() => {
    debouncedCallBack()
  }, [
    amountExchangeValue,
    debouncedCallBack,
    fromExchangeValue,
    toExchangeValue,
  ])

  return (
    <div className="flex w-full px-8 md:p-0">
      {toExchangeValue && fromExchangeValue && amountExchangeValue && result ? (
        <>
          <p className="text-sm font-bold md:text-2xl">
            {amountExchangeValue} {fromExchangeValue} equals{' '}
          </p>
          <p className="ml-2 text-sm font-bold md:text-2xl">
            <span>
              {isLoading ? (
                <Loader className="mr-2 inline-flex h-6 w-6 shrink-0 animate-spin items-center justify-center opacity-80" />
              ) : (
                numberFormat(result)
              )}
            </span>{' '}
            {toExchangeValue}
          </p>
        </>
      ) : (
        <p className="text-2xl font-bold text-slate-500">
          {isLoading ? (
            <Loader className="mr-2 inline-flex h-6 w-6 shrink-0 animate-spin items-center justify-center opacity-80" />
          ) : (
            'Please enter valid values to get the result.'
          )}
        </p>
      )}
    </div>
  )
}
