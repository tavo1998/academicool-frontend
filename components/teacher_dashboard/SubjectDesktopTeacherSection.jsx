import AssignmentBox from "./AssignmentBox"
import AssistanceBox from "./AssistanceBox"
import NoticeBox from "./NoticeBox"

const SubjectDesktopTeacherSection = () => {
  return (
    <div className="flex flex-col p-4 h-screen">
      <div className="pb-2">
        <h1 className="text-lg text-customGrey font-semibold">Matemáticas</h1>
        <p className="text-customGrey">La matematica es una ciencia que se encuentra involucrada en muchos aspectos de la vida diaria. Permiten el análisis de muchos fenomenos que se encuentran en las diferenes areas del conocimiento...</p>
      </div>
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 h-4/5">
        <div className="row-span-2">
          <AssignmentBox />
        </div>
        <div>
          <NoticeBox />
        </div>
        <div>
          <AssistanceBox />
        </div>
      </div>
    </div>
  )
}

export default SubjectDesktopTeacherSection