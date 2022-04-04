import { CREATE_ASSIGNMENT } from "../../config/common"
import useStore from "../../store"
import PaginationButtons from "../admin_dashboard/PaginationButtons"
import AccentButton from "../common/AccentButton"
import SearchInputDesktop from "../common/SearchInputDesktop"
import SectionHeader from "../common/SectionHeader"
import AssignmentDesktopItem from "./AssignmentDesktopItem"


const AssignmentListDesktop = () => {
  const setTabSelected = useStore(state => state.setTabSelected)

  return (
    <>
      <div className="flex justify-between">
        <SectionHeader
          title="Asignaciones" 
        />
        <div className="flex flex-1 justify-end">
          <SearchInputDesktop
            placeholder="Buscar" 
            />
          <AccentButton
            onClick={() => setTabSelected(CREATE_ASSIGNMENT)}
            className="w-auto px-2 py-1"
            text="Agregar asignación" 
            />
        </div>
      </div>
      <div className="bg-customGrey opacity-30 h-[1px] mt-2" />
      <AssignmentDesktopItem
        className="mt-2"
      />
      <AssignmentDesktopItem
        className="mt-2"
      />
      <AssignmentDesktopItem
        className="mt-2"
      />
      <AssignmentDesktopItem
        className="mt-2"
      />
            <AssignmentDesktopItem
        className="mt-2"
      />
            <AssignmentDesktopItem
        className="mt-2"
      />
      <PaginationButtons />
    </>
  )
}

export default AssignmentListDesktop