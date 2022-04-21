import { formatDateString, getLocalISOString, addLocalOffset } from "../../lib/calendar"

const StudentNoticeItem = ({className, notice }) => {
  return (
    <div className={`${className} bg-primaryColor bg-opacity-10 p-2 lg:p-4 rounded-sm`}>
      <h1 className="text-customGrey text-sm lg:text-base font-semibold">{notice.title}</h1>
      <h1 className="text-customGrey text-xs lg:text-sm">
        {formatDateString(getLocalISOString(addLocalOffset(new Date(notice.created_at))))}
      </h1>
      <p
        className="text-customGrey text-sm mt-2">
        {notice.description}
      </p>
    </div>
  )
}

export default StudentNoticeItem