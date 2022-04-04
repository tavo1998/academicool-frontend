import { CREATE_ASSIGNMENT } from "../../config/common"
import useStore from "../../store"
import AssignmentListDesktop from "./AssignmentListDesktop"
import CreateEditAssignment from "./CreateEditAssignment"

const AssignmentBox = () => {
  const tabSelected = useStore(state => state.tabSelected)

  const renderComponent = () => {
    if(tabSelected === CREATE_ASSIGNMENT) return <CreateEditAssignment />
    else return <AssignmentListDesktop />
  }

  return (
    <div className="p-4 bg-primaryColor bg-opacity-10 h-full overflow-y-scroll">
      { renderComponent() }
    </div>
  )
}

export default AssignmentBox