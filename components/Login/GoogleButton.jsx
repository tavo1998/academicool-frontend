import { BsGoogle } from "react-icons/bs";

const GoogleButton = () => {
  return (
    <a
      href={`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/google`} 
      className="w-full flex justify-center items-center bg-primaryColor text-white text-md py-1 rounded-sm font-bold"
    >
      Ingresar con Google
      <BsGoogle className="ml-2"/>
    </a>
  )
}

export default GoogleButton;