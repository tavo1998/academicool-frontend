import useStore from "../../store"
import SectionHeader from "../common/SectionHeader"
import SubjectDescription from "./SubjectDescription"
import SubjectTabs from "./SubjectTabs"
import { ASSIGNMENT_TAB, TABS } from "../../config/common"
import NoTabSelected from "./NoTabSelected"
import AssignmetTab from "./AssignmentTab"

const SubjectTeacherSection = () => {
  const { data } = useStore(state => state.sectionSelected)
  const tabSelected  = useStore(state => state.tabSelected)

  const renderTab = () => {
    switch(tabSelected){
      case null:
        return <NoTabSelected />
      case ASSIGNMENT_TAB:
        return <AssignmetTab />
      default:
        return <h1>Fantastico</h1>
    }
  }

  return (
    <div className="p-4 space-y-2">
      <SectionHeader title={data.name} />
      <SubjectDescription
        description={data.description} />
      <SubjectTabs
        tabs={TABS} />
      { renderTab() }
    </div>
  )
}

export default SubjectTeacherSection