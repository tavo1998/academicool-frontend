import { BsX } from "react-icons/bs";
import { useUser } from "./../../context/userContext";
import { getUserRoleName } from "./../../lib/userRole"
import useStore from "../../store";

const SideHeader = ({ name, description, handleOpen }) => {
  const user = useUser();
  const setIsSideBarOpen = useStore(state => state.setIsSideBarOpen)

  return (
    <div>
      <button onClick={() => setIsSideBarOpen()} className="lg:hidden">
        <BsX className="text-white h-10 w-10"/>
      </button>
      <div className="flex flex-col items-center">
        <div className="rounded-full h-24 lg:h-20 w-24 lg:w-20 bg-white"/>
        <h1 className="mt-2 text-white font-semibold lg:text-xl">{user.first_name} {user.last_name}</h1>
        <h1 className="text-white text-sm font-light text-opacity-80 lg:text-base">{getUserRoleName(user.role)}</h1>
      </div>
    </div>
  )
}

export default SideHeader;