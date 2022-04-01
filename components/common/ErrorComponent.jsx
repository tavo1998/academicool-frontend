
import { useRouter } from 'next/router'

const ErrorComponent = ({ error, children }) => {
  const router = useRouter()

  if(error.status === 401) {
    router.push('/login')
    return null
  }

  return (
    <>
      {children}
    </>
  )
}

export default ErrorComponent