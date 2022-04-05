import { CREATE_NOTICE } from "../../config/common"
import useStore from "../../store"
import CreateEditNotice from "./CreateEditNotice"
import NoticeListDesktop from "./NoticeListDesktop"

const NoticeBox = () => {
  const tabSelected = useStore(state => state.tabSelected)

  const renderComponent = () => {
    if(tabSelected === CREATE_NOTICE) return <CreateEditNotice />
    else return <NoticeListDesktop />
  }

  return (
    <div className="p-4 h-full overflow-y-scroll">
      {renderComponent()}
    </div>
  )
}

export default NoticeBox