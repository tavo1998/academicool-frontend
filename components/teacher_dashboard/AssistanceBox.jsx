import Calendar from "../common/Calendar"
import SectionHeader from "../common/SectionHeader"

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