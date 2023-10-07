import React from 'react'
import { useRouter } from 'next/navigation'
import { Check, ChevronsUpDown } from 'lucide-react'

import { ExchangeKey } from '@/types/exchange'
import { cn } from '@/lib/utils'
import { useCreateQueryString } from '@/hooks/use-create-query-string'
import { useSearchQueryParams } from '@/hooks/use-search-params'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface ComboboxProps {
  listCurrencies: string[]
  exchangeKey: ExchangeKey
}

export const Combobox = ({ listCurrencies, exchangeKey }: ComboboxProps) => {
  const { getExchangeValue, exchangeKeyValueSTR } =
    useSearchQueryParams(exchangeKey)
  const { createQueryString } = useCreateQueryString()
  const router = useRouter()

  const toggleExchangeKey = () => {
    if (exchangeKey === 'From') {
      return getExchangeValue('To')
    } else {
      return getExchangeValue('From')
    }
  }

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="from">{exchangeKey}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              'w-[200px] justify-between',
              exchangeKeyValueSTR && 'text-muted-foreground'
            )}
          >
            {exchangeKeyValueSTR
              ? listCurrencies.find(
                  (currency) => currency === exchangeKeyValueSTR
                )
              : 'Select a currency'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search currency..." />
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandGroup>
              {listCurrencies.map((currency) => (
                <CommandItem
                  value={currency}
                  key={currency}
                  className={cn(
                    'text-sm',
                    currency === toggleExchangeKey() &&
                      'cursor-not-allowed opacity-50 hover:bg-transparent'
                  )}
                  disabled={currency === toggleExchangeKey()}
                  onSelect={() =>
                    router.push(`?${createQueryString(exchangeKey, currency)}`)
                  }
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      currency === exchangeKeyValueSTR
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                  {currency}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
