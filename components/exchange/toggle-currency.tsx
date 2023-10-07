'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'
import { useCreateQueryString } from '@/hooks/use-create-query-string'
import { Icons } from '@/components/icons'

export const ToggleCurrency = () => {
  const { currentURL } = useCreateQueryString()
  const router = useRouter()
  const pathname = usePathname()

  const newToExchangeKey = currentURL.get('From')
  const newFromExchangeKey = currentURL.get('To')

  const isEmptyKeys = !newToExchangeKey || !newFromExchangeKey

  const toggleExchangeKey = () => {
    if (isEmptyKeys) return
    currentURL.set('To', newToExchangeKey)
    currentURL.set('From', newFromExchangeKey)
    const search = currentURL.toString()
    const query = search ? `?${search}` : ''
    router.push(`${pathname}${query}`)
  }
  return (
    <>
      <Icons.exchange
        onClick={toggleExchangeKey}
        className={cn(
          'h-14 w-14 cursor-pointer pt-5 text-muted-foreground md:h-20 md:w-20',
          isEmptyKeys && 'cursor-not-allowed opacity-50'
        )}
      />
    </>
  )
}
