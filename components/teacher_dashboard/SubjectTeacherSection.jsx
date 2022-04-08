import useStore from "../../store"
import SectionHeader from "../common/SectionHeader"
import SubjectDescription from "./SubjectDescription"
import SubjectTabs from "./SubjectTabs"
import NoTabSelected from "./NoTabSelected"
import AssignmetTab from "./AssignmentTab"
import NoticeTab from "./NoticeTab"
import AssistanceTab from "./AssistanceTab"
import CreateEditAssignment from "./CreateEditAssignment"
import CreateEditNotice from "./CreateEditNotice"
import QualifiedAssignment from "./QualifiedAssignment"
import { 
  ASSIGNMENT_TAB, 
  ASSISTANCE_TAB, 
  CREATE_ASSIGNMENT, 
  CREATE_NOTICE, 
  EDIT_ASSIGNMENT, 
  EDIT_ASSIGNMENT_SCORE, 
  EDIT_ASSISTANCE, 
  EDIT_NOTICE, 
  NOTICES_TAB, 
  QUALIFY_ASSIGNMENT, 
  QUALIFY_ASSISTANCE, 
  TABS, 
  WITHOUT_TABS_BAR 
} from "../../config/common"
import QualifyAssistance from "./QualifyAssistance"

const SubjectTeacherSection = () => {
  const { data } = useStore(state => state.sectionSelected)
  const tabSelected  = useStore(state => state.tabSelected)

  const renderTabsBar = () => {
    if(WITHOUT_TABS_BAR.includes(tabSelected)) return null
    return <SubjectTabs tabs={TABS} />
  }
  
  const renderTab = () => {
    switch(tabSelected){
      case null:
        return <NoTabSelected />
      case ASSIGNMENT_TAB:
        return <AssignmetTab />
      case NOTICES_TAB:
        return <NoticeTab />
      case ASSISTANCE_TAB:
        return <AssistanceTab />
      case CREATE_ASSIGNMENT:
        return <CreateEditAssignment />
      case EDIT_ASSIGNMENT:
        return <CreateEditAssignment isEdit={true} />
      case QUALIFY_ASSIGNMENT:
        return <QualifiedAssignment />
      case EDIT_ASSIGNMENT_SCORE:
        return <QualifiedAssignment isEdit={true} />
      case CREATE_NOTICE:
        return <CreateEditNotice />
      case EDIT_NOTICE:
        return <CreateEditNotice isEdit={true}/>
      case QUALIFY_ASSISTANCE:
        return <QualifyAssistance />
      case EDIT_ASSISTANCE:
        return <QualifyAssistance isEdit={true} />
      default:
        return <h1>Fantastico</h1>
    }
  }

  return (
    <div className="p-4 space-y-2">
      <SectionHeader title={data.name} />
      <SubjectDescription
        description={data.description} />
      { renderTabsBar() } 
      { renderTab() }
    </div>
  )
}

export default SubjectTeacherSection