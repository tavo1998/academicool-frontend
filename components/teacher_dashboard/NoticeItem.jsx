import { MdModeEdit } from "react-icons/md"
import { EDIT_NOTICE } from "../../config/common"
import { formatDateString } from "../../lib/calendar"
import useStore from "../../store"


const NoticeItem = ({ className, notice }) => {
  const setTabSelected = useStore(state => state.setTabSelected)
  const setTabSelectedData = useStore(state => state.setTabSelectedData)

  const handleEdit = () => {
    setTabSelectedData(notice)
    setTabSelected(EDIT_NOTICE)
  }

  return (
    <div className={`${className} bg-primaryColor bg-opacity-10 p-2 lg:p-4 rounded-sm`}>
      <div className="flex justify-between items-center">
        <h1 className="text-customGrey text-sm lg:text-base font-semibold">{notice.title}</h1>
        <button onClick={handleEdit}>
          <MdModeEdit className="h-5 w-5 text-customGrey" />
        </button>
      </div>
      <h1 className="text-customGrey text-xs lg:text-sm">{formatDateString(notice.created_at)}</h1>
      <p
        className="text-customGrey text-sm mt-2 lg:text-base">
        {notice.description}
      </p>
    </div>
  )
}

export default NoticeItem