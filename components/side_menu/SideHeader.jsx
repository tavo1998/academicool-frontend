import { BsX } from "react-icons/bs";

const SideHeader = ({ name, description, handleOpen }) => {
  return (
    <div>
      <button onClick={handleOpen}>
        <BsX className="text-white h-10 w-10"/>
      </button>
      <div className="flex flex-col items-center">
        <div className="rounded-full h-24 w-24 bg-white"/>
        <h1 className="mt-2 text-white font-semibold">{name}</h1>
        <h1 className="text-white text-sm font-light text-opacity-80">{description}</h1>
      </div>
    </div>
  )
}

export default SideHeader;