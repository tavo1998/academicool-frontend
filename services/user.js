export async function getUserAuthenticated (userAuthCookie) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/users/me`, {
      headers: {
        Cookie: `user_auth_token=${userAuthCookie}` 
      }
    })
    const data = await response.json()
    return data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export async function getUnAuthenticatedRedirect (user_auth_token) {

  const authProps = { props: {}}

  if(!user_auth_token) {
    return authProps
  }

  try {
    const user = await getUserAuthenticated(user_auth_token)
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    }
  } catch (e) {
    return authProps
  }
}

export async function getAuthenticatedRedirect (user_auth_token) {

  const unAuthRedirect = {
    redirect: {
      permanent: false,
      destination: '/login'
    }
  }

  if (!user_auth_token) {
    return unAuthRedirect
  }

  try {
    const user = await getUserAuthenticated(user_auth_token)
    return {
      props: {
        user
      }
    }
  } catch (e) {
    return unAuthRedirect
  }
}
