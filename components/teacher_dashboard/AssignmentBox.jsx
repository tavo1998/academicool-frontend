import PaginationButtons from "../admin_dashboard/PaginationButtons"
import AccentButton from "../common/AccentButton"
import SearchInput from "../common/SearchInput"
import SearchInputDesktop from "../common/SearchInputDesktop"
import SectionHeader from "../common/SectionHeader"
import AssignmentDesktopItem from "./AssignmentDesktopItem"

const AssignmentBox = () => {
  return (
    <div className="p-4 bg-primaryColor bg-opacity-10 h-full">
      <div className="flex justify-between">
        <SectionHeader
          title="Asignaciones" 
        />
        <div className="flex flex-1 justify-end">
          <SearchInputDesktop
            placeholder="Buscar" 
            />
          <AccentButton
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
      <PaginationButtons />
    </div>
  )
}

export default AssignmentBox