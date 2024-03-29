import { BsX } from "react-icons/bs";
import { useUser } from "./../../context/userContext";
import { getUserRoleName } from "./../../lib/userRole"
import useStore from "../../store";

const SideHeader = () => {
  const user = useUser();
  const setIsSideBarOpen = useStore(state => state.setIsSideBarOpen)
  const student = useStore(state => state.studentSelected)

  return (
    <div>
      <button onClick={() => setIsSideBarOpen()} className="lg:hidden">
        <BsX className="text-white h-10 w-10"/>
      </button>
      <div className="flex flex-col items-center">
        <h1 className="mt-2 text-white font-semibold lg:text-xl break-words w-full text-center">
          { student ? 
            `${student.first_name} ${student.last_name}` :
            `${user.first_name} ${user.last_name}`
          }
        </h1>
        <h1 className="text-white text-sm font-light text-opacity-80 lg:text-base">
          {getUserRoleName(user.role)}
        </h1>
      </div>
    </div>
  )
}

export default SideHeader;