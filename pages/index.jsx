import Head from 'next/head'
import { getAuthenticatedRedirect } from "./../services/user";

const Home = ({ user }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Testing...</div>
    </div>
  )
}

export async function getServerSideProps ({ req }) {
  const { user_auth_token } = req.cookies

  return await getAuthenticatedRedirect(user_auth_token)
}

export default Home
