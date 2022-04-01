import '../styles/globals.css'
import { UserProvider } from "./../context/userContext"

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider user={pageProps.user}>
      <Component {...pageProps}/>
    </UserProvider>
  )
}

export default MyApp
