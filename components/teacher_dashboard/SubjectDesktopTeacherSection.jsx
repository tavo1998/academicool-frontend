import AssignmentBox from "./AssignmentBox"

const SubjectDesktopTeacherSection = () => {
  return (
    <div className="flex flex-col p-4 h-screen">
      <div>Probando</div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
        <div className="row-span-2">
          <AssignmentBox />
        </div>
        <div>
          dos
        </div>
        <div>
          Tres
        </div>
      </div>
    </div>
  )
}

export default SubjectDesktopTeacherSection