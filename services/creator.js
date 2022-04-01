import RequestError from "../lib/requestError"

const creator = async (url, body) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if(!res.ok) {
      const error = new RequestError(
        'An error occurred while creating the data.',
        res.status,
        await res.json()
      )

      throw error
    }

    return await res.json()
  } catch (e) {
    throw e
  }
}

export default creator