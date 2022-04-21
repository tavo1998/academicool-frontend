import { useState } from "react"

const useMutation = (url, mutator) => {
  const [requestOk, setRequestOk] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [requestError, setRequestError] = useState(null)

  const sendMutation = async (body) => {
    setRequestOk(false)
    setIsSubmitting(true)
    try {
      await mutator(url, body)
      setIsSubmitting(false)
      setRequestOk(true)
    } catch(e) {
      console.log(e)
      setRequestError(e)
      setIsSubmitting(false)
    }
  }

  return { isSubmitting, requestError, requestOk, sendMutation }
}

export default useMutation