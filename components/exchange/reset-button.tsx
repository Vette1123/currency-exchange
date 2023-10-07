'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export const ResetButton = () => {
  const router = useRouter()
  return (
    <div className="flex w-full p-8 md:p-0">
      <Button className="w-fit" onClick={() => router.push('/')}>
        Reset
      </Button>
    </div>
  )
}
