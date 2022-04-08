import { CREATE_ASSIGNMENT, EDIT_ASSIGNMENT, EDIT_ASSIGNMENT_SCORE, QUALIFY_ASSIGNMENT } from "../../config/common"
import useStore from "../../store"
import CreateEditAssignment from "./CreateEditAssignment"
import QualifyAssignment from "./QualifyAssignment"
import AssignmentTab from "./AssignmentTab"

const AssignmentBox = () => {
  const tabSelected = useStore(state => state.tabSelected)

  const renderComponent = () => {
    switch(tabSelected){
      case CREATE_ASSIGNMENT:
        return <CreateEditAssignment />
      case EDIT_ASSIGNMENT:
        return <CreateEditAssignment isEdit={true}/>
      case QUALIFY_ASSIGNMENT:
        return <QualifyAssignment />
      case EDIT_ASSIGNMENT_SCORE:
        return <QualifyAssignment isEdit={true} />
      default:
        return <AssignmentTab />
    }
  }

  return (
    <div className="p-4 h-full overflow-y-auto">
      { renderComponent() }
    </div>
  )
}

export default AssignmentBox