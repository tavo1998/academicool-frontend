import { getUserAuthenticated } from "../services/user"
import { getRoleRedirectUrl } from "../lib/redirect"

const HomePage = () => {
  return (
    <></>
  )
}

export default HomePage

export async function getServerSideProps ({ req }) {
  const { user_auth_token } = req.cookies

  const user = await getUserAuthenticated(user_auth_token)

  if(user) {
    return {
      redirect: { permanent: false, destination: getRoleRedirectUrl(user.role) }
    }
  }

  return {
    redirect: { permanent: false, destination: '/login' }
  }

}