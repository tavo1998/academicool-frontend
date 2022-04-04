import PaginationButtons from "../admin_dashboard/PaginationButtons"
import AccentButton from "../common/AccentButton"
import Calendar from "../common/Calendar"
import SearchInputDesktop from "../common/SearchInputDesktop"
import SectionHeader from "../common/SectionHeader"
import AssignmentDesktopItem from "./AssignmentDesktopItem"

const AssistanceBox = () => {
  return (
    <div className="p-4 bg-primaryColor bg-opacity-10 h-full overflow-y-scroll">
      <SectionHeader
        title="Asistencias" 
      />
      <div className="flex-1 flex justify-center">
        <div className="w-3/5">
          <Calendar />
        </div>
      </div>
    </div>
  )
}

export default AssistanceBox