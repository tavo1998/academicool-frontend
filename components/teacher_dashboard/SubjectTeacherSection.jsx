import useStore from "../../store"
import SectionHeader from "../common/SectionHeader"
import SubjectDescription from "./SubjectDescription"
import SubjectTabs from "./SubjectTabs"
import { ASSIGNMENT_TAB, ASSISTANCE_TAB, CREATE_ASSIGNMENT, CREATE_NOTICE, NOTICES_TAB, TABS, WITHOUT_TABS_BAR } from "../../config/common"
import NoTabSelected from "./NoTabSelected"
import AssignmetTab from "./AssignmentTab"
import NoticeTab from "./NoticeTab"
import AssistanceTab from "./AssistanceTab"
import CreateAssigment from "./CreateAssigment"
import CreateNotice from "./CreateNotice"

const SubjectTeacherSection = () => {
  const { data } = useStore(state => state.sectionSelected)
  const tabSelected  = useStore(state => state.tabSelected)
  const setTabSelected  = useStore(state => state.setTabSelected)

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
        return <CreateAssigment handleCancel={() => setTabSelected(ASSIGNMENT_TAB)} />
      case CREATE_NOTICE:
        return <CreateNotice handleCancel={() => setTabSelected(NOTICES_TAB)} />
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