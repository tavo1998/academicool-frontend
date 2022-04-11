import StudentAssignmentTab from "./StudentAssignmentTab"
import StudentNoticeTab from "./StudentNoticeTab"
import StudentAssistanceTab from "./StudentAssistanceTab"
import useStore from "../../store"

const SubjectDesktopStudentSection = () => {
  const subject = useStore(state => state.sectionSelected.data)

  return (
    <div className="flex flex-col p-4 h-screen w-full">
      <div className="pb-2">
        <h1 className="text-lg text-customGrey font-semibold">{subject.name}</h1>
        <p className="text-customGrey">
          {subject.description}
        </p>
      </div>
      <div className="flex-1 grid grid-cols-3 grid-rows-1 gap-4 h-4/5">
        <div className="row-span-2">
          <StudentAssignmentTab />
        </div>
        <div>
          <StudentNoticeTab />
        </div>
        <div>
          <StudentAssistanceTab />
        </div>
      </div>
    </div>
  )
}

export default SubjectDesktopStudentSection