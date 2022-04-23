import SectionHeader from "../common/SectionHeader"
import AssistanceScore from "./AssistanceScore"

const AssistanceStatistics = ({ subjects }) => {
  return (
    <div className="p-4 h-screen overflow-hidden overflow-y-auto">
      <SectionHeader
        title="Estadísticas de asistencia" 
      />
      <div className="lg:grid grid-cols-4 gap-4">
        {
          subjects.map(subject => (
            <AssistanceScore
              key={subject.id}
              className="mt-2"
              subject={subject}
            />
          ))
        }
      </div>
    </div>
  )
}

export default AssistanceStatistics