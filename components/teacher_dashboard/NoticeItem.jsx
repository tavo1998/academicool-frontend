import { MdModeEdit } from "react-icons/md"
import { formatDateString } from "../../lib/calendar"

const NoticeItem = ({ className, notice }) => {
  return (
    <div className={`${className} bg-primaryColor bg-opacity-10 p-2 lg:p-4 rounded-sm`}>
      <div className="flex justify-between items-center">
        <h1 className="text-customGrey text-sm lg:text-base font-semibold">{notice.title}</h1>
        <MdModeEdit className="h-5 w-5 text-customGrey" />
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