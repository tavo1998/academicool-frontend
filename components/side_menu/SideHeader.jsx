import { BsX } from "react-icons/bs";

const SideHeader = ({ name, description, handleOpen }) => {
  return (
    <div>
      <button onClick={handleOpen} className="lg:hidden">
        <BsX className="text-white h-10 w-10"/>
      </button>
      <div className="flex flex-col items-center">
        <div className="rounded-full h-24 lg:h-20 w-24 lg:w-20 bg-white"/>
        <h1 className="mt-2 text-white font-semibold lg:text-sm">{name}</h1>
        <h1 className="text-white text-sm font-light text-opacity-80 lg:text-xs">{description}</h1>
      </div>
    </div>
  )
}

export default SideHeader;