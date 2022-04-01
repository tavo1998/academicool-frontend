import RequestError from "../lib/requestError"

const updater = async (url, body) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + url, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if(!res.ok) {
      const error = new RequestError(
        'An error occurred while updating the data.',
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

export default updater