import { TABS, ASSIGNMENT_TAB, NOTICES_TAB, ASSISTANCE_TAB } from "../../config/common"
import useStore from "../../store"
import SectionHeader from "../common/SectionHeader"
import SubjectDescription from "../teacher_dashboard/SubjectDescription"
import SubjectTabs from "../teacher_dashboard/SubjectTabs"
import NoTabSelected from "../teacher_dashboard/NoTabSelected"
import StudentAssignmentTab from "./StudentAssignmentTab"
import StudentNoticeTab from "./StudentNoticeTab"
import StudentAssistanceTab from "./StudentAssistanceTab"
import TeacherSectionInfo from "./TeacherSectionInfo"

const SubjectStudentSection = () => {
  const subject = useStore(state => state.sectionSelected.data)
  const tabSelected = useStore(state => state.tabSelected)

  const renderTab = () => {
    switch(tabSelected){
      case null:
        return <NoTabSelected />
      case ASSIGNMENT_TAB:
        return <StudentAssignmentTab />
      case NOTICES_TAB:
        return <StudentNoticeTab />
      case ASSISTANCE_TAB:
        return <StudentAssistanceTab />
    }
  }

  return (
    <div className="p-4 space-y-2">
      <SectionHeader title={subject.name} />
      <TeacherSectionInfo teacher={subject.teacher} />
      <SubjectDescription description={subject.description} />
      <SubjectTabs tabs={TABS}/>
      {renderTab()}
    </div>
  )
}

export default SubjectStudentSection