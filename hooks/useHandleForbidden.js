import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useHandleForbidden = (error) => {
  const router = useRouter()

  useEffect(() => {
    if(error && error.status === 403) router.push('/login')
  }, [error])
}

export default useHandleForbidden