import { CREATE_NOTICE, EDIT_NOTICE } from "../../config/common"
import useStore from "../../store"
import CreateEditNotice from "./CreateEditNotice"
import NoticeTab from "./NoticeTab"

const NoticeBox = () => {
  const tabSelected = useStore(state => state.tabSelected)

  const renderComponent = () => {
    switch(tabSelected) {
      case CREATE_NOTICE:
        return <CreateEditNotice />
      case EDIT_NOTICE:
        return <CreateEditNotice isEdit={true}/>
      default:
        return <NoticeTab />
    }
  }

  return (
    <div className="p-4 h-full overflow-y-scroll">
      {renderComponent()}
    </div>
  )
}

export default NoticeBox