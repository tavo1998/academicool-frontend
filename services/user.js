export async function getUserAuthenticated (userAuthCookie) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/users/me`, {
      headers: {
        Cookie: `user_auth_token=${userAuthCookie}` 
      }
    })

    if(!response.ok){
      return null
    }

    const data = await response.json()
    return data
  } catch (e) {
    return null
  }
}