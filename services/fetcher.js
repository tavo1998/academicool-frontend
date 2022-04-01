import RequestError from "../lib/requestError"

const fetcher = async url => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + url, { credentials: 'include' })
    if(!res.ok) {
      const error = new RequestError(
        'An error occurred while fetching the data.',
        res.status,
        await res.json()
      )
      
      throw error
    }
    return res.json()
  } catch (e) {
    throw e
  }
}

export default fetcher