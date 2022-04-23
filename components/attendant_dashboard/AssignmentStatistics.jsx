import SectionHeader from "../common/SectionHeader"
import AssignmentScoreAverage from "./AssignmentScoreAverage"

const AssignmentStatistics = ({ subjects }) => {
  return (
    <div className="p-4 h-screen overflow-hidden overflow-y-auto">
      <SectionHeader
        title="Promedio de calificaciones" 
      />
      <div className="lg:grid grid-cols-4 gap-4">
        {
          subjects.map(subject => (
            <AssignmentScoreAverage
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

export default AssignmentStatistics