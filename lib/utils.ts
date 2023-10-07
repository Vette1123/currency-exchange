import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const numberFormat = (value: number) => {
  return new Intl.NumberFormat('en-US').format(value)
}
