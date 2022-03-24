import { BsGoogle } from "react-icons/bs";

const GoogleButton = () => {
  return (
    <button 
      className="w-full flex justify-center items-center bg-primaryColor text-white text-md py-1 rounded-sm font-bold"
    >
      Ingresar con Google
      <BsGoogle className="ml-2"/>
    </button>
  )
}

export default GoogleButton;