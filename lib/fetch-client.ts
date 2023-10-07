export const fetchClient = {
  get: async <T>(url: string): Promise<T> => {
    try {
      const res = await fetch(`${url}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': process.env.xRapidApiKey!,
          'X-RapidAPI-Host': process.env.xRapidApiHost!,
        },
      })

      return await res.json()
    } catch (error: any) {
      console.error(error)
      throw error
    }
  },
  post: async <T>(url: string, body = {}): Promise<T> => {
    try {
      const res = await fetch(`${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': process.env.xRapidApiKey!,
          'X-RapidAPI-Host': process.env.xRapidApiHost!,
        },
        body: JSON.stringify(body),
      })
      return await res.json()
    } catch (error: any) {
      console.error(error)
      throw error
    }
  },
}
