const fetcher = async url => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + url, { credentials: 'include' })
    if(!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return res.json()
  } catch (e) {
    throw e
  }
}

export default fetcher