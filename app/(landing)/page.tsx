import { getLatestQuotes } from '@/services/list-quotes'

import { ExchangeInputs } from '@/components/exchange/input-row'

export default async function IndexPage() {
  const listQuotes = (await getLatestQuotes()) || []
  return (
    <section className="container flex max-w-screen-md flex-col gap-6 pb-8 pt-6 md:py-10">
      <ExchangeInputs listCurrencies={listQuotes} />
    </section>
  )
}
