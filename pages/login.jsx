import { useRouter } from "next/router";
import { getUnAuthenticatedRedirect } from "./../services/user";
import LoginTitle from "../components/login/LoginTitle"
import LoginLema from "../components/login/LoginLema";
import GoogleButton from "../components/login/GoogleButton";
import RecoveryInformation from "../components/login/RecoveryInformation";
import CopyrightFooter from "../components/login/CopyrightFooter";
import LoginErrorMessage from "../components/login/LoginErrorMessage";


const LoginPage = () => {
  const { query } = useRouter();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="hidden lg:block bg-primaryColor z-10" />
      <div className="relative flex flex-col justify-between px-4">
        <div className="absolute lg:w-32 w-48 lg:h-32 h-48 bg-accentColor top- rounded-full -left-4 -top-4" />
        <div className="absolute lg:w-28 w-40 lg:h-28 h-40 bg-primaryColor top- rounded-full top-14 left-20 z-10" />
        <div className="absolute lg:w-20 w-32 lg:h-20 h-32 bg-secondaryColor top- rounded-full top-10 lg:left-40 left-48" />
        <div className="flex flex-col justify-center flex-1 space-y-5 mt-16">
          <LoginTitle/>
          <LoginLema />
          <GoogleButton />
          {
            query.error && <LoginErrorMessage message={query.error}/>
          }
          <RecoveryInformation />
        </div>
        <footer className="flex justify-center mb-4">
          <CopyrightFooter />
        </footer>
      </div>
    </div>
  )
}

export async function getServerSideProps ({ req }) {
  const { user_auth_token } = req.cookies

  return await getUnAuthenticatedRedirect(user_auth_token)

}

export default LoginPage;