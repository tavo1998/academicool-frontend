import { EDIT_ASSISTANCE, QUALIFY_ASSISTANCE } from "../../config/common"
import AssistanceTab from "./AssistanceTab"
import QualifyAssistance from "./QualifyAssistance"
import useStore from "../../store"

const AssistanceBox = () => {
  const tabSelected = useStore(state => state.tabSelected)

  const renderComponent = () => {
    switch(tabSelected) {
      case QUALIFY_ASSISTANCE:
        return <QualifyAssistance />
      case EDIT_ASSISTANCE:
        return <QualifyAssistance isEdit={true}/>
      default:
        return <AssistanceTab />
    }
  }

  return (
    <div className="p-4 h-full overflow-y-auto">
      { renderComponent() }
    </div>
  )
}

export default AssistanceBox