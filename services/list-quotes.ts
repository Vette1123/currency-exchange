import { LIST_QUOTES_URL } from '@/lib/constants'
import { fetchClient } from '@/lib/fetch-client'

const getLatestQuotes = async () => {
  const url = LIST_QUOTES_URL
  return fetchClient.get<string[]>(url)
}

export { getLatestQuotes }
