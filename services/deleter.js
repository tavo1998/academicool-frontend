import RequestError from "../lib/requestError"

const deleter = async (url) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + url, {
      method: 'DELETE',
      credentials: 'include'
    })

    if(!res.ok) {
      const error = new RequestError(
        'An error occurred while deleting the data.',
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

export default deleter