import { useRouter } from "next/router";
import { getRoleRedirectUrl } from "./../lib/redirect";
import { getUserAuthenticated } from "../services/user";
import Head from "next/head"
import loginPic from "./../public/login.jpg"
import Image from 'next/image'
import LoginTitle from "./../components/login/LoginTitle.js"
import LoginLema from "./../components/login/LoginLema.js";
import GoogleButton from "./../components/login/GoogleButton.js";
import RecoveryInformation from "./../components/login/RecoveryInformation.js";
import CopyrightFooter from "./../components/login/CopyrightFooter.js";
import LoginErrorMessage from "./../components/login/LoginErrorMessage.js";


const LoginPage = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Academicool - Login</title>
        <meta name="description" content="Modelo Integral De Seguimiento Académico" />
        <meta name="keywords" content="Academicool, educación, estudiante, profesor, padres" />
        <meta name="author" content="Gustavo Adolfo Pinto Zapata" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="relative hidden lg:block z-10">
          <Image src={loginPic} layout="fill" />
        </div>
        <div className="relative flex flex-col justify-between px-4">
          <div className="absolute lg:w-52 w-48 lg:h-52 h-48 bg-accentColor top- rounded-full -left-4 -top-4" />
          <div className="absolute lg:w-48 w-40 lg:h-48 h-40 bg-primaryColor top- rounded-full top-20 left-20 z-10" />
          <div className="absolute lg:w-44 w-32 lg:h-44 h-32 bg-secondaryColor top- rounded-full top- lg:left-48 left-48" />
          <div className="flex flex-col justify-center flex-1 space-y-5 mt-16 items-center">
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
    </>
  )
}

export async function getServerSideProps ({ req }) {
  const { user_auth_token } = req.cookies

  const user = await getUserAuthenticated(user_auth_token)

  if(user) {
    return {
      redirect: { permanent: false, destination: getRoleRedirectUrl(user.role) }
    }
  }

  return {
    props : {}
  }

}

export default LoginPage;